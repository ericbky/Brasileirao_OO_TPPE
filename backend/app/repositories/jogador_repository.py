from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from typing import List

from app.models.models import Jogador
from app.schemas.schemas import JogadorCreate


async def criar_jogador_repository(
    jogador_data: JogadorCreate, session: AsyncSession
) -> Jogador:
    novo_jogador = Jogador(**jogador_data.model_dump())
    session.add(novo_jogador)
    await session.commit()
    await session.refresh(novo_jogador)
    return novo_jogador


async def listar_jogadores_repository(session: AsyncSession) -> List[Jogador]:
    result = await session.execute(select(Jogador).options(selectinload(Jogador.time)))
    return result.scalars().all()


async def deletar_jogador_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(select(Jogador).where(Jogador.id == id))
    jogador = result.scalar_one_or_none()

    if jogador is None:
        raise HTTPException(
            status_code=404, detail=f"Jogador com id={id} não encontrado."
        )

    await session.delete(jogador)
    await session.commit()
    return f"Jogador {jogador.nome} deletado com sucesso."


async def atualizar_jogador_repository(
    id: int, jogador_data: JogadorCreate, session: AsyncSession
) -> str:
    result = await session.execute(select(Jogador).where(Jogador.id == id))
    jogador = result.scalar_one_or_none()

    if jogador is None:
        raise HTTPException(
            status_code=404, detail=f"Jogador com id={id} não encontrado."
        )

    for key, value in jogador_data.model_dump().items():
        setattr(jogador, key, value)

    await session.commit()
    return f"Jogador {jogador.nome} atualizado com sucesso."
