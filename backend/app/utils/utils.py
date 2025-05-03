# app/utils/fix_sequences.py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text


async def fix_postgres_sequences(session: AsyncSession):
    tables = ["times", "jogadores", "tecnicos", "estadios", "partidas",
              "eventos_partida", "escalacoes", "estatisticas_time_partida",
              "times_temporada", "historico_jogadores", "historico_tecnicos"]

    for table in tables:
        sequence_name = f"{table}_id_seq"
        stmt = text(f"""
            SELECT setval('{sequence_name}', COALESCE((SELECT MAX(id) FROM {table}), 1), true)
        """)
        await session.execute(stmt)
    await session.commit()