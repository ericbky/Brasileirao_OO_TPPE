from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import EventoPartida
from app.schemas.schemas import EventoPartidaCreate


async def criar_evento_repository(
    evento_data: EventoPartidaCreate, session: AsyncSession
) -> EventoPartida:
    novo_evento = EventoPartida(**evento_data.model_dump())
    session.add(novo_evento)
    await session.commit()
    await session.refresh(novo_evento)
    return novo_evento


async def listar_eventos_repository(session: AsyncSession) -> list[EventoPartida]:
    result = await session.execute(select(EventoPartida))
    return result.scalars().all()


async def deletar_evento_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(select(EventoPartida).where(EventoPartida.id == id))
    evento = result.scalar_one_or_none()

    if not evento:
        raise HTTPException(
            status_code=404, detail=f"Evento com id={id} não encontrado."
        )

    await session.delete(evento)
    await session.commit()
    return f"Evento {id} deletado com sucesso."


async def atualizar_evento_repository(
    id: int, evento_data: EventoPartidaCreate, session: AsyncSession
) -> str:
    result = await session.execute(select(EventoPartida).where(EventoPartida.id == id))
    evento = result.scalar_one_or_none()

    if not evento:
        raise HTTPException(
            status_code=404, detail=f"Evento com id={id} não encontrado."
        )

    for key, value in evento_data.model_dump().items():
        setattr(evento, key, value)

    await session.commit()
    return f"Evento {id} atualizado com sucesso."
