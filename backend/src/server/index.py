from fastapi import FastAPI, Request, Depends, HTTPException
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from src.utils.helper import read_pdf_file
from src.models.gemini.gemini import GenAI
from src.models.docusign.docusign import DocuSignClient
from src.settings.config import settings
from datetime import datetime
import os
import httpx


app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


async def get_docusign_client(request: Request) -> DocuSignClient:
    """Extract the access token and initialize DocuSignClient."""
    access_token = request.headers.get("Authorization")
    if not access_token or not access_token.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    return DocuSignClient(access_token.split("Bearer ")[-1])


@app.get('/')
async def home():
    """
    Endpoint welcoming users to the AgreeMetrics API.
    """
    return {"message": "Welcome to Agreemetrics"}


@app.get("/login")
async def login():
    """
    Redirects the user to DocuSign's OAuth login page.
    """
    auth_url = (
        f"{settings.DOCUSIGN_AUTH_URL}?response_type=code&scope={settings.SCOPES}"
        f"&client_id={settings.DOCUSIGN_INTEGRATION_KEY}&redirect_uri={settings.REDIRECT_URI}"
    )
    return RedirectResponse(auth_url)


@app.get("/callback")
async def callback(request: Request):
    """
    Handles the OAuth callback and retrieves the access token.
    """
    code = request.query_params.get("code")
    if not code:
        return {"error": "Authorization code not provided"}

    async with httpx.AsyncClient() as client:
        response = await client.post(
            settings.DOCUSIGN_TOKEN_URL,
            data={
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": settings.REDIRECT_URI,
                "client_id": settings.DOCUSIGN_INTEGRATION_KEY,
                "client_secret": settings.DOCUSIGN_SECRET_KEY,
            },
        )
        if response.status_code == 200:
            token_data = response.json()
            access_token = token_data.get("access_token")
            
        # Generate a success page that communicates with the parent window
            html_content = f"""
            <script>
                window.onload = function() {{
                    // Send the token to the parent window using postMessage
                    window.opener.postMessage({{"accessToken": "{access_token}"}}, "*");
                    window.close();
                }};
            </script>
            """
            return HTMLResponse(content=html_content)
            #return {"accessToken": access_token}
        else:
            return {"error": response.text}
        

@app.get("/userinfo")
async def get_user_info(client: DocuSignClient = Depends(get_docusign_client)):
    try:
        return await client.fetch_user_info()
    finally:
        await client.close()
        

@app.get("/documents")
async def get_documents(
    client: DocuSignClient = Depends(get_docusign_client), from_date: str = "2024-01-01T00:00:00Z"
):
    try:
        account_id = await client.fetch_account_id()
        documents = await client.fetch_documents(account_id, from_date)
        return documents
    finally:
        await client.close()


@app.get("/process")
async def process(
    document_uri: str, document_name: str, client: DocuSignClient = Depends(get_docusign_client)
):
    try:
        account_id = await client.fetch_account_id()
        document_content = await client.fetch_document(account_id, document_uri)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        document_name_with_timestamp = f"{timestamp}_{document_name}"

        # Save document locally to the downloads directory
        document_path = os.path.join("downloads", document_name_with_timestamp)
        os.makedirs(os.path.dirname(document_path), exist_ok=True)
        with open(document_path, "wb") as f:
            f.write(document_content)

        # Process document
        agreement_list = read_pdf_file(document_path)
        genai = GenAI()
        return genai.generateJSON(agreement_list=agreement_list)
    finally:
        await client.close()
