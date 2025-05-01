# Documento Introdutório  
**Projeto — Sistema de Gestão do Campeonato Brasileiro**  

| Autor | Matrícula | Disciplina | Período |
|-------|-----------|------------|---------|
| Eric Silveira Gomes | 22102266 | Técnicas de Programação em Plataformas Emergentes (FGA0242) | 2025/1 |

---

## 1. Propósito deste Documento
Este arquivo serve como **porta-de-entrada** do projeto, apresentando visão geral, objetivos e convenções que nortearão o desenvolvimento. As seções marcadas como **\[Em desenvolvimento]** são reservadas para a documentação técnica detalhada que será produzida ao longo do semestre (backlog, UML, diagramas, etc.).

---

## 2. Contexto Acadêmico
A disciplina cobre práticas modernas de engenharia de software focadas em qualidade, manutenibilidade e extensibilidade. Entre os tópicos vistos em aula — que fundamentam este projeto — destacam-se:

- **Testes Unitários & Frameworks** • Timeouts, tags, exceções, parametrização  
- **TDD (Red ➜ Green ➜ Refactor)** • Padrões Barra Verde/Vermelha  
- **Refatoração & Maus-cheiros** • Extrair Método/Classe, Encapsular Atributo, Substituir Método por Objeto-método  
- **Programação Defensiva** • Contratos, assertivas, documentação  
- **Design Simples** • Simplicidade, modularidade, DRY, extensibilidade  
- **Componentes & Frameworks** • Caixa-branca vs. Caixa-preta  

Esses pilares serão explicitamente refletidos no código, na arquitetura e na documentação produzida.

---

## 3. Visão Geral do Projeto

O **Sistema de Gestão do Campeonato Brasileiro** tem como objetivo modelar, de forma orientada a objetos, todos os componentes essenciais para representar a dinâmica de uma temporada completa do campeonato. O projeto será dividido em camadas bem definidas e seguirá práticas como TDD, modularidade e documentação contínua.

### Principais Entidades do Domínio
- **Times, Jogadores, Técnicos, Partidas, Estádios, Temporadas, Estatísticas**
- **Relações e regras de negócio** como escalação, eventos da partida, desempenho técnico e classificação

### Qualidade esperada do sistema
- Design **modular e extensível**
- **Testes unitários automatizados** com cobertura ≥ 90%
- **Baixo acoplamento** e **alta coesão**
- **Documentação versionada** e clara para cada componente

---

### 3.1 Escopo Inicial

| Módulo | Descrição | Prioridade |
|--------|-----------|------------|
| **Modelagem de Domínio** | Criação das entidades principais (`Time`, `Jogador`, `Partida`, etc.) e suas interações | Alta |
| **Testes Unitários** | Testes com PyTest cobrindo o núcleo do domínio via TDD | Alta |
| **Persistência** | Repositórios com armazenamento in-memory (fase inicial) e posterior integração com banco de dados relacional | Média |
| **Interface de Usuário (CLI/Web)** | Interface simples para simular cadastro de jogos e visualização de resultados | Média |
| **Infraestrutura e Organização** | Estrutura de diretórios, scripts de inicialização, ambientes virtuais, dependências | Alta |
| **Documentação Técnica** | Arquivos Markdown com diagrama de pacotes, UML, planejamento e decisões técnicas | Alta |

> A linguagem adotada para o projeto será **Python**, utilizando boas práticas de modularização e testes com **PyTest**.

---

## 4. Metodologia de Desenvolvimento

O desenvolvimento do projeto seguirá uma abordagem incremental e iterativa, com foco em boas práticas de engenharia de software e alinhamento com os conteúdos da disciplina. As atividades estarão organizadas nas seguintes frentes principais:

| Fase / Eixo | Descrição | Entregáveis |
|-------------|-----------|-------------|
| **Documentação** | Produção contínua de arquivos explicativos, diagramas e registros de decisão técnica | Markdown versionado, diagramas UML, README |
| **Planejamento** | Organização do backlog, definição de funcionalidades, uso de TDD para guiar a implementação | Backlog com histórias, tarefas concluídas, critérios de aceite |
| **Infraestrutura** | Estrutura de diretórios, configuração de ambiente, scripts de build e CI/CD simplificado | Layout de projeto, `requirements.txt`, pipelines (opcional) |
| **Modelagem (Backend + Banco)** | Implementação da lógica de domínio, entidades, repositórios e mapeamento com o banco | Camadas `models`, `repositories`, `services` e `db` |
| **Frontend** | Interface básica para visualização ou entrada de dados (HTML/CLI) | Templates em `views/`, interação mínima com `controllers/` |
| **Testes** | Cobertura unitária com foco em regressão e refatoração segura | Testes unitários com PyTest ou JUnit, relatórios de cobertura |

> Cada uma dessas frentes será iterada ao longo das sprints, respeitando o ciclo Red ➜ Green ➜ Refactor, promovendo código limpo, testável e documentado.

---

## 5. Estrutura de Diretórios (Proposta)

| Pacote | Responsabilidade | Principais Arquivos |
|--------|------------------|---------------------|
| **`app`** | Ponto de entrada da aplicação | `main.py`, `config.py` |
| **`controllers`** | Camada de orquestração da lógica de negócios; recebe requisições da UI/CLI e delega para serviços | `time_controller.py`, `temporada_controller.py`, `jogador_controller.py`, `tecnico_controller.py` |
| **`services`** | Implementa regras de negócio, validações e coordena transações | `tabela_service.py`, `jogador_service.py` |
| **`repositories`** | Acesso a dados (DAO) e persistência independente de tecnologia | `time_repository.py`, `jogador_repository.py`, `tecnico_repository.py` |
| **`models`** | Entidades de domínio puro (POJOs/Pydantic) | `time.py`, `jogador.py`, `temporada.py`, `tecnico.py` |
| **`schemas`** | DTOs/serializadores para entrada e saída de dados, isolando a camada de apresentação | `time.py`, `jogador.py`, `tecnico.py` |
| **`views`** | Templates ou componentes de UI (HTML, CLI) | `menu.html`, `rodada.html`, `pessoa.html` |
| **`db`** | Configuração de banco, migrations e conexão | `database.py`, `base.py`, diretório `migrations/` |
| **`utils`** | Funções auxiliares reutilizáveis | `helpers.py` |

A seguir está o comando tree -L 3  que contém toda a estrutura da aplicação desenvolvida para o projeto.

```bash
$ tree -L 3
brasileirao_projeto
├── main.py
├── config.py
├── controllers/                  # Camada de controle (recebe comandos da UI)
│   └── ...                       # Ex: time_controller.py, jogador_controller.py
├── services/                     # Regras de negócio e lógica de aplicação
│   └── ...                       # Ex: tabela_service.py, jogador_service.py
├── repositories/                # Acesso e persistência de dados
│   └── ...                       # Ex: time_repository.py, tecnico_repository.py
├── models/                      # Entidades de domínio puro
│   └── ...                       # Ex: time.py, jogador.py
├── schemas/                     # Esquemas de entrada e saída (DTOs)
│   └── ...                       # Ex: time.py, tecnico.py
├── views/                       # Templates HTML ou CLI
│   └── ...                       # Ex: rodada.html, menu.html
├── db/                          # Configuração e controle do banco de dados
│   ├── migrations/              # Versionamento de schema
│   └── ...                       # Ex: database.py, base.py
├── utils/                       # Funções utilitárias e helpers
│   └── ...                       # Ex: helpers.py
└── docs/                        # Documentação do projeto
    └── diagrams/                # Diagramas UML, pacotes, sequência etc.
```

---

## 6. Convenções de Código

- **Estilo:** Adotar o padrão [PEP 8](https://peps.python.org/pep-0008/) para todo o código Python  
- **Nomenclatura:** Classes, métodos e atributos em inglês; comentários e documentação podem estar em português técnico  
- **Commits:** Seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), com mensagens curtas em inglês e descrições em português, quando necessário  
- **Branching:** 
  - `main` → versão estável  e única
- **Testes:** Nome dos arquivos de teste com prefixo `test_`, funções de teste com nomes autoexplicativos e uso de fixtures para setup

---

## 7. Próximos Passos

1. **Criar repositório GitHub** com estrutura inicial (`brasileirao_projeto/`) e arquivo `README.md`  
2. **Configurar ambiente de desenvolvimento** com `venv`, `requirements.txt`, e estrutura modular do projeto  
3. **Criar backlog inicial** com histórias de usuário, tarefas técnicas e entregas por sprint  
4. **Desenhar diagramas UML** representando o domínio (classes, pacotes, sequência)  
5. **Implementar esqueleto do Core Domain** usando TDD (testes antes da implementação)  
6. **Escrever primeiros testes unitários** com `pytest`, já cobrindo classes principais do modelo  
7. **Incluir ferramenta de análise estática** como `flake8`, `mypy` ou integração com o SonarCloud para análise de qualidade contínua  
8. **Definir CI simplificado** (ex: GitHub Actions) para rodar testes e lint automaticamente a cada push