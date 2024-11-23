import httpx
from src.settings.config import settings

class DocuSignClient:
    def __init__(self, access_token: str):
        self.access_token = access_token
        self.client = httpx.AsyncClient(timeout=httpx.Timeout(settings.TIMEOUT))

    async def fetch_user_info(self):
        """Fetch user information."""
        response = await self.client.get(
            settings.DOCUSIGN_USERINFO_URL,
            headers={"Authorization": f"Bearer {self.access_token}"}
        )
        response.raise_for_status()
        return response.json()

    async def fetch_account_id(self):
        """Fetch account ID from user info."""
        user_info = await self.fetch_user_info()
        return user_info["accounts"][0]["account_id"]

    async def fetch_documents(self, account_id: str, from_date: str):
        """Fetch envelopes."""
        response = await self.client.get(
            f"{settings.DOCUSIGN_API_URL}/{account_id}/envelopes",
            headers={"Authorization": f"Bearer {self.access_token}"},
            params={"from_date": from_date},
        )
        response.raise_for_status()
        envelopes = response.json()["envelopes"]
        document_list = []

        # Fetch document URIs for each envelope
        for envelope in envelopes:
            documents_uri = envelope.get("documentsUri")
            if documents_uri:
                document_list.append(f"{settings.DOCUSIGN_API_URL}/{account_id}{documents_uri}")

        # Fetch documents from document_list
        documents = []
        for document_uri in document_list:
            document_response = await self.client.get(
                document_uri,
                headers={"Authorization": f"Bearer {self.access_token}"},
            )
            if document_response.status_code == 200:
                document = document_response.json().get("envelopeDocuments", [])
                documents.append({
                    "document_name": document[0]["name"],
                    "document_uri": document[0]["uri"],
                })
        return documents

    async def fetch_document(self, account_id: str, document_uri: str):
        """Fetch document content."""
        print(f"{settings.DOCUSIGN_API_URL}/{account_id}{document_uri}/combined")
        response = await self.client.get(
            f"{settings.DOCUSIGN_API_URL}/{account_id}{document_uri}",
            headers={"Authorization": f"Bearer {self.access_token}"}
        )
        response.raise_for_status()
        return response.content

    async def close(self):
        """Close the HTTP client."""
        await self.client.aclose()
