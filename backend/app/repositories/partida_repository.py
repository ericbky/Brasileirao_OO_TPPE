from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import delete
from typing import List

from app.models.models import Partida
from app.schemas.schemas import PartidaCreate


async def criar_partida_repository(
    partida_data: PartidaCreate, session: AsyncSession
) -> Partida:
    nova_partida = Partida(**partida_data.model_dump())
    session.add(nova_partida)
    await session.commit()
    await session.refresh(nova_partida)
    return nova_partida


async def listar_partidas_repository(session: AsyncSession) -> List[Partida]:
    result = await session.execute(select(Partida))
    return result.scalars().all()


async def deletar_partida_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(select(Partida).where(Partida.id == id))
    partida = result.scalar_one_or_none()

    if not partida:
        raise HTTPException(
            status_code=404, detail=f"Partida com id={id} não encontrada."
        )

    await session.delete(partida)
    await session.commit()
    return f"Partida {partida.id} deletada com sucesso."


async def atualizar_partida_repository(
    id: int, partida_data: PartidaCreate, session: AsyncSession
) -> str:
    result = await session.execute(select(Partida).where(Partida.id == id))
    partida = result.scalar_one_or_none()

    if not partida:
        raise HTTPException(
            status_code=404, detail=f"Partida com id={id} não encontrada."
        )

    for key, value in partida_data.model_dump().items():
        setattr(partida, key, value)

    await session.commit()
    return f"Partida {partida.id} atualizada com sucesso."
