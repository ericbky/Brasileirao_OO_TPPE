from app.schemas.schemas import HistoricoTecnicoCreate
from app.repositories.historico_tecnico_repository import (
    criar_historico_tecnico_repository,
    listar_historico_tecnico_repository,
    deletar_historico_tecnico_repository,
    atualizar_historico_tecnico_repository,
)
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_historico_tecnico_controller(
    data: HistoricoTecnicoCreate, session: AsyncSession
):
    return await criar_historico_tecnico_repository(data, session)


async def listar_historico_tecnicos_controller(session: AsyncSession):
    return await listar_historico_tecnico_repository(session)


async def deletar_historico_tecnico_controller(id: int, session: AsyncSession):
    return await deletar_historico_tecnico_repository(id, session)


async def atualizar_historico_tecnico_controller(
    id: int, data: HistoricoTecnicoCreate, session: AsyncSession
):
    return await atualizar_historico_tecnico_repository(id, data, session)
