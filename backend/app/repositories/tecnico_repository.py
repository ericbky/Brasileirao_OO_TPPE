from app.models.models import Tecnico
from app.db.database import get_session
from app.schemas.schemas import TecnicoCreate, TecnicoUpdate
from sqlalchemy.future import select


async def get_tecnicos():
    async with get_session() as session:
        result = await session.execute(select(Tecnico))
        return result.scalars().all()


async def get_tecnico_by_id(tecnico_id: int):
    async with get_session() as session:
        result = await session.execute(select(Tecnico).where(Tecnico.id == tecnico_id))
        return result.scalar_one_or_none()


async def create_tecnico(tecnico: TecnicoCreate):
    async with get_session() as session:
        novo_tecnico = Tecnico(**tecnico.model_dump())
        session.add(novo_tecnico)
        await session.commit()
        await session.refresh(novo_tecnico)
        return novo_tecnico


async def update_tecnico(tecnico_id: int, tecnico: TecnicoUpdate):
    async with get_session() as session:
        result = await session.execute(select(Tecnico).where(Tecnico.id == tecnico_id))
        obj = result.scalar_one_or_none()
        if not obj:
            return None
        for key, value in tecnico.dict(exclude_unset=True).items():
            setattr(obj, key, value)
        await session.commit()
        await session.refresh(obj)
        return obj


async def delete_tecnico(tecnico_id: int):
    async with get_session() as session:
        result = await session.execute(select(Tecnico).where(Tecnico.id == tecnico_id))
        obj = result.scalar_one_or_none()
        if not obj:
            return None
        await session.delete(obj)
        await session.commit()
        return {"ok": True}
