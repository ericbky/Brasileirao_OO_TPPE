from app.repositories.historico_jogador_repository import (
    criar_historico_jogador_repository,
    listar_historico_jogador_repository,
    deletar_historico_jogador_repository,
    atualizar_historico_jogador_repository,
)
from app.schemas.schemas import HistoricoJogadorCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_historico_jogador_controller(
    data: HistoricoJogadorCreate, session: AsyncSession
):
    return await criar_historico_jogador_repository(data, session)


async def listar_historico_jogadores_controller(session: AsyncSession):
    return await listar_historico_jogador_repository(session)


async def deletar_historico_jogador_controller(id: int, session: AsyncSession):
    return await deletar_historico_jogador_repository(id, session)


async def atualizar_historico_jogador_controller(
    id: int, data: HistoricoJogadorCreate, session: AsyncSession
):
    return await atualizar_historico_jogador_repository(id, data, session)
