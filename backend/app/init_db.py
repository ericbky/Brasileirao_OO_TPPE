import asyncio
from db.database import engine, Base

from models.models import (
    Time,
    Jogador,
    Tecnico,
    Partida,
    TimeTemporada,
    Estadio,
    Escalacao,
    EstatisticaTimePartida,
    EventoPartida,
)


async def init_models():
    print(f"📦 Registrando {len(Base.metadata.tables)} tabelas via SQLAlchemy...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("✅ Tabelas criadas com sucesso.")


if __name__ == "__main__":
    asyncio.run(init_models())
