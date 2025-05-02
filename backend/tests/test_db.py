import pytest
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text
import os
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(dotenv_path=Path(__file__).resolve().parents[2] / ".env")

DATABASE_URL = os.getenv("DATABASE_URL")

EXPECTED_TABLES = {
    "times",
    "jogadores",
    "tecnicos",
    "partidas",
    "estadios",
    "eventos_partida",
    "escalacoes",
    "estatisticas_time_partida",
    "times_temporada",
}


@pytest.mark.asyncio
async def test_database_connection():
    engine = create_async_engine(DATABASE_URL, echo=True)
    async with engine.connect() as conn:
        result = await conn.execute(text("SELECT 1"))
        assert result.scalar() == 1


@pytest.mark.asyncio
async def test_database_tables_exist():
    engine = create_async_engine(DATABASE_URL, echo=True)
    async with engine.connect() as conn:
        result = await conn.execute(
            text("""
                SELECT table_name FROM information_schema.tables
                WHERE table_schema = 'public'
            """)
        )
        tables = {row[0] for row in result}
        missing = EXPECTED_TABLES - tables
        assert not missing, f"Tabelas não encontradas no banco: {missing}"