from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    TimeRead,
    TimeCreate,
)


from app.api.time.controller import (
    criar_time_controller,
    listar_times_controller,
    deletar_time_controller,
    atualizar_time_controller,
)


router = APIRouter()


@router.post("/criar_time", response_model=TimeRead, status_code=201, tags=["Time"])
async def criar_time(time: TimeCreate, session: AsyncSession = Depends(get_db)):
    return await criar_time_controller(time, session)


@router.get(
    "/listar_times", response_model=List[TimeRead], status_code=200, tags=["Time"]
)
async def listar_times(session: AsyncSession = Depends(get_db)):
    return await listar_times_controller(session)


@router.delete("/deletar_time", response_model=str, status_code=200, tags=["Time"])
async def deletar_time(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_time_controller(id, session)


@router.put("/atualizar_time", response_model=str, status_code=200, tags=["Time"])
async def atualizar_time(
    id: int, time: TimeCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_time_controller(id, time, session)
