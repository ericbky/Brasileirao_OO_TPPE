from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    PartidaRead,
    PartidaCreate,
)


from api.partida.controller import (
    criar_partida_controller,
    listar_partidas_controller,
    deletar_partida_controller,
    atualizar_partida_controller,
)


router = APIRouter()


@router.post(
    "/criar_partida", response_model=PartidaRead, status_code=201, tags=["Partida"]
)
async def criar_partida(
    partida: PartidaCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_partida_controller(partida, session)


@router.get(
    "/listar_partidas",
    response_model=List[PartidaRead],
    status_code=200,
    tags=["Partida"],
)
async def listar_partidas(session: AsyncSession = Depends(get_db)):
    return await listar_partidas_controller(session)


@router.delete(
    "/deletar_partida", response_model=str, status_code=200, tags=["Partida"]
)
async def deletar_partida(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_partida_controller(id, session)


@router.put("/atualizar_partida", response_model=str, status_code=200, tags=["Partida"])
async def atualizar_partida(
    id: int, partida: PartidaCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_partida_controller(id, partida, session)
