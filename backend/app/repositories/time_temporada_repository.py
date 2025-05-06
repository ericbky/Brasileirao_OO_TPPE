from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import TimeTemporada
from app.schemas.schemas import TimeTemporadaCreate


async def criar_time_temporada_repository(
    data: TimeTemporadaCreate, session: AsyncSession
) -> TimeTemporada:
    nova = TimeTemporada(**data.model_dump())
    session.add(nova)
    await session.commit()
    await session.refresh(nova)
    return nova


async def listar_times_temporada_repository(
    session: AsyncSession,
) -> list[TimeTemporada]:
    async with session.begin():
        result = await session.execute(select(TimeTemporada))
        return result.scalars().all()


async def deletar_time_temporada_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(select(TimeTemporada).where(TimeTemporada.id == id))
    entity = result.scalar_one_or_none()

    if entity is None:
        raise HTTPException(
            status_code=404, detail=f"TimeTemporada com id={id} não encontrado."
        )

    await session.delete(entity)
    await session.commit()
    return f"TimeTemporada {id} deletado com sucesso."


async def atualizar_time_temporada_repository(
    id: int, data: TimeTemporadaCreate, session: AsyncSession
) -> str:
    result = await session.execute(select(TimeTemporada).where(TimeTemporada.id == id))
    entity = result.scalar_one_or_none()

    if entity is None:
        raise HTTPException(
            status_code=404, detail=f"TimeTemporada com id={id} não encontrado."
        )

    for key, value in data.model_dump().items():
        setattr(entity, key, value)

    await session.commit()
    return f"TimeTemporada {id} atualizado com sucesso."
