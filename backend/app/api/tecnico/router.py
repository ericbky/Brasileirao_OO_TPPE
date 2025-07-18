from fastapi import APIRouter, HTTPException
from app.schemas.schemas import TecnicoCreate, TecnicoUpdate
from app.repositories.tecnico_repository import (
    get_tecnicos,
    get_tecnico_by_id,
    create_tecnico,
    update_tecnico,
    delete_tecnico,
)

router = APIRouter(prefix="/tecnico", tags=["Tecnico"])


@router.get("/listar_tecnicos")
async def listar_tecnicos():
    return await get_tecnicos()


@router.get("/buscar_tecnico/{tecnico_id}")
async def buscar_tecnico(tecnico_id: int):
    tecnico = await get_tecnico_by_id(tecnico_id)
    if not tecnico:
        raise HTTPException(status_code=404, detail="Técnico não encontrado")
    return tecnico


@router.post("/criar_tecnico")
async def criar_tecnico(tecnico: TecnicoCreate):
    return await create_tecnico(tecnico)


@router.put("/atualizar_tecnico/{tecnico_id}")
async def atualizar_tecnico(tecnico_id: int, tecnico: TecnicoUpdate):
    return await update_tecnico(tecnico_id, tecnico)


@router.delete("/deletar_tecnico/{tecnico_id}")
async def deletar_tecnico(tecnico_id: int):
    return await delete_tecnico(tecnico_id)
