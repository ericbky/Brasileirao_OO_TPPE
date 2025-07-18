from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
from app.api.tecnico.router import router as tecnico_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluindo rotas com prefixo para uma melhor organização
app.include_router(escalacao_router, prefix="/escalacao")
app.include_router(estadio_router, prefix="/estadio")
app.include_router(estatistica_router, prefix="/estatistica")
app.include_router(evento_partida_router, prefix="/evento_partida")
app.include_router(historico_jogador_router, prefix="/historico_jogador")
app.include_router(historico_tecnico_router, prefix="/historico_tecnico")
app.include_router(jogador_router, prefix="/jogador")
app.include_router(partida_router, prefix="/partida")
app.include_router(time_temporada_router, prefix="/time_temporada")
app.include_router(times_router, prefix="/times")
app.include_router(tecnico_router, prefix="/tecnico")
