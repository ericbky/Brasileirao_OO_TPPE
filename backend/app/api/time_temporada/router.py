from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    TimeTemporadaRead,
    TimeTemporadaCreate,
)


from api.time_temporada.controller import (
    criar_time_temporada_controller,
    listar_times_temporada_controller,
    deletar_time_temporada_controller,
    atualizar_time_temporada_controller,
)


router = APIRouter()


@router.post(
    "/criar_time_temporada",
    response_model=TimeTemporadaRead,
    status_code=201,
    tags=["Time Temporada"],
)
async def criar_time_temporada(
    time_temporada: TimeTemporadaCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_time_temporada_controller(time_temporada, session)


@router.get(
    "/listar_times_temporada",
    response_model=List[TimeTemporadaRead],
    status_code=200,
    tags=["Time Temporada"],
)
async def listar_times_temporada(session: AsyncSession = Depends(get_db)):
    return await listar_times_temporada_controller(session)


@router.delete(
    "/deletar_time_temporada",
    response_model=str,
    status_code=200,
    tags=["Time Temporada"],
)
async def deletar_time_temporada(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_time_temporada_controller(id, session)


@router.put(
    "/atualizar_time_temporada",
    response_model=str,
    status_code=200,
    tags=["Time Temporada"],
)
async def atualizar_time_temporada(
    id: int,
    time_temporada: TimeTemporadaCreate,
    session: AsyncSession = Depends(get_db),
):
    return await atualizar_time_temporada_controller(id, time_temporada, session)
