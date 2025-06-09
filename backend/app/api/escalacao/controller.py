from app.repositories.escalacao_repository import (
    criar_escalacao_repository,
    listar_escalacoes_repository,
    deletar_escalacao_repository,
    atualizar_escalacao_repository,
)
from app.schemas.schemas import EscalacaoCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_escalacao_controller(
    escalacao_data: EscalacaoCreate, session: AsyncSession
):
    return await criar_escalacao_repository(escalacao_data, session)


async def listar_escalacoes_controller(session: AsyncSession):
    return await listar_escalacoes_repository(session)


async def deletar_escalacao_controller(id: int, session: AsyncSession):
    return await deletar_escalacao_repository(id, session)


async def atualizar_escalacao_controller(
    id: int, escalacao: EscalacaoCreate, session: AsyncSession
):
    return await atualizar_escalacao_repository(id, escalacao, session)
