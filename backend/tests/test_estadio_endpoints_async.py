import pytest
import pytest_asyncio
from uuid import uuid4
from httpx import AsyncClient
from httpx._transports.asgi import ASGITransport
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from typing import AsyncGenerator

from app.main import app
from app.db.database import get_db


# ---------- Fixture de sessão ----------
@pytest_asyncio.fixture
async def db_session() -> AsyncGenerator[AsyncSession, None]:
    async for session in get_db():
        yield session


# ---------- Sincroniza a sequência antes de cada teste,
# ---------- usando A MESMA sessão, evitando conflito de loop ----------
@pytest_asyncio.fixture(autouse=True)
async def sync_estadio_sequence(db_session: AsyncSession):
    await db_session.execute(
        text(
            """
            SELECT setval(
              pg_get_serial_sequence('estadios', 'id'),
              (SELECT COALESCE(MAX(id), 1) FROM estadios)
            )
            """
        )
    )
    await db_session.commit()


# ---------- Fixture do cliente ----------
@pytest_asyncio.fixture
async def client(db_session: AsyncSession) -> AsyncGenerator[AsyncClient, None]:
    async def _override():
        yield db_session

    app.dependency_overrides[get_db] = _override
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


# ---------- O teste ----------
@pytest.mark.asyncio
async def test_criar_listar_atualizar_deletar_estadio(client):
    nome_unico = f"Estádio Teste {uuid4()}"
    payload = {
        "nome": nome_unico,
        "capacidade": 70000,
        "cidade": "Brasília",
        "estado": "DF",
        "pais": "Brasil",
    }

    # Criar
    resp = await client.post("/estadio/criar_estadio", json=payload)
    assert resp.status_code == 201
    estadio_id = resp.json()["id"]

    # Listar
    resp = await client.get("/estadio/listar_estadios")
    assert resp.status_code == 200
    assert any(e["id"] == estadio_id for e in resp.json())

    # Atualizar
    novo_nome = f"{nome_unico} Atualizado"
    resp = await client.put(
        f"/estadio/atualizar_estadio?id={estadio_id}",
        json={**payload, "nome": novo_nome, "capacidade": 65000},
    )
    assert resp.status_code == 200
    assert resp.json() == f"Estádio {novo_nome} atualizado com sucesso."

    # Deletar
    resp = await client.delete(f"/estadio/deletar_estadio?id={estadio_id}")
    assert resp.status_code == 200
    assert resp.json() == f"Estádio {novo_nome} deletado com sucesso."
