import pytest
from datetime import date
from app.schemas.schemas import (
    JogadorCreate,
    PosicaoJogador,
    TimeCreate,
    TecnicoCreate,
    EstadioCreate,
    PartidaCreate,
    EventoPartidaCreate,
    EscalacaoCreate,
    EstatisticaTimePartidaCreate,
    TimeTemporadaCreate,
    HistoricoJogadorCreate,
    HistoricoTecnicoCreate,
    TipoEvento,
)


# ---------------------- Jogador ----------------------
@pytest.mark.parametrize(
    "nome, idade, altura, posicao, num_camisa, time_id, valido",
    [
        ("João", 25, 1.80, PosicaoJogador.ATACANTE.value, 9, 1, True),
        ("Pedro", -1, 1.70, PosicaoJogador.ZAGUEIRO.value, 3, 1, False),
        ("Lucas", 22, -1.75, None, 10, 1, False),
        ("", 19, 1.75, PosicaoJogador.GOLEIRO, 1, 1, False),
    ],
)
def test_jogador_create(nome, idade, altura, posicao, num_camisa, time_id, valido):
    data = {
        "nome": nome,
        "idade": idade,
        "altura": altura,
        "posicao": posicao,
        "num_camisa": num_camisa,
        "time_id": time_id,
    }
    if valido:
        jogador = JogadorCreate(**data)
        assert jogador.nome == nome
    else:
        with pytest.raises(Exception):
            JogadorCreate(**data)


# ---------------------- Time ----------------------
@pytest.mark.parametrize(
    "nome, socios, valor_titular, valido",
    [
        ("Flamengo", 50000, 300.0, True),
        ("Corinthians", None, None, True),
        ("", 10000, 200.0, False),
    ],
)
def test_time_create(nome, socios, valor_titular, valido):
    data = {"nome": nome, "socios": socios, "valor_equipe_titular": valor_titular}
    if valido:
        time = TimeCreate(**data)
        assert time.nome == nome
    else:
        with pytest.raises(Exception):
            TimeCreate(**data)


# ---------------------- Técnico ----------------------
@pytest.mark.parametrize(
    "nome, idade, valido",
    [
        ("Tite", 62, True),
        ("Abel", 45, True),
        ("", 50, False),
    ],
)
def test_tecnico_create(nome, idade, valido):
    data = {"nome": nome, "idade": idade}
    if valido:
        tecnico = TecnicoCreate(**data)
        assert tecnico.idade == idade
    else:
        with pytest.raises(Exception):
            TecnicoCreate(**data)


# ---------------------- Estádio ----------------------
@pytest.mark.parametrize(
    "nome, capacidade, cidade, estado, pais, valido",
    [
        ("Maracanã", 78000, "Rio", "RJ", "Brasil", True),
        ("Beira-Rio", None, "Porto Alegre", None, None, True),
        ("", 50000, "São Paulo", "SP", "Brasil", False),
    ],
)
def test_estadio_create(nome, capacidade, cidade, estado, pais, valido):
    data = {
        "nome": nome,
        "capacidade": capacidade,
        "cidade": cidade,
        "estado": estado,
        "pais": pais,
    }
    if valido:
        estadio = EstadioCreate(**data)
        assert estadio.nome == nome
    else:
        with pytest.raises(Exception):
            EstadioCreate(**data)


# ---------------------- Partida ----------------------
@pytest.mark.parametrize(
    "temporada, data_jogo, horario, fase, tipo_fase, estadio_id, time_mandante_id, time_visitante_id, valido",
    [
        (
            "2024",
            date(2024, 6, 20),
            "16:00",
            "Grupos",
            "Classificatória",
            1,
            1,
            2,
            True,
        ),
        ("", None, None, None, None, None, None, None, False),
    ],
)
def test_partida_create(
    temporada,
    data_jogo,
    horario,
    fase,
    tipo_fase,
    estadio_id,
    time_mandante_id,
    time_visitante_id,
    valido,
):
    data = {
        "temporada": temporada,
        "data": data_jogo,
        "horario": horario,
        "fase": fase,
        "tipo_fase": tipo_fase,
        "estadio_id": estadio_id,
        "time_mandante_id": time_mandante_id,
        "time_visitante_id": time_visitante_id,
    }
    if valido:
        partida = PartidaCreate(**data)
        assert partida.temporada == temporada
    else:
        with pytest.raises(Exception):
            PartidaCreate(**data)


# ---------------------- Evento Partida ----------------------
@pytest.mark.parametrize(
    "minuto, tipo, jogador_id, partida_id, valido",
    [
        (15, TipoEvento.GOL, 10, 1, True),
        (90, TipoEvento.CARTAO_VERMELHO, 15, 1, True),
        (-5, TipoEvento.GOL, 10, 1, False),
    ],
)
def test_evento_partida_create(minuto, tipo, jogador_id, partida_id, valido):
    data = {
        "minuto": minuto,
        "tipo": tipo,
        "jogador_id": jogador_id,
        "partida_id": partida_id,
    }
    if valido:
        evento = EventoPartidaCreate(**data)
        assert evento.tipo == tipo
    else:
        with pytest.raises(Exception):
            EventoPartidaCreate(**data)


# ---------------------- Escalação ----------------------
@pytest.mark.parametrize(
    "titular, minutos, posicao, substituido, entrou, jogador_id, partida_id",
    [
        (True, 90, "Centroavante", False, False, 1, 1),
        (False, 30, "Meio-Campo", True, True, 2, 1),
    ],
)
def test_escalacao_create(
    titular, minutos, posicao, substituido, entrou, jogador_id, partida_id
):
    escalacao = EscalacaoCreate(
        titular=titular,
        minutos_em_campo=minutos,
        posicao_em_campo=posicao,
        substituido=substituido,
        entrou_durante_o_jogo=entrou,
        jogador_id=jogador_id,
        partida_id=partida_id,
    )
    assert escalacao.jogador_id == jogador_id


# ---------------------- Estatística Time Partida ----------------------
@pytest.mark.parametrize(
    "posse, finalizacoes, faltas, partida_id, time_id, valido",
    [
        (58.3, 12, 8, 1, 1, True),
        (None, None, None, 1, 1, True),
        (110.0, 10, 5, 1, 1, True),  # valor exagerado, mas válido para modelo
    ],
)
def test_estatistica_time_partida_create(
    posse, finalizacoes, faltas, partida_id, time_id, valido
):
    data = {
        "posse_bola": posse,
        "finalizacoes": finalizacoes,
        "faltas_cometidas": faltas,
        "partida_id": partida_id,
        "time_id": time_id,
    }
    if valido:
        estat = EstatisticaTimePartidaCreate(**data)
        assert estat.partida_id == partida_id
    else:
        with pytest.raises(Exception):
            EstatisticaTimePartidaCreate(**data)


# ---------------------- Time Temporada ----------------------
@pytest.mark.parametrize(
    "data_inicio, data_final, temporada, time_id",
    [
        (date(2023, 1, 1), date(2023, 12, 31), "2023", 1),
        (date(2022, 3, 1), None, "2022", 1),
    ],
)
def test_time_temporada_create(data_inicio, data_final, temporada, time_id):
    temp = TimeTemporadaCreate(
        data_inicio=data_inicio,
        data_final=data_final,
        temporada=temporada,
        time_id=time_id,
    )
    assert temp.temporada == temporada


# ---------------------- Histórico Jogador ----------------------
@pytest.mark.parametrize(
    "data_inicio, data_fim, jogador_id, time_id",
    [
        (date(2022, 1, 1), date(2023, 1, 1), 1, 1),
        (date(2023, 1, 1), None, 2, 1),
    ],
)
def test_historico_jogador_create(data_inicio, data_fim, jogador_id, time_id):
    hist = HistoricoJogadorCreate(
        data_inicio=data_inicio,
        data_fim=data_fim,
        jogador_id=jogador_id,
        time_id=time_id,
    )
    assert hist.time_id == time_id


# ---------------------- Histórico Técnico ----------------------
@pytest.mark.parametrize(
    "data_inicio, data_fim, tecnico_id, time_id",
    [
        (date(2021, 5, 1), date(2022, 5, 1), 1, 1),
        (date(2020, 1, 1), None, 2, 1),
    ],
)
def test_historico_tecnico_create(data_inicio, data_fim, tecnico_id, time_id):
    hist = HistoricoTecnicoCreate(
        data_inicio=data_inicio,
        data_fim=data_fim,
        tecnico_id=tecnico_id,
        time_id=time_id,
    )
    assert hist.tecnico_id == tecnico_id
