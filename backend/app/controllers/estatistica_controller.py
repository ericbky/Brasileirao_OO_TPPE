from app.repositories.estatistica_repository import (
    criar_estatistica_repository,
    listar_estatisticas_repository,
    deletar_estatistica_repository,
    atualizar_estatistica_repository,
)
from app.schemas.schemas import EstatisticaTimePartidaCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_estatistica_controller(
    estatistica_data: EstatisticaTimePartidaCreate, session: AsyncSession
):
    return await criar_estatistica_repository(estatistica_data, session)


async def listar_estatisticas_controller(session: AsyncSession):
    return await listar_estatisticas_repository(session)


async def deletar_estatistica_controller(id: int, session: AsyncSession):
    return await deletar_estatistica_repository(id, session)


async def atualizar_estatistica_controller(
    id: int, estatistica: EstatisticaTimePartidaCreate, session: AsyncSession
):
    return await atualizar_estatistica_repository(id, estatistica, session)
