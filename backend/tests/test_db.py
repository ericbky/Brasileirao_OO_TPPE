import os
from datetime import date
from pathlib import Path

import pytest
import pytest_asyncio
from dotenv import load_dotenv
from sqlalchemy import delete, select, text
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_scoped_session
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool

from app.db.database import Base
from app.models.models import (
    Escalacao,
    EstatisticaTimePartida,
    Estadio,
    EventoPartida,
    HistoricoJogador,
    HistoricoTecnico,
    Jogador,
    Partida,
    Tecnico,
    Time,
    TimeTemporada,
    PosicaoJogador,
    TipoEvento
)

# ---------------------------------------------------------------------------
# Configuração
# ---------------------------------------------------------------------------
load_dotenv(dotenv_path=Path(__file__).resolve().parents[2] / ".env")
DATABASE_URL = os.getenv("TEST_DATABASE_URL") or os.getenv("DATABASE_URL")

EXPECTED_TABLES = {
    "times",
    "jogadores",
    "tecnicos",
    "partidas",
    "estadios",
    "eventos_partida",
    "escalacoes",
    "estatisticas_time_partida",
    "times_temporada",
    "historico_jogadores",
    "historico_tecnicos",
}

# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

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
    
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
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
    try:
        yield session
    finally:
        await Session.remove()
        await transaction.rollback()
        await connection.close()

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _uniq(base: str) -> str:
    return f"{base}_{os.urandom(4).hex()}"

# ---------------------------------------------------------------------------
# Testes CRUD
# ---------------------------------------------------------------------------

@pytest.mark.asyncio
async def test_criar_time(db_session):
    nome = _uniq("Flamengo")
    time = Time(nome=nome, socios=50000, valor_equipe_titular=300.0)
    db_session.add(time)
    await db_session.flush()
    assert time.id is not None

@pytest.mark.asyncio
async def test_duplicar_nome_time(db_session):
    nome = _uniq("Palmeiras")
    
    time1 = Time(nome=nome)
    db_session.add(time1)
    await db_session.commit()
    
    time2 = Time(nome=nome)
    db_session.add(time2)
    
    with pytest.raises(Exception):
        await db_session.commit()

    await db_session.rollback()

@pytest.mark.asyncio
async def test_criar_jogador(db_session):
    time = Time(nome=_uniq("TimeJ"))
    db_session.add(time)
    await db_session.flush()
    
    jogador = Jogador(
        nome=_uniq("Jogador"),
        idade=25,
        altura=1.8,
        posicao=PosicaoJogador.MEIO_CAMPO.value,
        num_camisa=9,
        time_id=time.id,
    )
    db_session.add(jogador)
    await db_session.flush()
    assert jogador.id is not None

@pytest.mark.asyncio
async def test_criar_tecnico(db_session):
    tecnico = Tecnico(
        nome=_uniq("Técnico"),
        idade=62,
        data_inicio=date.today()  # Campo adicionado
    )
    db_session.add(tecnico)
    await db_session.flush()
    assert tecnico.id is not None

@pytest.mark.asyncio
async def test_criar_estadio(db_session):
    estadio = Estadio(
        nome=_uniq("Maracanã"),
        capacidade=78000,
        cidade="Rio",
        estado="RJ",
        pais="Brasil"
    )
    db_session.add(estadio)
    await db_session.flush()
    assert estadio.id is not None

@pytest.mark.asyncio
async def test_criar_partida(db_session):
    estadio = Estadio(nome=_uniq("Estádio P"))
    time = Time(nome=_uniq("Time P"))
    tecnico = Tecnico(nome=_uniq("Técnico P"), idade=50, data_inicio=date.today())
    
    db_session.add_all([estadio, time, tecnico])
    await db_session.flush()
    
    partida = Partida(
        temporada="2024",
        data=date(2024, 6, 20),
        horario="16:00",
        estadio_id=estadio.id,
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=tecnico.id,
        tecnico_visitante_id=tecnico.id
    )
    db_session.add(partida)
    await db_session.flush()
    assert partida.id is not None

@pytest.mark.asyncio
async def test_criar_evento_partida(db_session):
    time = Time(nome=_uniq("Time E"))
    jogador = Jogador(
        nome=_uniq("Jogador E"),
        idade=20,
        altura=1.75,
        posicao=PosicaoJogador.ZAGUEIRO.value,
        num_camisa=5,
        time_id=time.id,
    )
    partida = Partida(
        temporada=_uniq("Temporada E"),
        data=date.today(),
        horario="10:00",
        estadio_id=(await db_session.execute(select(Estadio.id))).scalar(),
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=(await db_session.execute(select(Tecnico.id))).scalar()
    )
    db_session.add_all([time, jogador, partida])
    await db_session.flush()
    
    evento = EventoPartida(
        tipo=TipoEvento.GOL.value,
        minuto=10,
        jogador_id=jogador.id,
        partida_id=partida.id
    )
    db_session.add(evento)
    await db_session.flush()
    assert evento.id is not None

@pytest.mark.asyncio
async def test_criar_escalacao(db_session):
    time = Time(nome=_uniq("Time Esc"))
    jogador = Jogador(
        nome=_uniq("Jogador Esc"),
        idade=23,
        altura=1.82,
        posicao=PosicaoJogador.MEIO_CAMPO.value,
        num_camisa=8,
        time_id=time.id,
    )
    partida = Partida(
        temporada=_uniq("Temporada Esc"),
        data=date.today(),
        horario="14:00",
        estadio_id=(await db_session.execute(select(Estadio.id))).scalar(),
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=(await db_session.execute(select(Tecnico.id))).scalar()
    )
    db_session.add_all([time, jogador, partida])
    await db_session.flush()
    
    esc = Escalacao(
        titular=True,
        minutos_em_campo=90,
        posicao_em_campo=PosicaoJogador.MEIO_CAMPO.value,
        jogador_id=jogador.id,
        partida_id=partida.id
    )
    db_session.add(esc)
    await db_session.flush()
    assert esc.id is not None

@pytest.mark.asyncio
async def test_criar_estatistica_time_partida(db_session):
    time = Time(nome=_uniq("Time Est"))
    partida = Partida(
        temporada=_uniq("Temporada Est"),
        data=date.today(),
        horario="12:00",
        estadio_id=(await db_session.execute(select(Estadio.id))).scalar(),
        time_mandante_id=time.id,
        time_visitante_id=time.id,
        tecnico_mandante_id=(await db_session.execute(select(Tecnico.id))).scalar()
    )
    db_session.add_all([time, partida])
    await db_session.flush()
    
    estat = EstatisticaTimePartida(
        posse_bola=60.0,
        finalizacoes=12,
        escanteios=4,
        faltas_cometidas=10,
        partida_id=partida.id,
        time_id=time.id
    )
    db_session.add(estat)
    await db_session.flush()
    assert estat.id is not None

@pytest.mark.asyncio
async def test_criar_time_temporada(db_session):
    time = Time(nome=_uniq("Time Temp"))
    db_session.add(time)
    await db_session.flush()
    
    temp = TimeTemporada(
        temporada="2025",
        data_inicio=date(2025, 1, 1),
        data_final=date(2025, 12, 31),
        time_id=time.id
    )
    db_session.add(temp)
    await db_session.flush()
    assert temp.id is not None

@pytest.mark.asyncio
async def test_criar_historico_jogador(db_session):
    time = Time(nome=_uniq("Time Hist J"))
    jogador = Jogador(
        nome=_uniq("Jogador Hist"),
        idade=22,
        altura=1.78,
        posicao=PosicaoJogador.MEIO_CAMPO.value,
        num_camisa=10,
        time_id=time.id,
    )
    db_session.add_all([time, jogador])
    await db_session.flush()
    
    hist = HistoricoJogador(
        data_inicio=date(2023, 1, 1),
        jogador_id=jogador.id,
        time_id=time.id
    )
    db_session.add(hist)
    await db_session.flush()
    assert hist.id is not None

@pytest.mark.asyncio
async def test_criar_historico_tecnico(db_session):
    time = Time(nome=_uniq("Time Hist T"))
    tecnico = Tecnico(
        nome=_uniq("Técnico Hist"),
        idade=50,
        data_inicio=date.today()
    )
    db_session.add_all([time, tecnico])
    await db_session.flush()
    
    hist = HistoricoTecnico(
        data_inicio=date(2023, 1, 1),
        tecnico_id=tecnico.id,
        time_id=time.id
    )
    db_session.add(hist)
    await db_session.flush()
    assert hist.id is not None