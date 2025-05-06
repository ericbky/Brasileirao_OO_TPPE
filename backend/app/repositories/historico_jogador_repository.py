from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.models import HistoricoJogador
from app.schemas.schemas import HistoricoJogadorCreate


async def criar_historico_jogador_repository(
    data: HistoricoJogadorCreate, session: AsyncSession
) -> HistoricoJogador:
    novo = HistoricoJogador(**data.model_dump())
    session.add(novo)
    await session.commit()
    await session.refresh(novo)
    return novo


async def listar_historico_jogador_repository(
    session: AsyncSession,
) -> list[HistoricoJogador]:
    result = await session.execute(select(HistoricoJogador))
    return result.scalars().all()


async def deletar_historico_jogador_repository(id: int, session: AsyncSession) -> str:
    result = await session.execute(
        select(HistoricoJogador).where(HistoricoJogador.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Histórico do jogador com id={id} não encontrado."
        )

    await session.delete(entity)
    await session.commit()
    return f"Histórico do jogador {id} deletado com sucesso."


async def atualizar_historico_jogador_repository(
    id: int, data: HistoricoJogadorCreate, session: AsyncSession
) -> str:
    result = await session.execute(
        select(HistoricoJogador).where(HistoricoJogador.id == id)
    )
    entity = result.scalar_one_or_none()

    if not entity:
        raise HTTPException(
            status_code=404, detail=f"Histórico do jogador com id={id} não encontrado."
        )

    for key, value in data.model_dump().items():
        setattr(entity, key, value)

    await session.commit()
    return f"Histórico do jogador {id} atualizado com sucesso."
