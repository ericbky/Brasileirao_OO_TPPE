from fastapi import FastAPI
from app.views.routers import router
from contextlib import asynccontextmanager
from app.db.database import AsyncSessionLocal
from app.utils.utils import fix_postgres_sequences


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with AsyncSessionLocal() as session:
        await fix_postgres_sequences(session)
    yield

app = FastAPI(lifespan=lifespan)

app.include_router(router)