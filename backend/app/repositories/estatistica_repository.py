from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import EstatisticaTimePartida
from app.schemas.schemas import EstatisticaTimePartidaCreate


async def criar_estatistica_repository(
    data: EstatisticaTimePartidaCreate, session: AsyncSession
) -> EstatisticaTimePartida:
    nova = EstatisticaTimePartida(**data.model_dump())
    session.add(nova)
    await session.commit()
    await session.refresh(nova)
    return nova


async def listar_estatisticas_repository(
    session: AsyncSession,
) -> list[EstatisticaTimePartida]:
    result = await session.execute(select(EstatisticaTimePartida))
    return result.scalars().all()


async def deletar_estatistica_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(
        select(EstatisticaTimePartida).where(EstatisticaTimePartida.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Estatística com id={id} não encontrada."
        )

    await session.delete(entity)
    await session.commit()
    return f"Estatística {id} deletada com sucesso."


async def atualizar_estatistica_repository(
    id: int, data: EstatisticaTimePartidaCreate, session: AsyncSession
) -> str:
    result = await session.execute(
        select(EstatisticaTimePartida).where(EstatisticaTimePartida.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Estatística com id={id} não encontrada."
        )

    for key, value in data.model_dump().items():
        setattr(entity, key, value)

    await session.commit()
    return f"Estatística {id} atualizada com sucesso."
