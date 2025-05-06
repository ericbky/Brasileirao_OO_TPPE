from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from typing import List
from app.schemas.schemas import (
    EscalacaoRead,
    EscalacaoCreate,
)


from app.controllers.escalacao_controller import (
    criar_escalacao_controller,
    listar_escalacoes_controller,
    deletar_escalacao_controller,
    atualizar_escalacao_controller,
)


router = APIRouter()


@router.post(
    "/criar_escalacao",
    response_model=EscalacaoRead,
    status_code=201,
    tags=["Escalação"],
)
async def criar_escalacao(
    escalacao: EscalacaoCreate, session: AsyncSession = Depends(get_db)
):
    return await criar_escalacao_controller(escalacao, session)


@router.get(
    "/listar_escalacaos",
    response_model=List[EscalacaoRead],
    status_code=200,
    tags=["Escalação"],
)
async def listar_escalacaos(session: AsyncSession = Depends(get_db)):
    return await listar_escalacoes_controller(session)


@router.delete(
    "/deletar_escalacao", response_model=str, status_code=200, tags=["Escalação"]
)
async def deletar_escalacao(id: int, session: AsyncSession = Depends(get_db)):
    return await deletar_escalacao_controller(id, session)


@router.put(
    "/atualizar_escalacao", response_model=str, status_code=200, tags=["Escalação"]
)
async def atualizar_escalacao(
    id: int, escalacao: EscalacaoCreate, session: AsyncSession = Depends(get_db)
):
    return await atualizar_escalacao_controller(id, escalacao, session)
