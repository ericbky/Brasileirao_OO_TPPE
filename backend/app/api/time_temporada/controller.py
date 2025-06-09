from app.schemas.schemas import TimeTemporadaCreate
from app.repositories.time_temporada_repository import (
    criar_time_temporada_repository,
    listar_times_temporada_repository,
    deletar_time_temporada_repository,
    atualizar_time_temporada_repository,
)
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_time_temporada_controller(
    data: TimeTemporadaCreate, session: AsyncSession
):
    return await criar_time_temporada_repository(data, session)


async def listar_times_temporada_controller(session: AsyncSession):
    return await listar_times_temporada_repository(session)


async def deletar_time_temporada_controller(id: int, session: AsyncSession):
    return await deletar_time_temporada_repository(id, session)


async def atualizar_time_temporada_controller(
    id: int, data: TimeTemporadaCreate, session: AsyncSession
):
    return await atualizar_time_temporada_repository(id, data, session)
