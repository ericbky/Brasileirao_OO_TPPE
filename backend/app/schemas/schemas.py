from pydantic import BaseModel
from typing import Optional, List
from datetime import date
from enum import Enum


# ---------------------- Enums ----------------------
class PosicaoJogador(str, Enum):
    ATACANTE = "Atacante"
    MEIO_CAMPO = "Meio-Campo"
    ZAGUEIRO = "Zagueiro"
    GOLEIRO = "Goleiro"


class TipoEvento(str, Enum):
    GOL = "Gol"
    FALTA = "Falta"
    CARTAO_AMARELO = "Cartão Amarelo"
    CARTAO_VERMELHO = "Cartão Vermelho"
    SUBSTITUICAO = "Substituição"


# ---------------------- Time ----------------------
class TimeBase(BaseModel):
    nome: str
    socios: Optional[int] = None
    valor_equipe_titular: Optional[float] = None
    valor_medio_equipe_titular: Optional[float] = None


class TimeCreate(TimeBase):
    pass


class TimeRead(TimeBase):
    id: int
    jogadores: List["JogadorRead"] = []
    historico_tecnicos: List["HistoricoTecnicoRead"] = []
    historico_jogadores: List["HistoricoJogadorRead"] = []

    model_config = {"from_attributes": True}


# ---------------------- Jogador ----------------------
class JogadorBase(BaseModel):
    nome: str
    idade: int
    altura: float
    posicao: Optional[PosicaoJogador] = None
    num_camisa: int
    convocado_selecao_principal: Optional[bool] = None
    convocado_selecao_juniores: Optional[bool] = None
    estrangeiro: Optional[bool] = None
    valor_mercado: Optional[float] = None
    time_id: int


class JogadorCreate(JogadorBase):
    pass


class JogadorRead(JogadorBase):
    id: int

    model_config = {"from_attributes": True}


# ---------------------- Tecnico ----------------------
class TecnicoBase(BaseModel):
    nome: str
    idade: int


class TecnicoCreate(TecnicoBase):
    pass


class TecnicoRead(TecnicoBase):
    id: int
    historico_times: List["HistoricoTecnicoRead"] = []
    model_config = {"from_attributes": True}


# ---------------------- Estadio ----------------------
class EstadioBase(BaseModel):
    nome: str
    capacidade: Optional[int] = None
    cidade: Optional[str] = None
    estado: Optional[str] = None
    pais: Optional[str] = None


class EstadioCreate(EstadioBase):
    pass


class EstadioRead(EstadioBase):
    id: int

    model_config = {"from_attributes": True}


# ---------------------- Partida ----------------------
class PartidaBase(BaseModel):
    temporada: Optional[str] = None
    data: Optional[date] = None
    horario: Optional[str] = None
    fase: Optional[str] = None
    tipo_fase: Optional[str] = None
    estadio_id: Optional[int] = None
    arbitro: Optional[str] = None
    publico: Optional[int] = None
    publico_max: Optional[int] = None
    gols_mandante: Optional[int] = None
    gols_visitante: Optional[int] = None
    gols_1_tempo_mandante: Optional[int] = None
    gols_1_tempo_visitante: Optional[int] = None
    prorrogacao: Optional[bool] = None
    penalti: Optional[bool] = None
    time_mandante_id: Optional[int] = None
    time_visitante_id: Optional[int] = None
    tecnico_mandante_id: Optional[int] = None
    tecnico_visitante_id: Optional[int] = None


class PartidaCreate(PartidaBase):
    pass


class PartidaRead(PartidaBase):
    id: int
    eventos: List["EventoPartidaRead"] = []
    escalacoes: List["EscalacaoRead"] = []
    estatisticas: List["EstatisticaTimePartidaRead"] = []

    model_config = {"from_attributes": True}


# ---------------------- EventoPartida ----------------------
class EventoPartidaBase(BaseModel):
    minuto: int
    tipo: TipoEvento
    descricao: Optional[str] = None
    jogador_id: int
    partida_id: int


class EventoPartidaCreate(EventoPartidaBase):
    pass


class EventoPartidaRead(EventoPartidaBase):
    id: int

    model_config = {"from_attributes": True}


# ---------------------- Escalacao ----------------------
class EscalacaoBase(BaseModel):
    titular: Optional[bool] = None
    minutos_em_campo: Optional[int] = None
    posicao_em_campo: Optional[str] = None
    substituido: Optional[bool] = None
    entrou_durante_o_jogo: Optional[bool] = None
    jogador_id: int
    partida_id: int


class EscalacaoCreate(EscalacaoBase):
    pass


class EscalacaoRead(EscalacaoBase):
    id: int

    model_config = {"from_attributes": True}


# ---------------------- Estatistica ----------------------
class EstatisticaTimePartidaBase(BaseModel):
    posse_bola: Optional[float] = None
    finalizacoes: Optional[int] = None
    escanteios: Optional[int] = None
    faltas_cometidas: Optional[int] = None
    impedimentos: Optional[int] = None
    defesas_goleiro: Optional[int] = None
    chutes_no_gol: Optional[int] = None
    chutes_fora: Optional[int] = None
    passes_certos: Optional[int] = None
    passes_errados: Optional[int] = None
    partida_id: int
    time_id: int


class EstatisticaTimePartidaCreate(EstatisticaTimePartidaBase):
    pass


class EstatisticaTimePartidaRead(EstatisticaTimePartidaBase):
    id: int
    model_config = {"from_attributes": True}


# ---------------------- TimeTemporada ----------------------
class TimeTemporadaBase(BaseModel):
    data_inicio: Optional[date] = None
    data_final: Optional[date] = None
    temporada: str
    time_id: int


class TimeTemporadaCreate(TimeTemporadaBase):
    pass


class TimeTemporadaRead(TimeTemporadaBase):
    id: int
    model_config = {"from_attributes": True}


# ---------------------- HistoricoJogador ----------------------
class HistoricoJogadorBase(BaseModel):
    data_inicio: date
    data_fim: Optional[date] = None
    jogador_id: int
    time_id: int


class HistoricoJogadorCreate(HistoricoJogadorBase):
    pass


class HistoricoJogadorRead(HistoricoJogadorBase):
    id: int
    jogador: Optional["JogadorRead"] = None
    time: Optional["TimeRead"] = None
    model_config = {"from_attributes": True}


# ---------------------- HistoricoTecnico ----------------------
class HistoricoTecnicoBase(BaseModel):
    data_inicio: date
    data_fim: Optional[date] = None
    tecnico_id: int
    time_id: int


class HistoricoTecnicoCreate(HistoricoTecnicoBase):
    pass


class HistoricoTecnicoRead(HistoricoTecnicoBase):
    id: int
    tecnico: Optional["TecnicoRead"] = None
    time: Optional["TimeRead"] = None
    model_config = {"from_attributes": True}


# Referência cruzada
TimeRead.model_rebuild()
PartidaRead.model_rebuild()
HistoricoJogadorRead.model_rebuild()
HistoricoTecnicoRead.model_rebuild()
