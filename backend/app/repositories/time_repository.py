# app/repositories/time_repository.py
from app.models.models import Time
from app.schemas.schemas import TimeCreate
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


async def criar_time_repository(time_data: TimeCreate, session: AsyncSession) -> Time:
    novo_time = Time(**time_data.model_dump())
    session.add(novo_time)
    await session.commit()
    await session.refresh(novo_time)

    # Força o carregamento das relações necessárias
    result = await session.execute(
        select(Time)
        .options(
            selectinload(Time.jogadores),
            selectinload(Time.historico_tecnicos),
            selectinload(Time.historico_jogadores),
        )
        .where(Time.id == novo_time.id)
    )
    return result.scalar_one()
