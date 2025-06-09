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
from backend.app.api.time.router import router as times_router

app = FastAPI()

app.include_router(escalacao_router)
app.include_router(estadio_router)
app.include_router(estatistica_router)
app.include_router(evento_partida_router)
app.include_router(historico_jogador_router)
app.include_router(historico_tecnico_router)
app.include_router(jogador_router)
app.include_router(partida_router)
app.include_router(time_temporada_router)
app.include_router(times_router)