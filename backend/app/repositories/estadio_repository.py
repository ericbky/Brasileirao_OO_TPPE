from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import Estadio
from app.schemas.schemas import EstadioCreate


async def criar_estadio_repository(
    estadio: EstadioCreate, session: AsyncSession
) -> Estadio:
    novo_estadio = Estadio(**estadio.model_dump())
    session.add(novo_estadio)
    await session.commit()
    await session.refresh(novo_estadio)
    return novo_estadio


async def listar_estadios_repository(session: AsyncSession) -> list[Estadio]:
    result = await session.execute(select(Estadio))
    return result.scalars().all()


async def deletar_estadio_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(select(Estadio).where(Estadio.id == id))
    estadio = result.scalar_one_or_none()

    if not estadio:
        raise HTTPException(
            status_code=404, detail=f"Estádio com id={id} não encontrado."
        )

    await session.delete(estadio)
    await session.commit()
    return f"Estádio {estadio.nome} deletado com sucesso."


async def atualizar_estadio_repository(
    id: int, estadio_data: EstadioCreate, session: AsyncSession
) -> str:
    result = await session.execute(select(Estadio).where(Estadio.id == id))
    estadio = result.scalar_one_or_none()

    if not estadio:
        raise HTTPException(
            status_code=404, detail=f"Estádio com id={id} não encontrado."
        )

    for key, value in estadio_data.model_dump().items():
        setattr(estadio, key, value)

    await session.commit()
    return f"Estádio {estadio.nome} atualizado com sucesso."
