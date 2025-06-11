from fastapi import FastAPI

from app.api.escalacao.router import router as escalacao_router
from app.api.estadio.router import router as estadio_router
from app.api.estatistica.router import router as estatistica_router
from app.api.evento_partida.router import router as evento_partida_router
from app.api.historico_jogador.router import router as historico_jogador_router
from app.api.historico_tecnico.router import router as historico_tecnico_router
from app.api.jogador.router import router as jogador_router
from app.api.partida.router import router as partida_router
from app.api.time_temporada.router import router as time_temporada_router
from app.api.time.router import router as times_router

app = FastAPI()

# Incluindo rotas com prefixo para uma melhor organização
app.include_router(escalacao_router, prefix="/escalacao", tags=["Escalacao"])
app.include_router(estadio_router, prefix="/estadio", tags=["Estadio"])
app.include_router(estatistica_router, prefix="/estatistica", tags=["Estatistica"])
app.include_router(evento_partida_router, prefix="/evento_partida", tags=["Evento Partida"])
app.include_router(historico_jogador_router, prefix="/historico_jogador", tags=["Historico Jogador"])
app.include_router(historico_tecnico_router, prefix="/historico_tecnico", tags=["Historico Tecnico"])
app.include_router(jogador_router, prefix="/jogador", tags=["Jogador"])
app.include_router(partida_router, prefix="/partida", tags=["Partida"])
app.include_router(time_temporada_router, prefix="/time_temporada", tags=["Time Temporada"])
app.include_router(times_router, prefix="/times", tags=["Times"])