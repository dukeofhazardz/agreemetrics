from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DOCUSIGN_AUTH_URL: str = "https://account-d.docusign.com/oauth/auth"
    DOCUSIGN_TOKEN_URL: str = "https://account-d.docusign.com/oauth/token"
    DOCUSIGN_USERINFO_URL: str = "https://account-d.docusign.com/oauth/userinfo"
    DOCUSIGN_API_URL: str = "https://demo.docusign.net/restapi/v2.1/accounts"
    DOCUSIGN_INTEGRATION_KEY: str
    DOCUSIGN_SECRET_KEY: str
    REDIRECT_URI: str = "http://localhost:10000/callback"
    SCOPES: str = "signature impersonation"
    GOOGLE_API_KEY: str
    TIMEOUT: int = 60

    class Config:
        env_file = ".env"

settings = Settings()
