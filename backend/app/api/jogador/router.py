from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    JogadorRead,
    JogadorCreate,
)

from app.api.jogador.controller import (
    criar_jogador_controller,
    listar_jogadores_controller,
    deletar_jogador_controller,
    atualizar_jogador_controller,
)

router = APIRouter()


router = APIRouter()


@router.post(
    "/criar_jogador", response_model=JogadorRead, status_code=201, tags=["Jogador"]
)
async def criar_jogador(
    jogador: JogadorCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_jogador_controller(jogador, session)


@router.get(
    "/listar_jogadores",
    response_model=List[JogadorRead],
    status_code=200,
    tags=["Jogador"],
)
async def listar_jogadores(session: AsyncSession = Depends(get_db)):
    return await listar_jogadores_controller(session)


@router.delete(
    "/deletar_jogador", response_model=str, status_code=200, tags=["Jogador"]
)
async def deletar_jogador(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_jogador_controller(id, session)


@router.put("/atualizar_jogador", response_model=str, status_code=200, tags=["Jogador"])
async def atualizar_jogador(
    id: int, jogador: JogadorCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_jogador_controller(id, jogador, session)
