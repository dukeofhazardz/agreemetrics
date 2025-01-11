# Agreemetrics Backend API 🚀

Welcome to the backend API for **Agreemetrics**, a tool designed to analyze contracts and generate risk insights using DocuSign and AI! Here's a detailed guide to the API routes, how they work, and what they do.

---

## Table of Contents
1. [Overview](#overview)
2. [Routes](#routes)
3. [Setup](#setup)
4. [Dependencies](#dependencies)
5. [Error Handling](#error-handling)
6. [Future Enhancements](#future-enhancements)

---

## Overview

This FastAPI-based backend integrates:
- **DocuSign API** for authentication and document management.
- **Gemini AI** for risk analysis on contract clauses.
- **Dynamic routing** to fetch user profiles, documents, and processed insights.

### Key Features
- OAuth-based authentication with DocuSign.
- Fetch envelopes and documents from DocuSign.
- Process and analyze documents using AI.
- Secure handling of tokens and sensitive data.

---

## Routes

### `GET /`
#### **Description**
Welcomes users to the API.

#### **Response**
```json
{
  "message": "Welcome to Agreemetrics"
}
```

---

### `GET /login`
#### **Description**
Redirects the user to the DocuSign OAuth login page.

#### **Response**
Redirects the user to the DocuSign authorization URL.

---

### `GET /callback`
#### **Description**
Handles the OAuth callback from DocuSign. Exchanges the authorization code for an access token.

#### **Parameters**
- `code` (Query Parameter): The authorization code from DocuSign.

#### **Response**
If successful:
- Sends the access token to the parent window using `postMessage` and closes the popup.

---

### `GET /userinfo`
#### **Description**
Fetches user information from DocuSign.

#### **Dependencies**
- Requires `Authorization` header with the Bearer token.

#### **Response**
Returns user information as JSON:
```json
{
  "user_id": "abcd1234",
  "email": "user@example.com",
  ...
}
```

---

### `GET /envelopes`
#### **Description**
Fetches envelopes (contracts) from the user's DocuSign account.

#### **Query Parameters**
- `from_date` (optional, default: `2024-01-01T00:00:00Z`): Fetch envelopes created after this date.

#### **Dependencies**
- Requires `Authorization` header.

#### **Response**
Returns a list of envelopes:
```json
[
  {
    "envelopeId": "12345",
    "status": "completed",
    "createdDateTime": "2024-01-02T10:00:00Z"
  },
  ...
]
```

---

### `GET /documents`
#### **Description**
Fetches documents from envelopes in the user's DocuSign account.

#### **Query Parameters**
- `from_date` (optional, default: `2024-01-01T00:00:00Z`): Fetch documents from envelopes created after this date.

#### **Dependencies**
- Requires `Authorization` header.

#### **Response**
Returns a list of documents:
```json
[
  {
    "documentId": "doc123",
    "name": "Contract.pdf",
    "uri": "/documents/doc123"
  },
  ...
]
```

---

### `GET /process`
#### **Description**
Processes a document and generates risk analysis using AI.

#### **Query Parameters**
- `document_uri` (required): URI of the document to process.
- `document_name` (required): Name of the document.

#### **Dependencies**
- Requires `Authorization` header.

#### **Response**
Returns JSON analysis of the document:
```json
{
  "clauses": [...],
  "risks": [...],
  "remedies": [...]
}
```

---

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/agreemetrics-backend.git
   cd agreemetrics-backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   - Add `DOCUSIGN_AUTH_URL`, `DOCUSIGN_TOKEN_URL`, `DOCUSIGN_INTEGRATION_KEY`, `DOCUSIGN_SECRET_KEY`, and `REDIRECT_URI` to `config.py`.

5. **Run the server:**
   ```bash
   uvicorn main:app --reload
   ```

---

## Dependencies

- **FastAPI:** API framework for building backend services.
- **httpx:** For making async HTTP requests to DocuSign.
- **Gemini AI:** Custom AI model for contract analysis.
- **DocuSign SDK:** For interacting with DocuSign APIs.

---

## Error Handling

- **401 Unauthorized:** Returned when the `Authorization` token is missing or invalid.
- **400 Bad Request:** Returned for invalid or missing query parameters.
- **500 Internal Server Error:** Returned for unexpected errors during processing.

---

## Future Enhancements

- **Pagination for envelopes and documents.**
- **Support for additional document storage providers (e.g., Google Drive).**
- **Detailed logging and monitoring.**
- **Multi-language support.**

---

Enjoy building with Agreemetrics! 🎉