from app.repositories.evento_partida_repository import (
    criar_evento_repository,
    listar_eventos_repository,
    deletar_evento_repository,
    atualizar_evento_repository,
)
from app.schemas.schemas import EventoPartidaCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_evento_controller(
    evento_data: EventoPartidaCreate, session: AsyncSession
):
    return await criar_evento_repository(evento_data, session)


async def listar_eventos_controller(session: AsyncSession):
    return await listar_eventos_repository(session)


async def deletar_evento_controller(id: int, session: AsyncSession):
    return await deletar_evento_repository(id, session)


async def atualizar_evento_controller(
    id: int, evento: EventoPartidaCreate, session: AsyncSession
):
    return await atualizar_evento_repository(id, evento, session)
