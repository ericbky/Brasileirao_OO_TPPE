# Projeto — Sistema de Gestão do Campeonato Brasileiro

| Autor               | Matrícula | Disciplina                                                                 | Período |
|---------------------|-----------|----------------------------------------------------------------------------|---------|
| Eric Silveira Gomes | 22102266  | Técnicas de Programação em Plataformas Emergentes (FGA0242) – UnB/FGA     | 2025/1  |

---

## 1. Propósito deste Documento

Este arquivo serve como **ponto de partida** do projeto, apresentando visão geral, objetivos, convenções e estrutura técnica. Ele será atualizado ao longo do semestre com decisões de arquitetura, planejamento, diagramas e implementações relevantes.

---

## 2. Contexto Acadêmico

A disciplina aborda práticas modernas de desenvolvimento de software com foco em **qualidade**, **modularidade** e **testabilidade**. Entre os tópicos aplicados neste projeto:

- **Testes unitários** com PyTest e parametrização
- **TDD (Red ➜ Green ➜ Refactor)**
- **Refatoração e boas práticas**: DRY, baixo acoplamento, alta coesão
- **Design Simples e Programação Defensiva**
- **Componentes e frameworks** (FastAPI, Vue.js, PostgreSQL)

---

## 3. Visão Geral do Projeto

O **Sistema de Gestão do Campeonato Brasileiro** modela as principais entidades e regras de um campeonato real, usando uma abordagem orientada a objetos e arquitetura em camadas.

### Requisitos de Qualidade
- Arquitetura **modular e extensível**
- **Cobertura de testes ≥ 90%**
- **Documentação versionada** com diagramas UML e pacotes
- Integração entre backend e frontend via API REST

---

### 3.1 Tecnologias Utilizadas

- **Backend**: Python, FastAPI, SQLAlchemy (async), asyncpg
- **Frontend**: Vue.js 3, Vite
- **Banco de Dados**: PostgreSQL
- **Testes**: pytest, pytest-asyncio, httpx
- **DevTools**: Docker, Docker Compose, Black, Ruff

---

## 4. Metodologia de Desenvolvimento

O projeto adota uma abordagem incremental e iterativa, com entregas organizadas em sprints, uso de TDD e documentação contínua.

| Eixo               | Descrição                                                                 |
|--------------------|---------------------------------------------------------------------------|
| **Planejamento**   | Organização do backlog, critérios de aceite, histórico de decisões       |
| **Documentação**   | README, arquivos Markdown, diagramas UML e pacotes                       |
| **Infraestrutura** | Setup Docker, ambiente virtual, dependências e CI (futuro)               |
| **Modelagem**      | Entidades, lógica de negócio e persistência no banco                     |
| **Frontend**       | Interface básica Vue integrando com a API                                |
| **Testes**         | Testes unitários automatizados (backend e frontend)                      |

---

## 5. Estrutura de Diretórios

```
$ tree -L 3
.
├── backend/
│   ├── app/
│   │   ├── config.py
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── main.py
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── views/
│   ├── requirements.txt
│   ├── Dockerfile
│   └── tests/
│       ├── test_db_connection.py
│       ├── test_main.py
│       ├── test_models/
│       └── test_services/
├── frontend/
│   ├── src/
│   │   ├── App.vue
│   │   ├── components/
│   │   └── main.js
│   ├── tests/
│   │   ├── unit/
│   │   └── e2e/
│   ├── Dockerfile
│   └── vite.config.js
├── docs/
│   └── diagrams/
│       ├── uml_diagram.png
│       └── packages_diagram.png
├── docker-compose.yaml
└── README.md
```

---

## 6. Convenções de Código

- **Estilo**: [PEP 8](https://peps.python.org/pep-0008/)
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- **Branching**: `main` como principal, sem ramificações adicionais.
- **Nomenclatura**: Classes e métodos em inglês; comentários técnicos em PT-BR
- **Testes**: `test_*.py`, usando `pytest`, `pytest-asyncio` e fixtures

---

## Referências Técnicas

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Vue.js Docs](https://vuejs.org/)
- [SQLAlchemy 2.0](https://docs.sqlalchemy.org/en/20/)
- [pytest](https://docs.pytest.org/en/stable/)
- [Docker Compose](https://docs.docker.com/compose/)