import os
from datetime import date
from pathlib import Path

import pytest
import pytest_asyncio
from dotenv import load_dotenv
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    create_async_engine,
    async_scoped_session,
)
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool
from sqlalchemy import text

from app.db.database import Base
from app.models.models import (
    Escalacao,
    EstatisticaTimePartida,
    Estadio,
    EventoPartida,
    Jogador,
    Partida,
    Tecnico,
    Time,
    PosicaoJogador,
    TipoEvento,
)

load_dotenv(dotenv_path=Path(__file__).resolve().parents[2] / ".env")
DATABASE_URL = os.getenv("TEST_DATABASE_URL") or os.getenv("DATABASE_URL")


@pytest_asyncio.fixture(scope="function")
async def engine():
    engine = create_async_engine(
        DATABASE_URL,
        echo=True,
        poolclass=NullPool,
    )
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    yield engine
    await engine.dispose()


@pytest_asyncio.fixture(scope="function")
async def db_session(engine):
    connection = await engine.connect()
    transaction = await connection.begin()

    session_factory = sessionmaker(
        connection, expire_on_commit=False, class_=AsyncSession
    )
    Session = async_scoped_session(session_factory, scopefunc=lambda: None)

    session = Session()

    for table in reversed(Base.metadata.sorted_tables):
        await session.execute(
            text(f"TRUNCATE TABLE {table.name} RESTART IDENTITY CASCADE")
        )
    await session.commit()

    try:
        yield session
    finally:
        await Session.remove()
        await transaction.rollback()
        await connection.close()


def _uniq(base: str) -> str:
    return f"{base}_{os.urandom(4).hex()}"


@pytest.mark.asyncio
async def test_criar_evento_partida(db_session):
    time = Time(nome=_uniq("Time E"))
    estadio = Estadio(nome=_uniq("Estadio E"))
    tecnico = Tecnico(nome=_uniq("Técnico E"), idade=45, data_inicio=date.today())
    db_session.add_all([time, estadio, tecnico])
    await db_session.flush()

    jogador = Jogador(
        nome=_uniq("Jogador E"),
        idade=22,
        altura=1.75,
        posicao=PosicaoJogador.ATACANTE,
        num_camisa=10,
        time_id=time.id,
    )
    partida = Partida(
        temporada="2025",
        data=date.today(),
        horario="16:00",
        estadio_id=estadio.id,
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=tecnico.id,
        tecnico_visitante_id=tecnico.id,
    )
    db_session.add_all([jogador, partida])
    await db_session.flush()

    evento = EventoPartida(
        tipo=TipoEvento.GOL, minuto=12, jogador_id=jogador.id, partida_id=partida.id
    )
    db_session.add(evento)
    await db_session.flush()
    assert evento.id is not None


@pytest.mark.asyncio
async def test_criar_escalacao(db_session):
    time = Time(nome=_uniq("Time Esc"))
    estadio = Estadio(nome=_uniq("Estadio Esc"))
    tecnico = Tecnico(nome=_uniq("Técnico Esc"), idade=48, data_inicio=date.today())
    db_session.add_all([time, estadio, tecnico])
    await db_session.flush()

    jogador = Jogador(
        nome=_uniq("Jogador Esc"),
        idade=26,
        altura=1.80,
        posicao=PosicaoJogador.MEIO_CAMPO,
        num_camisa=8,
        time_id=time.id,
    )
    partida = Partida(
        temporada="2025",
        data=date.today(),
        horario="17:00",
        estadio_id=estadio.id,
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=tecnico.id,
        tecnico_visitante_id=tecnico.id,
    )
    db_session.add_all([jogador, partida])
    await db_session.flush()

    esc = Escalacao(
        titular=True,
        minutos_em_campo=90,
        posicao_em_campo=PosicaoJogador.MEIO_CAMPO,
        jogador_id=jogador.id,
        partida_id=partida.id,
    )
    db_session.add(esc)
    await db_session.flush()
    assert esc.id is not None


@pytest.mark.asyncio
async def test_criar_estatistica_time_partida(db_session):
    time = Time(nome=_uniq("Time Est"))
    estadio = Estadio(nome=_uniq("Estadio Est"))
    tecnico = Tecnico(nome=_uniq("Técnico Est"), idade=53, data_inicio=date.today())
    db_session.add_all([time, estadio, tecnico])
    await db_session.flush()

    partida = Partida(
        temporada="2025",
        data=date.today(),
        horario="18:00",
        estadio_id=estadio.id,
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=tecnico.id,
        tecnico_visitante_id=tecnico.id,
    )
    db_session.add(partida)
    await db_session.flush()

    estat = EstatisticaTimePartida(
        posse_bola=57.8,
        finalizacoes=14,
        escanteios=5,
        faltas_cometidas=12,
        partida_id=partida.id,
        time_id=time.id,
    )
    db_session.add(estat)
    await db_session.flush()
    assert estat.id is not None
