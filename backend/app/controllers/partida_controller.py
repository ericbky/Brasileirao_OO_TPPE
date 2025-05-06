from app.schemas.schemas import PartidaCreate
from app.repositories.partida_repository import (
    criar_partida_repository,
    listar_partidas_repository,
    deletar_partida_repository,
    atualizar_partida_repository,
)
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_partida_controller(partida_data: PartidaCreate, session: AsyncSession):
    return await criar_partida_repository(partida_data, session)


async def listar_partidas_controller(session: AsyncSession):
    return await listar_partidas_repository(session)


async def deletar_partida_controller(id: int, session: AsyncSession):
    return await deletar_partida_repository(id, session)


async def atualizar_partida_controller(
    id: int, partida: PartidaCreate, session: AsyncSession
):
    return await atualizar_partida_repository(id, partida, session)
