from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.schemas import TimeCreate
from app.repositories.time_repository import (
    criar_time_repository,
    listar_times_repository,
    deletar_time_repository,
    atualizar_time_repository,
)


async def criar_time_controller(time_data: TimeCreate, session: AsyncSession):
    return await criar_time_repository(time_data, session)


async def listar_times_controller(session: AsyncSession):
    return await listar_times_repository(session)


async def deletar_time_controller(id: int, session: AsyncSession):
    return await deletar_time_repository(id, session)


async def atualizar_time_controller(id: int, time: TimeCreate, session: AsyncSession):
    return await atualizar_time_repository(id, time, session)
