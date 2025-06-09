from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    EstatisticaTimePartidaRead,
    EstatisticaTimePartidaCreate,
)


from api.estatistica.controller import (
    criar_estatistica_controller,
    listar_estatisticas_controller,
    deletar_estatistica_controller,
    atualizar_estatistica_controller,
)


router = APIRouter()


@router.post(
    "/criar_estatistica",
    response_model=EstatisticaTimePartidaRead,
    status_code=201,
    tags=["Estatística"],
)
async def criar_estatistica(
    estatistica: EstatisticaTimePartidaCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_estatistica_controller(estatistica, session)


@router.get(
    "/listar_estatisticas",
    response_model=List[EstatisticaTimePartidaRead],
    status_code=200,
    tags=["Estatística"],
)
async def listar_estatisticas(session: AsyncSession = Depends(get_db)):
    return await listar_estatisticas_controller(session)


@router.delete(
    "/deletar_estatistica", response_model=str, status_code=200, tags=["Estatística"]
)
async def deletar_estatistica(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_estatistica_controller(id, session)


@router.put(
    "/atualizar_estatistica", response_model=str, status_code=200, tags=["Estatística"]
)
async def atualizar_estatistica(
    id: int,
    estatistica: EstatisticaTimePartidaCreate,
    session: AsyncSession = Depends(get_db),
):
    return await atualizar_estatistica_controller(id, estatistica, session)
