from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import HistoricoTecnico
from app.schemas.schemas import HistoricoTecnicoCreate


async def criar_historico_tecnico_repository(
    data: HistoricoTecnicoCreate, session: AsyncSession
) -> HistoricoTecnico:
    novo = HistoricoTecnico(**data.model_dump())
    session.add(novo)
    await session.commit()
    await session.refresh(novo)
    return novo


async def listar_historico_tecnico_repository(
    session: AsyncSession,
) -> list[HistoricoTecnico]:
    result = await session.execute(select(HistoricoTecnico))
    return result.scalars().all()


async def deletar_historico_tecnico_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(
        select(HistoricoTecnico).where(HistoricoTecnico.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Histórico técnico com id={id} não encontrado."
        )

    await session.delete(entity)
    await session.commit()
    return f"Histórico técnico {id} deletado com sucesso."


async def atualizar_historico_tecnico_repository(
    id: int, data: HistoricoTecnicoCreate, session: AsyncSession
) -> str:
    result = await session.execute(
        select(HistoricoTecnico).where(HistoricoTecnico.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Histórico técnico com id={id} não encontrado."
        )

    for key, value in data.model_dump().items():
        setattr(entity, key, value)

    await session.commit()
    return f"Histórico técnico {id} atualizado com sucesso."
