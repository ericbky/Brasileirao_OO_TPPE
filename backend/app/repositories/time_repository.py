from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from typing import List
from sqlalchemy.exc import NoResultFound

from app.models.models import Time
from app.schemas.schemas import TimeCreate


async def criar_time_repository(time_data: TimeCreate, session: AsyncSession) -> Time:
    """
    Cria um novo time no banco de dados e retorna o time criado com os jogadores.

    Args:
        time_data: Dados do time a ser criado.
        session: Sessão assíncrona do banco de dados.

    Returns:
        O objeto Time criado.

    Raises:
        HTTPException: Se houver um erro ao criar ou recuperar o time.
    """
    novo_time = Time(**time_data.model_dump())
    session.add(novo_time)
    try:
        await session.commit()
        await session.refresh(
            novo_time
        )  # Garante que o objeto está atualizado com o ID gerado

        query = (
            select(Time)
            .options(selectinload(Time.jogadores))
            .where(Time.id == novo_time.id)
        )
        result = await session.execute(query)
        return result.scalar_one()
    except Exception as e:
        await session.rollback()
        raise HTTPException(status_code=500, detail=f"Erro ao criar time: {e}")


async def listar_times_repository(session: AsyncSession) -> List[Time]:
    """
    Lista todos os times do banco de dados com seus jogadores.

    Args:
        session: Sessão assíncrona do banco de dados.

    Returns:
        Uma lista de objetos Time.
    """
    query = select(Time).options(selectinload(Time.jogadores))
    result = await session.execute(query)
    return result.scalars().all()


async def deletar_time_repository(id: int, session: AsyncSession) -> str:
    """
    Deleta um time do banco de dados pelo ID.

    Args:
        id: ID do time a ser deletado.
        session: Sessão assíncrona do banco de dados.

    Returns:
        Mensagem de sucesso com o nome do time deletado.

    Raises:
        HTTPException: Se o time não for encontrado.
    """
    query = select(Time).where(Time.id == id)
    result = await session.execute(query)
    time = result.scalar_one_or_none()

    if not time:
        raise HTTPException(status_code=404, detail=f"Time com id={id} não encontrado.")

    try:
        await session.delete(time)
        await session.commit()
        return f"Time {time.nome} deletado com sucesso."
    except Exception as e:
        await session.rollback()
        raise HTTPException(status_code=500, detail=f"Erro ao deletar time: {e}")


async def atualizar_time_repository(
    id: int, time_data: TimeCreate, session: AsyncSession
) -> str:
    """
    Atualiza um time no banco de dados pelo ID.

    Args:
        id: ID do time a ser atualizado.
        time_data: Novos dados do time.
        session: Sessão assíncrona do banco de dados.

    Returns:
        Mensagem de sucesso com o nome do time atualizado.

    Raises:
        HTTPException: Se o time não for encontrado.
    """
    query = select(Time).where(Time.id == id)
    result = await session.execute(query)
    time = result.scalar_one_or_none()

    if not time:
        raise HTTPException(status_code=404, detail=f"Time com id={id} não encontrado.")

    for key, value in time_data.model_dump().items():
        setattr(time, key, value)

    try:
        await session.commit()
        return f"Time {time.nome} atualizado com sucesso."
    except Exception as e:
        await session.rollback()
        raise HTTPException(status_code=500, detail=f"Erro ao atualizar time: {e}")
