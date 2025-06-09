from app.repositories.jogador_repository import (
    criar_jogador_repository,
    listar_jogadores_repository,
    deletar_jogador_repository,
    atualizar_jogador_repository,
)
from app.schemas.schemas import JogadorCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def criar_jogador_controller(jogador: JogadorCreate, session: AsyncSession):
    return await criar_jogador_repository(jogador, session)


async def listar_jogadores_controller(session: AsyncSession):
    return await listar_jogadores_repository(session)


async def deletar_jogador_controller(id: int, session: AsyncSession):
    return await deletar_jogador_repository(id, session)


async def atualizar_jogador_controller(
    id: int, jogador: JogadorCreate, session: AsyncSession
):
    return await atualizar_jogador_repository(id, jogador, session)
