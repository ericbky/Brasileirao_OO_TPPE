from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.schemas import TimeCreate
from app.repositories.time_repository import criar_time_repository


async def criar_time_controller(time_data: TimeCreate, session: AsyncSession):
    return await criar_time_repository(time_data, session)
