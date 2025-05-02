from sqlalchemy import Integer, String, Date, Column, ForeignKey, Float, Boolean
from sqlalchemy.orm import relationship

from db.database import Base


class Time(Base):
    __tablename__ = "times"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False, unique=True)
    socios = Column(Integer)
    valor_equipe_titular = Column(Float)
    valor_medio_equipe_titular = Column(Float)
    convocacao_selecao_principal = Column(Integer)
    selecao_juniores = Column(Integer)
    estrangeiros = Column(Integer)
    idade_media_titular = Column(Float)

    jogadores = relationship("Jogador", back_populates="time")
    tecnico = relationship("Tecnico", back_populates="time", uselist=False)
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


class Jogador(Base):
    __tablename__ = "jogadores"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    idade = Column(Integer, nullable=False)
    altura = Column(Float, nullable=False)
    posicao = Column(String)
    num_camisa = Column(Integer, nullable=False)
    partidas = Column(Integer, nullable=False)
    gols = Column(Integer)
    convocado_selecao_principal = Column(Boolean)
    convocado_selecao_juniores = Column(Boolean)
    estrangeiro = Column(Boolean)
    valor_mercado = Column(Float)
    time_id = Column(Integer, ForeignKey("times.id"))
    time = relationship("Time", back_populates="jogadores")

    eventos = relationship("EventoPartida", back_populates="jogador")
    escalacoes = relationship("Escalacao", back_populates="jogador")


class Tecnico(Base):
    __tablename__ = "tecnicos"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    idade = Column(String, nullable=False)
    data_inicio = Column(Date, nullable=False)
    data_final = Column(Date)
    proporcao_sucesso = Column(Float)
    time_id = Column(Integer, ForeignKey("times.id"))
    time = relationship("Time", back_populates="tecnico")

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


class Estadio(Base):
    __tablename__ = "estadios"

    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    capacidade = Column(Integer)
    cidade = Column(String)
    estado = Column(String)
    pais = Column(String)

    partidas = relationship("Partida", back_populates="estadio")


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


class EventoPartida(Base):
    __tablename__ = "eventos_partida"

    id = Column(Integer, primary_key=True)
    minuto = Column(Integer)
    tipo = Column(String)
    descricao = Column(String)

    jogador_id = Column(Integer, ForeignKey("jogadores.id"))
    partida_id = Column(Integer, ForeignKey("partidas.id"))

    jogador = relationship("Jogador", back_populates="eventos")
    partida = relationship("Partida", back_populates="eventos")


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

    partida = relationship("Partida", back_populates="estatisticas")
    time = relationship("Time")


class TimeTemporada(Base):
    __tablename__ = "times_temporada"

    id = Column(Integer, primary_key=True)
    data_inicio = Column(Date)
    data_final = Column(Date)

    time_id = Column(Integer, ForeignKey("times.id"))
