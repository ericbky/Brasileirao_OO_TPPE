import pytest
import pytest_asyncio
from httpx import AsyncClient
from httpx._transports.asgi import ASGITransport
from sqlalchemy.ext.asyncio import AsyncSession
from typing import AsyncGenerator

from app.main import app
from app.db.database import get_db


@pytest_asyncio.fixture
async def db_session() -> AsyncGenerator[AsyncSession, None]:
    async for session in get_db():
        yield session


@pytest_asyncio.fixture
async def client(db_session: AsyncSession) -> AsyncGenerator[AsyncClient, None]:
    async def _override():
        yield db_session

    app.dependency_overrides[get_db] = _override

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


@pytest.mark.asyncio
async def test_criar_listar_atualizar_deletar_estadio(client):
    # Criar estádio
    payload = {
        "nome": "Estádio Nacional BRB",
        "capacidade": 70000,
        "cidade": "Brasília",
        "estado": "DF",
        "pais": "Brasil",
    }

    response = await client.post("/estadio/criar_estadio", json=payload)
    assert response.status_code == 201
    estadio = response.json()
    estadio_id = estadio["id"]

    # Listar estádios
    response = await client.get("/estadio/listar_estadios")
    assert response.status_code == 200
    estadios = response.json()
    assert any(e["id"] == estadio_id for e in estadios)

    # Atualizar estádio
    novo_payload = {
        "nome": "Estádio Nacional Atualizado",
        "capacidade": 65000,
        "cidade": "Brasília",
        "estado": "DF",
        "pais": "Brasil",
    }

    response = await client.put(
        f"/estadio/atualizar_estadio?id={estadio_id}", json=novo_payload
    )
    assert response.status_code == 200
    assert response.json() == f"Estádio {novo_payload['nome']} atualizado com sucesso."

    # Deletar estádio
    response = await client.delete(f"/estadio/deletar_estadio?id={estadio_id}")
    assert response.status_code == 200
    assert response.json() == f"Estádio {novo_payload['nome']} deletado com sucesso."
