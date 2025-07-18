from app.schemas.schemas import TecnicoCreate, TecnicoUpdate
from app.repositories.tecnico_repository import (
    get_tecnicos,
    get_tecnico_by_id,
    create_tecnico,
    update_tecnico,
    delete_tecnico,
)


class TecnicoController:
    @staticmethod
    def listar_tecnicos():
        return get_tecnicos()

    @staticmethod
    def buscar_tecnico(tecnico_id: int):
        return get_tecnico_by_id(tecnico_id)

    @staticmethod
    def criar_tecnico(tecnico: TecnicoCreate):
        return create_tecnico(tecnico)

    @staticmethod
    def atualizar_tecnico(tecnico_id: int, tecnico: TecnicoUpdate):
        return update_tecnico(tecnico_id, tecnico)

    @staticmethod
    def deletar_tecnico(tecnico_id: int):
        return delete_tecnico(tecnico_id)
