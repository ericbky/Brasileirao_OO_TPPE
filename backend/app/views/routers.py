from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_session
from app.controllers.time_controller import criar_time_controller
from app.schemas.schemas import TimeRead, TimeCreate, JogadorRead, JogadorCreate, PartidaRead, PartidaCreate, TecnicoRead, TecnicoCreate
from typing import List

router = APIRouter()


@router.post("/criar_time", response_model=TimeRead, status_code=201)
async def criar_time(
    time: TimeCreate, 
    session: AsyncSession = Depends(get_session)
):
    return await criar_time_controller(time, session)


# @router.post("/criar_jogador", response_model=JogadorRead, status_code=201)
# async def criar_jogador(jogador: JogadorCreate, session: AsyncSession = Depends(get_session)):
#     return JogadorCreate


# @router.post("/criar_partida", response_model=PartidaRead, status_code=201)
# async def criar_partida(partida: PartidaCreate, session: AsyncSession = Depends(get_session)):
#     return PartidaCreate


# @router.post("/criar_tecnico", response_model=TimeRead, status_code=201)
# async def criar_tecnico(tecnico: TecnicoCreate, session: AsyncSession = Depends(get_session)):
#     return TecnicoCreate


# @router.get("/times", response_model=List[TimeRead])
# async def listar_times(session: AsyncSession = Depends(get_session)):
#     return List[TimeRead]


# # @router.get("/times/{id}", response_model=TimeRead)
# # async def buscar_time(id: int, session: AsyncSession = Depends(get_session)):

# @router.put("/times/{id}", response_model=TimeRead)
# async def atualizar_time(id: int, time: TimeCreate, session: AsyncSession = Depends(get_session)):
#     ...


# @router.get("/times", response_model=List[TimeRead])
# async def listar_times(session: AsyncSession = Depends(get_session)):
#     ...


# @router.get("/times/{id}", response_model=TimeRead)
# async def buscar_time(id: int, session: AsyncSession = Depends(get_session)):
#     ...


# @router.delete("/times/{id}", status_code=204)
# async def deletar_time(id: int, session: AsyncSession = Depends(get_session)):
#     ...
