from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.schemas import EstadioCreate
from app.repositories.estadio_repository import (
    criar_estadio_repository,
    listar_estadios_repository,
    deletar_estadio_repository,
    atualizar_estadio_repository,
)


async def criar_estadio_controller(estadio_data: EstadioCreate, session: AsyncSession):
    return await criar_estadio_repository(estadio_data, session)


async def listar_estadios_controller(session: AsyncSession):
    return await listar_estadios_repository(session)


async def deletar_estadio_controller(id: int, session: AsyncSession):
    return await deletar_estadio_repository(id, session)


async def atualizar_estadio_controller(
    id: int, estadio: EstadioCreate, session: AsyncSession
):
    return await atualizar_estadio_repository(id, estadio, session)
