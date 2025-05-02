from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Date,
    Boolean,
    ForeignKey,
    Enum as SAEnum,
    UniqueConstraint,
)
from sqlalchemy.orm import relationship
from enum import Enum as PyEnum
from app.db.database import Base


# ---------------------- Enum Helpers ----------------------
def enum_values(enum_cls):
    return [e.value for e in enum_cls]


# ---------------------- Enums ----------------------
class PosicaoJogador(str, PyEnum):
    ATACANTE = "atacante"
    MEIO_CAMPO = "meio_campo"
    ZAGUEIRO = "zagueiro"
    GOLEIRO = "goleiro"


class TipoEvento(str, PyEnum):
    GOL = "gol"
    FALTA = "falta"
    CARTAO_AMARELO = "cartao_amarelo"
    CARTAO_VERMELHO = "cartao_vermelho"
    SUBSTITUICAO = "substituicao"


# ---------------------- Time ----------------------
class Time(Base):
    __tablename__ = "times"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False, unique=True)
    socios = Column(Integer)
    valor_equipe_titular = Column(Float)
    valor_medio_equipe_titular = Column(Float)

    jogadores = relationship("Jogador", back_populates="time")
    partidas_mandante = relationship(
        "Partida",
        back_populates="time_mandante",
        foreign_keys="Partida.time_mandante_id",
    )
    partidas_visitante = relationship(
        "Partida",
        back_populates="time_visitante",
        foreign_keys="Partida.time_visitante_id",
    )
    historico_tecnicos = relationship("HistoricoTecnico", back_populates="time")
    historico_jogadores = relationship("HistoricoJogador", back_populates="time")


# ---------------------- Jogador ----------------------
class Jogador(Base):
    __tablename__ = "jogadores"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    idade = Column(Integer, nullable=False)
    altura = Column(Float, nullable=False)
    posicao = Column(SAEnum(PosicaoJogador, values_callable=enum_values, name="posicaojogador"), nullable=False)
    num_camisa = Column(Integer, nullable=False)
    convocado_selecao_principal = Column(Boolean)
    convocado_selecao_juniores = Column(Boolean)
    estrangeiro = Column(Boolean)
    valor_mercado = Column(Float)
    time_id = Column(Integer, ForeignKey("times.id"))

    time = relationship("Time", back_populates="jogadores")
    eventos = relationship("EventoPartida", back_populates="jogador")
    escalacoes = relationship("Escalacao", back_populates="jogador")
    historico = relationship("HistoricoJogador", back_populates="jogador")


# ---------------------- Tecnico ----------------------
class Tecnico(Base):
    __tablename__ = "tecnicos"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    idade = Column(Integer, nullable=False)
    data_inicio = Column(Date, nullable=False)
    data_fim = Column(Date)
    nacionalidade = Column(String)
    tempo_carreira = Column(Integer)

    partidas_mandante = relationship(
        "Partida",
        back_populates="tecnico_mandante",
        foreign_keys="Partida.tecnico_mandante_id",
    )
    partidas_visitante = relationship(
        "Partida",
        back_populates="tecnico_visitante",
        foreign_keys="Partida.tecnico_visitante_id",
    )
    historico_times = relationship("HistoricoTecnico", back_populates="tecnico")


# ---------------------- Estadio ----------------------
class Estadio(Base):
    __tablename__ = "estadios"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    capacidade = Column(Integer)
    cidade = Column(String)
    estado = Column(String)
    pais = Column(String)

    partidas = relationship("Partida", back_populates="estadio")


# ---------------------- Partida ----------------------
class Partida(Base):
    __tablename__ = "partidas"

    id = Column(Integer, primary_key=True)
    temporada = Column(String)
    data = Column(Date)
    horario = Column(String)
    fase = Column(String)
    tipo_fase = Column(String)
    estadio_id = Column(Integer, ForeignKey("estadios.id"))
    estadio = relationship("Estadio", back_populates="partidas")

    arbitro = Column(String)
    publico = Column(Integer)
    publico_max = Column(Integer)
    gols_mandante = Column(Integer)
    gols_visitante = Column(Integer)
    gols_1_tempo_mandante = Column(Integer)
    gols_1_tempo_visitante = Column(Integer)
    prorrogacao = Column(Boolean)
    penalti = Column(Boolean)

    time_mandante_id = Column(Integer, ForeignKey("times.id"))
    time_visitante_id = Column(Integer, ForeignKey("times.id"))
    tecnico_mandante_id = Column(Integer, ForeignKey("tecnicos.id"))
    tecnico_visitante_id = Column(Integer, ForeignKey("tecnicos.id"))

    time_mandante = relationship(
        "Time", foreign_keys=[time_mandante_id], back_populates="partidas_mandante"
    )
    time_visitante = relationship(
        "Time", foreign_keys=[time_visitante_id], back_populates="partidas_visitante"
    )
    tecnico_mandante = relationship(
        "Tecnico",
        foreign_keys=[tecnico_mandante_id],
        back_populates="partidas_mandante",
    )
    tecnico_visitante = relationship(
        "Tecnico",
        foreign_keys=[tecnico_visitante_id],
        back_populates="partidas_visitante",
    )

    eventos = relationship("EventoPartida", back_populates="partida")
    escalacoes = relationship("Escalacao", back_populates="partida")
    estatisticas = relationship("EstatisticaTimePartida", back_populates="partida")


# ---------------------- EventoPartida ----------------------
class EventoPartida(Base):
    __tablename__ = "eventos_partida"

    id = Column(Integer, primary_key=True)
    tipo = Column(SAEnum(TipoEvento, values_callable=enum_values, name="tipoevento"), nullable=False)
    minuto = Column(Integer)
    descricao = Column(String)

    jogador_id = Column(Integer, ForeignKey("jogadores.id"))
    partida_id = Column(Integer, ForeignKey("partidas.id"))

    jogador = relationship("Jogador", back_populates="eventos")
    partida = relationship("Partida", back_populates="eventos")


# ---------------------- Escalacao ----------------------
class Escalacao(Base):
    __tablename__ = "escalacoes"

    id = Column(Integer, primary_key=True)
    titular = Column(Boolean)
    minutos_em_campo = Column(Integer)
    posicao_em_campo = Column(String)
    substituido = Column(Boolean)
    entrou_durante_o_jogo = Column(Boolean)

    jogador_id = Column(Integer, ForeignKey("jogadores.id"))
    partida_id = Column(Integer, ForeignKey("partidas.id"))

    jogador = relationship("Jogador", back_populates="escalacoes")
    partida = relationship("Partida", back_populates="escalacoes")


# ---------------------- EstatisticaTimePartida ----------------------
class EstatisticaTimePartida(Base):
    __tablename__ = "estatisticas_time_partida"

    id = Column(Integer, primary_key=True)
    posse_bola = Column(Float)
    finalizacoes = Column(Integer)
    escanteios = Column(Integer)
    faltas_cometidas = Column(Integer)
    impedimentos = Column(Integer)
    defesas_goleiro = Column(Integer)
    chutes_no_gol = Column(Integer)
    chutes_fora = Column(Integer)
    passes_certos = Column(Integer)
    passes_errados = Column(Integer)

    partida_id = Column(Integer, ForeignKey("partidas.id"))
    time_id = Column(Integer, ForeignKey("times.id"))

    __table_args__ = (
        UniqueConstraint("partida_id", "time_id", name="uq_stat_partida_time"),
    )

    partida = relationship("Partida", back_populates="estatisticas")
    time = relationship("Time")


# ---------------------- TimeTemporada ----------------------
class TimeTemporada(Base):
    __tablename__ = "times_temporada"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(Date)
    data_final = Column(Date)
    temporada = Column(String, nullable=False)
    time_id = Column(Integer, ForeignKey("times.id"))


# ---------------------- HistoricoJogador ----------------------
class HistoricoJogador(Base):
    __tablename__ = "historico_jogadores"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(Date, nullable=False)
    data_fim = Column(Date)
    jogador_id = Column(Integer, ForeignKey("jogadores.id"))
    time_id = Column(Integer, ForeignKey("times.id"))

    jogador = relationship("Jogador", back_populates="historico")
    time = relationship("Time", back_populates="historico_jogadores")


# ---------------------- HistoricoTecnico ----------------------
class HistoricoTecnico(Base):
    __tablename__ = "historico_tecnicos"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(Date, nullable=False)
    data_fim = Column(Date)
    tecnico_id = Column(Integer, ForeignKey("tecnicos.id"))
    time_id = Column(Integer, ForeignKey("times.id"))

    __table_args__ = (
        UniqueConstraint(
            "tecnico_id", "time_id", "data_inicio", name="uq_tecnico_time_data"
        ),
    )

    tecnico = relationship("Tecnico", back_populates="historico_times")
    time = relationship("Time", back_populates="historico_tecnicos")