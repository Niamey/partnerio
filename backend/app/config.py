from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Partnerio API"
    database_path: Path = Path(__file__).resolve().parent.parent / "data" / "partnerio.db"
    cors_origins: list[str] = ["http://localhost:5500", "http://127.0.0.1:5500", "http://localhost:3000", "http://127.0.0.1:8080", "http://localhost:8080"]
    contact_email: str = "olyakorneva09@gmail.com"


settings = Settings()
