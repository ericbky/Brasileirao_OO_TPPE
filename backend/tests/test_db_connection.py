import pytest
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text
import os
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(dotenv_path=Path(__file__).resolve().parents[2] / ".env")

DATABASE_URL = os.getenv("DATABASE_URL")


@pytest.mark.asyncio
async def test_database_connection():
    
    engine = create_async_engine(DATABASE_URL, echo=True)
    async with engine.connect() as conn:
        result = await conn.execute(text("SELECT 1"))
        assert result.scalar() == 1
