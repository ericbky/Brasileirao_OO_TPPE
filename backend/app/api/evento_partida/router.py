from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    EventoPartidaRead,
    EventoPartidaCreate,
)


from api.evento_partida.controller import (
    criar_evento_controller,
    listar_eventos_controller,
    deletar_evento_controller,
    atualizar_evento_controller,
)


router = APIRouter()


@router.post(
    "/criar_evento_partida",
    response_model=EventoPartidaRead,
    status_code=201,
    tags=["Evento Partida"],
)
async def criar_evento_partida(
    evento_partida: EventoPartidaCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_evento_controller(evento_partida, session)


@router.get(
    "/listar_evento_partidas",
    response_model=List[EventoPartidaRead],
    status_code=200,
    tags=["Evento Partida"],
)
async def listar_evento_partidas(session: AsyncSession = Depends(get_db)):
    return await listar_eventos_controller(session)


@router.delete(
    "/deletar_evento_partida",
    response_model=str,
    status_code=200,
    tags=["Evento Partida"],
)
async def deletar_evento_partida(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_evento_controller(id, session)


@router.put(
    "/atualizar_evento_partida",
    response_model=str,
    status_code=200,
    tags=["Evento Partida"],
)
async def atualizar_evento_partida(
    id: int,
    evento_partida: EventoPartidaCreate,
    session: AsyncSession = Depends(get_db),
):
    return await atualizar_evento_controller(id, evento_partida, session)
