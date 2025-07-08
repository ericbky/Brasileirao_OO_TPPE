from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    HistoricoTecnicoRead,
    HistoricoTecnicoCreate,
)

from app.api.historico_tecnico.controller import (
    criar_historico_tecnico_controller,
    listar_historico_tecnicos_controller,
    deletar_historico_tecnico_controller,
    atualizar_historico_tecnico_controller,
)

router = APIRouter()


router = APIRouter()


@router.post(
    "/criar_historico_tecnico",
    response_model=HistoricoTecnicoRead,
    status_code=201,
    tags=["Historico Tecnico"],
)
async def criar_historico_tecnico(
    jogador: HistoricoTecnicoCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_historico_tecnico_controller(jogador, session)


@router.get(
    "/listar_historico_tecnicos",
    response_model=List[HistoricoTecnicoRead],
    status_code=200,
    tags=["Historico Tecnico"],
)
async def listar_historico_tecnicos(session: AsyncSession = Depends(get_db)):
    return await listar_historico_tecnicos_controller(session)


@router.delete(
    "/deletar_historico_tecnico",
    response_model=str,
    status_code=200,
    tags=["Historico Tecnico"],
)
async def deletar_historico_tecnico(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_historico_tecnico_controller(id, session)


@router.put(
    "/atualizar_historico_tecnico",
    response_model=str,
    status_code=200,
    tags=["Historico Tecnico"],
)
async def atualizar_historico_tecnico(
    id: int, jogador: HistoricoTecnicoCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_historico_tecnico_controller(id, jogador, session)
