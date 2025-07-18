from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import update
from fastapi import HTTPException
from app.models.models import Escalacao
from app.schemas.schemas import EscalacaoCreate


# Ajustes de criação, listagem, deleção e atualização de escalações
async def criar_escalacao_repository(data: EscalacaoCreate, session: AsyncSession):
    nova = Escalacao(**data.model_dump())
    session.add(nova)
    await session.commit()
    await session.refresh(nova)
    return nova


async def listar_escalacoes_repository(session: AsyncSession):
    result = await session.execute(select(Escalacao))
    return result.scalars().all()


async def deletar_escalacao_repository(id: int, session: AsyncSession):
    result = await session.execute(select(Escalacao).where(Escalacao.id == id))
    entity = result.scalar_one_or_none()
    if entity is None:
        raise HTTPException(
            status_code=404, detail=f"Escalação com id={id} não encontrada."
        )
    await session.delete(entity)
    await session.commit()
    return f"Escalação {id} deletada com sucesso."


async def atualizar_escalacao_repository(
    id: int, data: EscalacaoCreate, session: AsyncSession
):
    result = await session.execute(select(Escalacao).where(Escalacao.id == id))
    entity = result.scalar_one_or_none()
    if entity is None:
        raise HTTPException(
            status_code=404, detail=f"Escalação com id={id} não encontrada."
        )
    await session.execute(
        update(Escalacao).where(Escalacao.id == id).values(**data.model_dump())
    )
    await session.commit()
    return f"Escalacao {id} atualizada com sucesso."
