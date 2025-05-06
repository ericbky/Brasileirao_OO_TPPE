from fastapi import FastAPI
from app.views.escalacao_routers import router as escalacao_routers
from app.views.estadio_routers import router as estadio_routers
from app.views.estatistica_routers import router as estatistica_routers
from app.views.evento_partida_routers import router as evento_partida_routers
from app.views.historico_jogador_routers import router as historico_jogador_routers
from app.views.historico_tecnico_routers import router as historico_tecnico_routers
from app.views.jogador_routers import router as jogador_routers
from app.views.partida_routers import router as partida_routers
from app.views.time_temporada_routers import router as time_temporada_routers
from app.views.times_routers import router as times_routers


app = FastAPI()

app.include_router(escalacao_routers)
app.include_router(estadio_routers)
app.include_router(estatistica_routers)
app.include_router(evento_partida_routers)
app.include_router(historico_jogador_routers)
app.include_router(historico_tecnico_routers)
app.include_router(jogador_routers)
app.include_router(partida_routers)
app.include_router(time_temporada_routers)
app.include_router(times_routers)
