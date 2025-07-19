# Projeto — Sistema de Gestão do Campeonato Brasileiro

| Autor               | Matrícula | Disciplina                                                            | Período |
| ------------------- | --------- | --------------------------------------------------------------------- | ------- |
| Eric Silveira Gomes | 22102266  | Técnicas de Programação em Plataformas Emergentes (FGA0242) – UnB/FGA | 2025/1  |

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

| Eixo               | Descrição                                                          |
| ------------------ | ------------------------------------------------------------------ |
| **Planejamento**   | Organização do backlog, critérios de aceite, histórico de decisões |
| **Documentação**   | README, arquivos Markdown, diagramas UML e pacotes                 |
| **Infraestrutura** | Setup Docker, ambiente virtual, dependências e CI (futuro)         |
| **Modelagem**      | Entidades, lógica de negócio e persistência no banco               |
| **Frontend**       | Interface básica Vue integrando com a API                          |
| **Testes**         | Testes unitários automatizados (backend e frontend)                |

---

### 4.1 Kanban

O **Kanban** é uma ferramenta de gerenciamento visual utilizada para organizar as tarefas e acompanhar o progresso do projeto de forma ágil. Através do uso de quadros e listas, o Kanban permite que a equipe visualize facilmente o fluxo de trabalho, desde o planejamento até a execução.

Para acompanhar o andamento das atividades do projeto **Sistema de Gestão do Campeonato Brasileiro**, o quadro Kanban foi configurado no **Trello**. As tarefas foram organizadas em diferentes listas, incluindo **Backlog**, **Em andamento**, **Concluídas**, e outras específicas de acordo com a evolução do desenvolvimento.

Você pode acessar o Kanban e acompanhar as tarefas do projeto através do seguinte [link para o Kanban no Trello](https://trello.com/invite/b/68140e70e68e79ee6b8b16b5/ATTIf41c61d2ec486e7658ae1af98155de6305F2CAFA/tppe-brasileirao).

O uso do Kanban auxilia na visualização do progresso, identificação de bloqueios e priorização de tarefas, além de promover uma melhor organização das sprints e entregas do projeto.

---

## 5. Backlog

A documentação do backlog descreve as **histórias de usuário** que guiarão o desenvolvimento do sistema. Cada história de usuário representa uma funcionalidade ou requisito do sistema, detalhando as necessidades dos usuários, os critérios para a implementação e a prioridade de cada tarefa. O backlog será atualizado continuamente conforme o desenvolvimento avança, com o objetivo de garantir que todas as funcionalidades essenciais sejam implementadas de acordo com as expectativas dos stakeholders.

A seguir, são apresentadas as histórias de usuário organizadas por **épicos**, que agrupam funcionalidades relacionadas dentro do sistema. Cada história de usuário foi cuidadosamente elaborada para refletir os objetivos do projeto e as necessidades dos usuários finais, com foco em desempenho, usabilidade e gestão eficiente dos dados do campeonato.

Este backlog serve como uma referência para o desenvolvimento e acompanhamento do progresso do projeto, sendo um instrumento essencial para garantir que as metas sejam atingidas dentro dos requisitos estabelecidos.

| **Épico**                                        | **História de Usuário**                                                                                                                                                                                         | **Critérios de Aceitação**                                                                                                                                 | **Prioridade** |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **Épico 1: Registros**                           | Eu como administrador gostaria de cadastrar jogadores em um time para que possam ser escalados em partidas.                                                                                                     | O jogador deve ter nome, idade, posição e número de camisa. O time do jogador deve ser associado corretamente.                                             | Alta           |
| **Épico 1: Registros**                           | Eu como administrador gostaria de cadastrar estádios para que as partidas possam ser associadas a esses locais.                                                                                                 | O estádio deve ter nome, capacidade e localização. A partida deve ser corretamente associada ao estádio.                                                   | Alta           |
| **Épico 1: Registros**                           | Eu como usuário gostaria de registrar o histórico de um jogador no sistema para manter o controle de suas transferências e passagem por times.                                                                  | O histórico de jogador deve registrar as datas de início e fim e associar o jogador ao time corretamente.                                                  | Média          |
| **Épico 2: Navegação**                           | Eu como usuário gostaria de ter um menu estático a rim de permitir uma melhor navegação da página.                                                                                                              | O sistema deve permitir a navegação fácil entre páginas como estádios, partidas, jogadores, times e notificações.                                          | Média          |
| **Épico 3: Filtragem**                           | Eu como usuário gostaria de filtrar os times por nome, número de sócios ou valor médio da equipe a fim de encontrar informações mais facilmente.                                                                | O sistema deve permitir a filtragem por nome, sócios e valor médio de forma eficiente e sem erros.                                                         | Média          |
| **Épico 3: Filtragem**                           | Eu como usuário gostaria de filtrar os estádios por nome e cidade a fim de encontrar informações mais facilmente.                                                                                               | O sistema deve permitir a filtragem por nome e cidade de forma eficiente e sem erros.                                                                      | Média          |
| **Épico 3: Filtragem**                           | Eu como usuário gostaria de filtrar os jogadores por nome, posição e time, a fim de encontrar informações mais facilmente, além disso gostaria de ordenar em ordem alfabética de forma crescente e decrescente. | O sistema deve permitir a filtragem por nome, posição e time, e também exibir em ordem alfabética crescente e decrescente, de forma eficiente e sem erros. | Média          |
| **Épico 3: Filtragem**                           | Eu como usuário gostaria de filtrar as partidas por temporada, nome do time, data da partida, estádio e ordenação de data, a fim de encontrar informações mais facilmente.                                      | O sistema deve permitir a filtragem por temporada, nome do time, data da partida, estádio e ordenação de data, de forma eficiente e sem erros.             | Média          |
| **Épico 3: Filtragem**                           | Eu como usuário gostaria de filtrar as notificações por gols, cartões, substituições e outros, a fim de encontrar informações mais facilmente.                                                                  | O sistema deve permitir a filtragem por gols, cartões, substituições e outros, de forma eficiente e sem erros.                                             | Média          |
| **Épico 4: Relatórios de Visualização**          | Eu como administrador gostaria de gerar relatórios detalhados das partidas para análise de dados e decisões estratégicas.                                                                                       | O sistema deve permitir a geração de relatórios com as estatísticas e eventos das partidas.                                                                | Média          |
| **Épico 2: Relatórios e Visualização**           | Eu como usuário gostaria de visualizar todas as partidas realizadas em uma temporada para acompanhar o progresso do campeonato.                                                                                 | A visualização deve listar todas as partidas com seus respectivos detalhes (data, fase, times, gols, etc.).                                                | Alta           |
| **Épico 5: Busca de Jogadores por Posição**      | Eu como técnico gostaria de buscar jogadores por sua posição em campo para fazer as melhores escolhas de escalonamento.                                                                                         | A busca deve ser eficiente e retornar jogadores que se encaixam na posição solicitada.                                                                     | Média          |
| **Épico 6: Histórico de Partidas por Temporada** | Eu como usuário gostaria de visualizar todas as partidas realizadas em uma temporada específica para análises detalhadas.                                                                                       | O sistema deve listar todas as partidas de uma temporada, permitindo a visualização de detalhes como gols, técnicos e estádios.                            | Média          |
| **Épico 7: Sistema de Notificações**             | Eu como usuário gostaria de ser notificado sobre alterações em jogos, escalações e eventos durante a temporada para acompanhar as atualizações.                                                                 | O sistema deve registrar notificações sobre eventos importantes relacionados ao time e partidas, como cartões, faltas, substituições e gols.               | Alta           |
| **Épico 8: Análises Estatísticas Avançadas**     | Eu como administrador gostaria de visualizar dados detalhados sobre o desempenho dos jogadores ao longo das partidas para tomar decisões estratégicas.                                                          | O sistema deve gerar tabelas de desempenho dos jogadores, incluindo métricas como gols, assistências, faltas cometidas, etc.                               | Alta           |
| **Épico 8: Análises Estatísticas Avançadas**     | Eu como técnico gostaria de ter uma análise comparativa entre os times do campeonato para avaliar o desempenho geral e ajustar a estratégia.                                                                    | O sistema deve permitir a visualização de comparações entre os times, como número de vitórias, empates, gols marcados e sofridos.                          | Alta           |
| **Épico 9: Sistema de Ranking**                  | Eu como usuário gostaria de visualizar um ranking de jogadores com base em suas estatísticas (gols, cartões, etc.) para acompanhar o desempenho individual.                                                     | O sistema deve gerar um ranking dinâmico de jogadores, baseado em suas estatísticas de partidas.                                                           | Alta           |
| **Épico 9: Sistema de Ranking**                  | Eu como usuário gostaria de visualizar o ranking de times do campeonato para acompanhar sua posição ao longo da temporada.                                                                                      | O sistema deve permitir a visualização do ranking dos times, com base nos pontos e desempenho das partidas.                                                | Alta           |
| **Épico 10: Remoção**                            | Eu como administrador gostaria de remover estádios cadastrados para manter a base de dados atualizada.                                                                                                          | O sistema deve permitir a exclusão de estádios da lista.                                                                                                   | Média          |
| **Épico 10: Remoção**                            | Eu como administrador gostaria de remover jogadores cadastrados para manter a base de dados atualizada.                                                                                                         | O sistema deve permitir a exclusão de jogadores da lista.                                                                                                  | Média          |
| **Épico 10: Remoção**                            | Eu como administrador gostaria de remover times cadastrados para manter a base de dados atualizada.                                                                                                             | O sistema deve permitir a exclusão de times da lista.                                                                                                      | Média          |

## 6. Estrutura de Diretórios do Backend

```
.
├── app
│   ├── api
│   │   ├── escalacao
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── estadio
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── estatistica
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── evento_partida
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── historico_jogador
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── historico_tecnico
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── jogador
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── partida
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   ├── time
│   │   │   ├── controller.py
│   │   │   └── router.py
│   │   └── time_temporada
│   │       ├── controller.py
│   │       └── router.py
│   ├── config.py
│   ├── db
│   │   ├── database.py
│   │   └── sql
│   │       └── dump.sql
│   ├── init_db.py
│   ├── main.py
│   ├── models
│   │   ├── models.py
│   ├── repositories
│   │   ├── escalacao_repository.py
│   │   ├── estadio_repository.py
│   │   ├── estatistica_repository.py
│   │   ├── evento_partida_repository.py
│   │   ├── historico_jogador_repository.py
│   │   ├── historico_tecnico_repository.py
│   │   ├── jogador_repository.py
│   │   ├── partida_repository.py
│   │   ├── time_repository.py
│   │   └── time_temporada_repository.py
│   ├── schemas
│   │   └── schemas.py
│   └── utils
│       └── utils.py
├── Dockerfile
├── entrypoint.sh
├── pytest.ini
├── requirements.txt
├── tests
│   ├── pytest.ini
│   ├── test_db.py
│   ├── test_estadio_endpoints_async.py
│   └── test_schemas.py
└── wait-for-postgres.sh
```

---

## 7. Dicionário de Dados

### **Tipo: public.posicaojogador**

**Descrição:** Define as posições possíveis dos jogadores no campo.

| Atributo       | Descrição                     | Not Null | PK  | FK  |
| -------------- | ----------------------------- | -------- | --- | --- |
| posicaojogador | Posições dos jogadores (Enum) | Sim      | Não | Não |

---

### **Tipo: public.tipoevento**

**Descrição:** Define os tipos de eventos que podem ocorrer durante uma partida.

| Atributo   | Descrição               | Not Null | PK  | FK  |
| ---------- | ----------------------- | -------- | --- | --- |
| tipoevento | Tipos de eventos (Enum) | Sim      | Não | Não |

---

### **Tabela: public.escalacoes**

**Descrição:** Armazena informações sobre as escalações de jogadores durante as partidas.

| Atributo              | Descrição                                                         | Not Null | PK  | FK                          |
| --------------------- | ----------------------------------------------------------------- | -------- | --- | --------------------------- |
| id                    | Identificador único da escalação                                  | Sim      | Sim | Não                         |
| titular               | Indica se o jogador é titular ou reserva                          | Sim      | Não | Não                         |
| minutos_em_campo      | Tempo que o jogador permaneceu em campo (em minutos)              | Sim      | Não | Não                         |
| posicao_em_campo      | Posição do jogador em campo                                       | Sim      | Não | Não                         |
| substituido           | Indica se o jogador foi substituído                               | Sim      | Não | Não                         |
| entrou_durante_o_jogo | Indica se o jogador entrou durante o jogo                         | Sim      | Não | Não                         |
| jogador_id            | Identificador do jogador (referência à tabela `public.jogadores`) | Sim      | Não | Sim (`public.jogadores.id`) |
| partida_id            | Identificador da partida (referência à tabela `public.partidas`)  | Sim      | Não | Sim (`public.partidas.id`)  |

---

### **Tabela: public.estadios**

**Descrição:** Armazena as informações sobre os estádios.

| Atributo   | Descrição                             | Not Null | PK  | FK  |
| ---------- | ------------------------------------- | -------- | --- | --- |
| id         | Identificador único do estádio        | Sim      | Sim | Não |
| nome       | Nome do estádio                       | Sim      | Não | Não |
| capacidade | Capacidade total do estádio           | Sim      | Não | Não |
| cidade     | Cidade onde o estádio está localizado | Sim      | Não | Não |
| estado     | Estado onde o estádio está localizado | Sim      | Não | Não |
| pais       | País onde o estádio está localizado   | Sim      | Não | Não |

---

### **Tabela: public.estatisticas_time_partida**

**Descrição:** Armazena as estatísticas de um time durante uma partida.

| Atributo         | Descrição                                                        | Not Null | PK  | FK                         |
| ---------------- | ---------------------------------------------------------------- | -------- | --- | -------------------------- |
| id               | Identificador único da estatística                               | Sim      | Sim | Não                        |
| posse_bola       | Percentual de posse de bola                                      | Sim      | Não | Não                        |
| finalizacoes     | Número total de finalizações                                     | Sim      | Não | Não                        |
| escanteios       | Número total de escanteios                                       | Sim      | Não | Não                        |
| faltas_cometidas | Número total de faltas cometidas                                 | Sim      | Não | Não                        |
| impedimentos     | Número total de impedimentos                                     | Sim      | Não | Não                        |
| defesas_goleiro  | Número total de defesas do goleiro                               | Sim      | Não | Não                        |
| chutes_no_gol    | Número total de chutes no gol                                    | Sim      | Não | Não                        |
| chutes_fora      | Número total de chutes fora do gol                               | Sim      | Não | Não                        |
| passes_certos    | Número total de passes certos                                    | Sim      | Não | Não                        |
| passes_errados   | Número total de passes errados                                   | Sim      | Não | Não                        |
| partida_id       | Identificador da partida (referência à tabela `public.partidas`) | Sim      | Não | Sim (`public.partidas.id`) |
| time_id          | Identificador do time (referência à tabela `public.times`)       | Sim      | Não | Sim (`public.times.id`)    |

---

### **Tabela: public.eventos_partida**

**Descrição:** Armazena os eventos que ocorrem durante as partidas.

| Atributo   | Descrição                                                         | Not Null | PK  | FK                          |
| ---------- | ----------------------------------------------------------------- | -------- | --- | --------------------------- |
| id         | Identificador único do evento                                     | Sim      | Sim | Não                         |
| tipo       | Tipo de evento (referência ao enum `public.tipoevento`)           | Sim      | Não | Sim (`public.tipoevento`)   |
| minuto     | Minuto do jogo em que o evento ocorreu                            | Sim      | Não | Não                         |
| descricao  | Descrição do evento                                               | Sim      | Não | Não                         |
| jogador_id | Identificador do jogador (referência à tabela `public.jogadores`) | Sim      | Não | Sim (`public.jogadores.id`) |
| partida_id | Identificador da partida (referência à tabela `public.partidas`)  | Sim      | Não | Sim (`public.partidas.id`)  |

---

### **Tabela: public.historico_jogadores**

**Descrição:** Armazena o histórico dos jogadores em relação aos times.

| Atributo    | Descrição                                                         | Not Null | PK  | FK                          |
| ----------- | ----------------------------------------------------------------- | -------- | --- | --------------------------- |
| id          | Identificador único do histórico                                  | Sim      | Sim | Não                         |
| data_inicio | Data de início da associação com o time                           | Sim      | Não | Não                         |
| data_fim    | Data de fim da associação com o time                              | Não      | Não | Não                         |
| jogador_id  | Identificador do jogador (referência à tabela `public.jogadores`) | Sim      | Não | Sim (`public.jogadores.id`) |
| time_id     | Identificador do time (referência à tabela `public.times`)        | Sim      | Não | Sim (`public.times.id`)     |

---

### **Tabela: public.historico_tecnicos**

**Descrição:** Armazena o histórico dos técnicos nos times.

| Atributo    | Descrição                                                        | Not Null | PK  | FK                         |
| ----------- | ---------------------------------------------------------------- | -------- | --- | -------------------------- |
| id          | Identificador único do histórico                                 | Sim      | Sim | Não                        |
| data_inicio | Data de início da associação com o time                          | Sim      | Não | Não                        |
| data_fim    | Data de fim da associação com o time                             | Não      | Não | Não                        |
| tecnico_id  | Identificador do técnico (referência à tabela `public.tecnicos`) | Sim      | Não | Sim (`public.tecnicos.id`) |
| time_id     | Identificador do time (referência à tabela `public.times`)       | Sim      | Não | Sim (`public.times.id`)    |

---

### **Tabela: public.jogadores**

**Descrição:** Armazena as informações dos jogadores de futebol.

| Atributo                    | Descrição                                                       | Not Null | PK  | FK                            |
| --------------------------- | --------------------------------------------------------------- | -------- | --- | ----------------------------- |
| id                          | Identificador único do jogador                                  | Sim      | Sim | Não                           |
| nome                        | Nome do jogador                                                 | Sim      | Não | Não                           |
| idade                       | Idade do jogador                                                | Sim      | Não | Não                           |
| altura                      | Altura do jogador                                               | Sim      | Não | Não                           |
| posicao                     | Posição do jogador (referência ao enum `public.posicaojogador`) | Sim      | Não | Sim (`public.posicaojogador`) |
| num_camisa                  | Número da camisa do jogador                                     | Sim      | Não | Não                           |
| convocado_selecao_principal | Indica se o jogador foi convocado para a seleção principal      | Sim      | Não | Não                           |
| convocado_selecao_juniores  | Indica se o jogador foi convocado para a seleção de juniores    | Sim      | Não | Não                           |
| estrangeiro                 | Indica se o jogador é estrangeiro                               | Sim      | Não | Não                           |
| valor_mercado               | Valor de mercado do jogador                                     | Sim      | Não | Não                           |
| time_id                     | Identificador do time (referência à tabela `public.times`)      | Sim      | Não | Sim (`public.times.id`)       |

---

### **Tabela: public.partidas**

**Descrição:** Armazena informações sobre as partidas de futebol.

| Atributo               | Descrição                                                                          | Not Null | PK  | FK                         |
| ---------------------- | ---------------------------------------------------------------------------------- | -------- | --- | -------------------------- |
| id                     | Identificador único da partida                                                     | Sim      | Sim | Não                        |
| temporada              | Temporada da partida                                                               | Sim      | Não | Não                        |
| data                   | Data da partida                                                                    | Sim      | Não | Não                        |
| horario                | Horário da partida                                                                 | Sim      | Não | Não                        |
| fase                   | Fase do campeonato                                                                 | Sim      | Não | Não                        |
| tipo_fase              | Tipo da fase (ex: quartas de final, etc.)                                          | Sim      | Não | Não                        |
| estadio_id             | Identificador do estádio (referência à tabela `public.estadios`)                   | Sim      | Não | Sim (`public.estadios.id`) |
| arbitro                | Nome do árbitro                                                                    | Sim      | Não | Não                        |
| publico                | Número de público presente                                                         | Sim      | Não | Não                        |
| publico_max            | Capacidade máxima do público                                                       | Sim      | Não | Não                        |
| gols_mandante          | Gols do time mandante                                                              | Sim      | Não | Não                        |
| gols_visitante         | Gols do time visitante                                                             | Sim      | Não | Não                        |
| gols_1_tempo_mandante  | Gols do time mandante no primeiro tempo                                            | Sim      | Não | Não                        |
| gols_1_tempo_visitante | Gols do time visitante no primeiro tempo                                           | Sim      | Não | Não                        |
| prorrogacao            | Indica se houve prorrogação                                                        | Sim      | Não | Não                        |
| penalti                | Indica se houve disputa de pênaltis                                                | Sim      | Não | Não                        |
| time_mandante_id       | Identificador do time mandante (referência à tabela `public.times`)                | Sim      | Não | Sim (`public.times.id`)    |
| time_visitante_id      | Identificador do time visitante (referência à tabela `public.times`)               | Sim      | Não | Sim (`public.times.id`)    |
| tecnico_mandante_id    | Identificador do técnico do time mandante (referência à tabela `public.tecnicos`)  | Sim      | Não | Sim (`public.tecnicos.id`) |
| tecnico_visitante_id   | Identificador do técnico do time visitante (referência à tabela `public.tecnicos`) | Sim      | Não | Sim (`public.tecnicos.id`) |

---

### **Tabela: public.tecnicos**

**Descrição:** Armazena as informações sobre os técnicos.

| Atributo       | Descrição                              | Not Null | PK  | FK  |
| -------------- | -------------------------------------- | -------- | --- | --- |
| id             | Identificador único do técnico         | Sim      | Sim | Não |
| nome           | Nome do técnico                        | Sim      | Não | Não |
| idade          | Idade do técnico                       | Sim      | Não | Não |
| data_inicio    | Data de início da carreira do técnico  | Sim      | Não | Não |
| data_fim       | Data de término da carreira do técnico | Não      | Não | Não |
| nacionalidade  | Nacionalidade do técnico               | Sim      | Não | Não |
| tempo_carreira | Tempo de carreira do técnico (em anos) | Sim      | Não | Não |

---

### **Tabela: public.times**

**Descrição:** Armazena as informações sobre os times.

| Atributo                   | Descrição                             | Not Null | PK  | FK  |
| -------------------------- | ------------------------------------- | -------- | --- | --- |
| id                         | Identificador único do time           | Sim      | Sim | Não |
| nome                       | Nome do time                          | Sim      | Não | Não |
| socios                     | Número de sócios do time              | Sim      | Não | Não |
| valor_equipe_titular       | Valor da equipe titular do time       | Sim      | Não | Não |
| valor_medio_equipe_titular | Valor médio da equipe titular do time | Sim      | Não | Não |

---

### **Tabela: public.times_temporada**

**Descrição:** Armazena a temporada em que o time participou.

| Atributo    | Descrição                                                  | Not Null | PK  | FK                      |
| ----------- | ---------------------------------------------------------- | -------- | --- | ----------------------- |
| id          | Identificador único da temporada do time                   | Sim      | Sim | Não                     |
| data_inicio | Data de início da temporada                                | Sim      | Não | Não                     |
| data_final  | Data de término da temporada                               | Não      | Não | Não                     |
| temporada   | Nome da temporada (ex: 2024/2025)                          | Sim      | Não | Não                     |
| time_id     | Identificador do time (referência à tabela `public.times`) | Sim      | Não | Sim (`public.times.id`) |

---

## 8. Convenções de Código

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
