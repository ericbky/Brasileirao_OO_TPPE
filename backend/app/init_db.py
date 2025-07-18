import asyncio
from app.db.database import engine, Base, get_session
from app.utils.utils import fix_postgres_sequences


async def init_models():
    print(f"📦 Registrando {len(Base.metadata.tables)} tabelas via SQLAlchemy...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("✅ Tabelas criadas com sucesso.")

    async with get_session() as session:
        await fix_postgres_sequences(session)


if __name__ == "__main__":
    asyncio.run(init_models())
