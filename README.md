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


| **Épico**                | **História de Usuário**                                                                                                                                             | **Critérios de Aceitação**                                                                                                          | **Prioridade** |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------|
| **Épico 1: Registros**   | Eu como usuário gostaria de cadastrar um time no sistema a fim de que ele possa ser incluído nas partidas do campeonato.                                              | O time deve ter nome único, socios e valor médio.                                                                                   | Alta           |
| **Épico 1: Registros**   | Eu como administrador gostaria de cadastrar jogadores em um time para que possam ser escalados em partidas.                                                             | O jogador deve ter nome, idade, posição e número de camisa. O time do jogador deve ser associado corretamente.                     | Alta           |
| **Épico 1: Registros**   | Eu como administrador gostaria de registrar uma partida entre dois times para acompanhar o desempenho de cada um no campeonato.                                      | A partida deve ter data, horário, estádio e times mandante e visitante associados.                                                  | Alta           |
| **Épico 1: Registros**   | Eu como administrador gostaria de cadastrar técnicos para associá-los a partidas e times no campeonato.                                                              | O técnico deve ter nome, idade, data de início e término, e estar associado a um time.                                               | Alta           |
| **Épico 1: Registros**   | Eu como administrador gostaria de cadastrar estádios para que as partidas possam ser associadas a esses locais.                                                         | O estádio deve ter nome, capacidade e localização. A partida deve ser corretamente associada ao estádio.                            | Alta           |
| **Épico 1: Registros**   | Eu como usuário gostaria de registrar o histórico de um jogador no sistema para manter o controle de suas transferências e passagem por times.                         | O histórico de jogador deve registrar as datas de início e fim e associar o jogador ao time corretamente.                           | Média          |
| **Épico 1: Registros**   | Eu como usuário gostaria de registrar o histórico de um técnico para manter o controle das equipes que ele treinou ao longo de sua carreira.                         | O histórico de técnico deve registrar as datas de início e fim e associar o técnico ao time corretamente.                           | Média          |
| **Épico 1: Registros**   | Eu como usuário gostaria de registrar eventos que aconteceram durante uma partida (gols, cartões, etc.) para manter o histórico das partidas.                       | O evento deve ter tipo, minuto e descrição, e ser associado ao jogador e partida corretamente.                                        | Alta           |
| **Épico 1: Registros**   | Eu como administrador gostaria de registrar as estatísticas das partidas (posse de bola, finalizações, etc.) para que possamos analisar o desempenho dos times.     | A estatística deve ser associada a partida e time e registrar dados como posse de bola, finalizações, escanteios e outros.         | Alta           |
| **Épico 2: Escalações**  | Eu como técnico gostaria de escalar jogadores para uma partida a fim de que eles possam ser analisados durante a execução do jogo.                                     | A escalação deve incluir informações sobre o jogador (titular, minutos em campo, substituído) e ser associada à partida corretamente. | Alta           |
| **Épico 3: Relatórios e Visualização** | Eu como usuário gostaria de visualizar todas as partidas realizadas em uma temporada para acompanhar o progresso do campeonato.                                          | A visualização deve listar todas as partidas com seus respectivos detalhes (data, fase, times, gols, etc.).                       | Alta           |
| **Épico 4: Filtragem de Times** | Eu como usuário gostaria de filtrar os times por nome, número de sócios ou valor médio da equipe a fim de encontrar informações mais facilmente.                         | O sistema deve permitir a filtragem por nome, sócios e valor médio de forma eficiente e sem erros.                                 | Média          |
| **Épico 5: Relatórios de Partidas** | Eu como administrador gostaria de gerar relatórios detalhados das partidas para análise de dados e decisões estratégicas.                                                | O sistema deve permitir a geração de relatórios com as estatísticas e eventos das partidas.                                        | Média          |
| **Épico 6: Atualizações** | Eu como administrador gostaria de atualizar as informações de um jogador, como seu time, idade ou posição, caso haja mudanças no elenco.                               | O sistema deve permitir a atualização das informações do jogador e refletir corretamente nas escalas e históricos.                | Alta           |
| **Épico 6: Atualizações** | Eu como administrador gostaria de atualizar as informações de um técnico, como seu time ou data de término de contrato, caso haja mudanças.                           | O sistema deve permitir a atualização das informações do técnico e refletir corretamente nos históricos e partidas.               | Alta           |
| **Épico 7: Transferências** | Eu como usuário gostaria de registrar a transferência de um jogador entre times a fim de manter o histórico de transferências atualizado.                             | A transferência deve ser registrada corretamente, com datas de início e fim e associação correta entre o jogador e o time.         | Média          |
| **Épico 8: Controle de Cartões** | Eu como técnico gostaria de registrar os cartões dados aos jogadores em uma partida para gerenciar melhor as infrações durante os jogos.                                 | O cartão deve ser registrado com o tipo (amarelo ou vermelho), jogador e minuto do evento.                                         | Alta           |
| **Épico 9: Busca de Jogadores por Posição** | Eu como técnico gostaria de buscar jogadores por sua posição em campo para fazer as melhores escolhas de escalonamento.                                               | A busca deve ser eficiente e retornar jogadores que se encaixam na posição solicitada.                                              | Média          |
| **Épico 10: Temporada** | Eu como administrador gostaria de registrar uma nova temporada no campeonato para organizar as partidas e equipes de forma ordenada.                                 | A temporada deve ser registrada com nome e datas de início e fim. As partidas devem ser associadas à temporada corretamente.       | Alta           |
| **Épico 11: Histórico de Partidas por Temporada** | Eu como usuário gostaria de visualizar todas as partidas realizadas em uma temporada específica para análises detalhadas.                                            | O sistema deve listar todas as partidas de uma temporada, permitindo a visualização de detalhes como gols, técnicos e estádios.   | Média          |
| **Épico 12: Performance de Time e Jogador** | Eu como técnico gostaria de ver o desempenho do meu time e dos jogadores em tempo real durante as partidas para tomar decisões estratégicas.                           | O sistema deve fornecer estatísticas de tempo real para análise de desempenho dos jogadores e time.                               | Alta           |
| **Épico 13: Atualização de Eventos** | Eu como administrador gostaria de atualizar eventos registrados durante as partidas, como a correção de gols ou cartões dados aos jogadores.                             | O sistema deve permitir a atualização das informações de eventos, como minutos e tipo de evento, e refletir nas partidas corretamente. | Média          |
| **Épico 14: Sistema de Notificações** | Eu como usuário gostaria de ser notificado sobre alterações em jogos, escalações e eventos durante a temporada para acompanhar as atualizações.          | O sistema deve enviar notificações sobre eventos importantes relacionados ao time e partidas, como cartões e gols.                | Baixa          |
| **Épico 15: Gestão de Usuários** | Eu como administrador gostaria de gerenciar as permissões de usuários no sistema para controlar o acesso a diferentes funcionalidades.                                           | O sistema deve permitir a criação, edição e remoção de usuários, além de atribuir permissões de acesso (admin, técnico, usuário).  | Alta           |
| **Épico 15: Gestão de Usuários** | Eu como usuário gostaria de alterar minha senha para garantir a segurança da minha conta.                                                                                      | O sistema deve permitir que o usuário altere sua senha, validando as informações corretamente.                                      | Média          |
| **Épico 16: Análises Estatísticas Avançadas** | Eu como administrador gostaria de visualizar gráficos detalhados sobre o desempenho dos jogadores ao longo das partidas para tomar decisões estratégicas.                      | O sistema deve gerar gráficos de desempenho dos jogadores, incluindo métricas como gols, assistências, faltas cometidas, etc.      | Alta           |
| **Épico 16: Análises Estatísticas Avançadas** | Eu como técnico gostaria de ter uma análise comparativa entre os times do campeonato para avaliar o desempenho geral e ajustar a estratégia.                                  | O sistema deve permitir a visualização de comparações entre os times, como número de vitórias, empates, gols marcados e sofridos. | Alta           |
| **Épico 17: Modificações no Campeonato** | Eu como administrador gostaria de editar a configuração de um campeonato em andamento, como alterar a data de uma partida ou mudar o estádio.                                | O sistema deve permitir a edição de detalhes de partidas e sua reconfiguração no campeonato.                                       | Média          |
| **Épico 17: Modificações no Campeonato** | Eu como administrador gostaria de desmarcar uma partida agendada em caso de imprevistos, para garantir que a competição continue sem problemas.                               | O sistema deve permitir o cancelamento de partidas agendadas, atualizando as tabelas de classificação de forma automática.          | Alta           |
| **Épico 18: Sistema de Ranking** | Eu como usuário gostaria de visualizar um ranking de jogadores com base em suas estatísticas (gols, assistências, etc.) para acompanhar o desempenho individual.              | O sistema deve gerar um ranking dinâmico de jogadores, baseado em suas estatísticas de partidas.                                    | Alta           |
| **Épico 18: Sistema de Ranking** | Eu como usuário gostaria de visualizar o ranking de times do campeonato para acompanhar sua posição ao longo da temporada.                                                     | O sistema deve permitir a visualização do ranking dos times, com base nos pontos e desempenho das partidas.                       | Alta           |
| **Épico 19: Controle de Lesões** | Eu como técnico gostaria de registrar as lesões dos jogadores durante as partidas para monitorar a saúde do elenco.                                                             | O sistema deve permitir o registro de lesões, incluindo tipo, gravidade e jogador afetado.                                        | Alta           |
| **Épico 19: Controle de Lesões** | Eu como técnico gostaria de atualizar o status de recuperação de um jogador lesionado para saber quando ele poderá retornar ao time.                                             | O sistema deve permitir a atualização do status de recuperação dos jogadores lesionados.                                           | Média          |
| **Épico 20: Desempenho do Técnico** | Eu como administrador gostaria de visualizar o desempenho dos técnicos no campeonato, baseado nas vitórias e estatísticas de suas equipes.                                      | O sistema deve gerar relatórios sobre o desempenho dos técnicos ao longo do campeonato.                                             | Alta           |
| **Épico 20: Desempenho do Técnico** | Eu como técnico gostaria de receber feedback sobre minhas estratégias e escalações, baseado nos resultados das partidas.                                                        | O sistema deve fornecer análises sobre a performance do técnico, considerando resultados das partidas e as escolhas de escalação.  | Média          |
| **Épico 21: Integração com Redes Sociais** | Eu como usuário gostaria de compartilhar as estatísticas do meu time nas redes sociais para promover o campeonato e engajar os fãs.                                             | O sistema deve permitir a integração com redes sociais e a publicação de estatísticas diretamente nas plataformas.                 | Baixa          |
| **Épico 21: Integração com Redes Sociais** | Eu como usuário gostaria de compartilhar eventos de uma partida, como gols e cartões, nas redes sociais para manter os torcedores atualizados.                                 | O sistema deve permitir a postagem de eventos específicos de partidas nas redes sociais.                                           | Baixa          |
| **Épico 22: Análise de Táticas de Jogo** | Eu como técnico gostaria de visualizar análises táticas das partidas para avaliar o desempenho das formações e estratégias utilizadas.                                          | O sistema deve gerar gráficos e relatórios detalhados sobre as formações e táticas utilizadas nas partidas.                         | Alta           |
| **Épico 22: Análise de Táticas de Jogo** | Eu como técnico gostaria de comparar táticas de diferentes equipes para ajustar minha estratégia de jogo.                                                                       | O sistema deve permitir a comparação das formações táticas entre diferentes equipes, considerando as estatísticas de partidas.      | Alta           |
| **Épico 23: Histórico de Jogadores por Time** | Eu como usuário gostaria de visualizar o histórico completo de jogadores de um time, incluindo suas estatísticas e transferências.                                                | O sistema deve exibir o histórico de jogadores por time, com informações detalhadas sobre transferências e desempenho.             | Média          |
| **Épico 23: Histórico de Jogadores por Time** | Eu como usuário gostaria de acessar as estatísticas de um jogador ao longo das temporadas, para acompanhar sua evolução no campeonato.                                            | O sistema deve exibir as estatísticas de cada jogador em todas as temporadas em que participou, com detalhes por temporada.         | Alta           |
| **Épico 24: Regras do Campeonato** | Eu como usuário gostaria de consultar as regras do campeonato diretamente no sistema para entender os critérios de classificação e as penalidades.                              | O sistema deve permitir que os usuários visualizem as regras do campeonato de forma clara e acessível.                             | Baixa          |
| **Épico 24: Regras do Campeonato** | Eu como administrador gostaria de poder editar as regras do campeonato a qualquer momento, para garantir que as regras reflitam mudanças necessárias.                          | O sistema deve permitir a edição das regras do campeonato e notificar os usuários sobre quaisquer mudanças.                        | Baixa          |
| **Épico 25: Interação com a Mídia** | Eu como administrador gostaria de enviar atualizações automáticas para a imprensa sobre o andamento do campeonato, para manter todos informados sobre as principais notícias.      | O sistema deve permitir o envio de atualizações periódicas sobre o campeonato para um canal de mídia ou imprensa.                  | Baixa          |




## 6. Estrutura de Diretórios

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

## 7. Convenções de Código

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