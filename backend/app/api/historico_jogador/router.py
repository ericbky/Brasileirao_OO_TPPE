from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    HistoricoJogadorRead,
    HistoricoJogadorCreate,
)

from api.historico_jogador.controller import (
    criar_historico_jogador_controller,
    listar_historico_jogadores_controller,
    deletar_historico_jogador_controller,
    atualizar_historico_jogador_controller,
)

router = APIRouter()


router = APIRouter()


@router.post(
    "/criar_historico_jogador",
    response_model=HistoricoJogadorRead,
    status_code=201,
    tags=["Histórico Jogador"],
)
async def criar_historico_jogador(
    jogador: HistoricoJogadorCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_historico_jogador_controller(jogador, session)


@router.get(
    "/listar_historico_jogadores",
    response_model=List[HistoricoJogadorRead],
    status_code=200,
    tags=["Histórico Jogador"],
)
async def listar_historico_jogadores(session: AsyncSession = Depends(get_db)):
    return await listar_historico_jogadores_controller(session)


@router.delete(
    "/deletar_historico_jogador",
    response_model=str,
    status_code=200,
    tags=["Histórico Jogador"],
)
async def deletar_historico_jogador(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_historico_jogador_controller(id, session)


@router.put(
    "/atualizar_historico_jogador",
    response_model=str,
    status_code=200,
    tags=["Histórico Jogador"],
)
async def atualizar_historico_jogador(
    id: int, jogador: HistoricoJogadorCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_historico_jogador_controller(id, jogador, session)
