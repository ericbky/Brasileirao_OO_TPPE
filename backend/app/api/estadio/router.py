from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    EstadioRead,
    EstadioCreate,
)


from api.estadio.controller import (
    criar_estadio_controller,
    listar_estadios_controller,
    deletar_estadio_controller,
    atualizar_estadio_controller,
)


router = APIRouter()


@router.post(
    "/criar_estadio", response_model=EstadioRead, status_code=201, tags=["Estádio"]
)
async def criar_estadio(
    estadio: EstadioCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_estadio_controller(estadio, session)


@router.get(
    "/listar_estadios",
    response_model=List[EstadioRead],
    status_code=200,
    tags=["Estádio"],
)
async def listar_estadios(session: AsyncSession = Depends(get_db)):
    return await listar_estadios_controller(session)


@router.delete(
    "/deletar_estadio", response_model=str, status_code=200, tags=["Estádio"]
)
async def deletar_estadio(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_estadio_controller(id, session)


@router.put("/atualizar_estadio", response_model=str, status_code=200, tags=["Estádio"])
async def atualizar_estadio(
    id: int, estadio: EstadioCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_estadio_controller(id, estadio, session)
