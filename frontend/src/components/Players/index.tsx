import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import search from "./search.png";
import arrow from "./arrow.png";

interface Jogador {
    nome: string;
    idade: number;
    altura: number;
    posicao: string;
    num_camisa: number;
    convocado_selecao_principal: boolean;
    convocado_selecao_juniores: boolean;
    estrangeiro: boolean;
    valor_mercado: number;
    time_id: number;
    id: number;
}

export const PlayerFrame = () => {
    const navigate = useNavigate();
    const [jogadores, setJogadores] = React.useState<Jogador[]>([]);
    const [times, setTimes] = React.useState<{ id: number; nome: string }[]>([]);
    const [eventos, setEventos] = React.useState<any[]>([]);
    const [buscaNome, setBuscaNome] = React.useState<string>("");
    const [filtroPosicao, setFiltroPosicao] = React.useState<string>("Todos");

    React.useEffect(() => {
        import("axios").then(axios => {
            axios.default.get("http://localhost:8001/jogador/listar_jogadores").then((res) => {
                setJogadores(res.data || []);
            });
            axios.default.get("http://localhost:8001/times/listar_times").then((res) => {
                setTimes(res.data || []);
            });
            axios.default.get("http://localhost:8001/evento_partida/listar_evento_partidas").then((res) => {
                setEventos(res.data || []);
            });
        });
    }, []);

    const posicoes = ["Todos", "Goleiro", "Zagueiro", "Meio-Campo", "Atacante"];

    return (
        <div className="player-frame">
            <div className="div">
                <div className="div-2">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Jogadores</div>
                    </div>

                    <div className="player-frame-wrapper">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">Registrar Jogador</div>
                        </div>
                    </div>
                </div>

                <div className="player-frame-wrapper-2">
                    <div className="player-frame-wrapper-3">
                        <div className="div-3">
                            <div className="player-frame-wrapper-4">
                                <div className="vector-wrapper">
                                    <img className="vector" alt="Vector" src={search} />
                                </div>
                            </div>

                            <div className="search-by-nome-wrapper">
                                <input
                                    className="search-by-nome"
                                    type="text"
                                    placeholder="Buscar por nome..."
                                    value={buscaNome}
                                    onChange={e => setBuscaNome(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: 'inherit',
                                        color: '#111',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-4">
                    {posicoes.map(pos => (
                        <div className="div-5" key={pos} style={{ cursor: "pointer", opacity: filtroPosicao === pos ? 1 : 0.7 }} onClick={() => setFiltroPosicao(pos)}>
                            <div className="div-wrapper-2">
                                <div className="text-wrapper-3" style={{ fontWeight: filtroPosicao === pos ? 700 : 400, color: filtroPosicao === pos ? '#1976d2' : undefined }}>{pos}</div>
                            </div>
                            <div className="div-wrapper-2">
                                <div className="img-wrapper">
                                    <img className="img" alt="Vector" src={arrow} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="div-4">
                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-4">Time Associado</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="player-frame-wrapper-5">
                    <div className="div-6">
                        <div className="player-frame-wrapper-6">
                            <div className="div-wrapper-2">
                                <div className="text-wrapper-5">Ordenar A–Z</div>
                            </div>
                        </div>

                        <div className="player-frame-wrapper-6">
                            <div className="div-wrapper-2">
                                <div className="text-wrapper-5">Ordenar Z–A</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="player-frame-wrapper-2">
                    <div className="player-frame-wrapper-7">
                        <div className="div-7">
                            <div className="div-8">
                                <div className="div-9">
                                    <div className="div-wrapper-3">
                                        <div className="text-wrapper-6">Jogador Nome</div>
                                    </div>

                                    <div className="div-wrapper-4">
                                        <div className="text-wrapper-6">Idade</div>
                                    </div>

                                    <div className="div-wrapper-5">
                                        <div className="text-wrapper-6">Posição</div>
                                    </div>

                                    <div className="div-wrapper-6">
                                        <div className="text-wrapper-6">Número da camisa</div>
                                    </div>

                                    <div className="div-wrapper-7">
                                        <div className="text-wrapper-6">Time</div>
                                    </div>

                                    <div className="div-wrapper-8">
                                        <div className="text-wrapper-6">Estrangeiro</div>
                                    </div>

                                    <div className="div-wrapper-9">
                                        <div className="text-wrapper-6">Valor de Mercado</div>
                                    </div>

                                    <div className="div-wrapper-10">
                                        <div className="text-wrapper-7">Ações</div>
                                    </div>
                                </div>
                            </div>

                            <div className="div-8" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'hidden', minWidth: '100%' }}>
                                {jogadores
                                    .filter(jogador => {
                                        // Filtro por nome
                                        const nomeMatch = buscaNome.trim() === "" || jogador.nome.toLowerCase().includes(buscaNome.trim().toLowerCase());
                                        // Filtro por posição
                                        let posicaoJogador = jogador.posicao;
                                        if (posicaoJogador === "meio_campo") posicaoJogador = "Meio-Campo";
                                        const posMatch = filtroPosicao === "Todos" || posicaoJogador.toLowerCase() === filtroPosicao.toLowerCase();
                                        return nomeMatch && posMatch;
                                    })
                                    .map((jogador) => (
                                    <div className="div-10" key={jogador.id}>
                                        <div className="div-wrapper-11">
                                            <div className="text-wrapper-8">{jogador.nome}</div>
                                        </div>
                                        <div className="div-wrapper-12">
                                            <div className="text-wrapper-9">{jogador.idade}</div>
                                        </div>
                                        <div className="div-wrapper-13">
                                            <div className="text-wrapper-9">{["meio_campo", "Meio_campo", "Meio-campo"].includes(jogador.posicao) ? "Meio-Campo" : jogador.posicao.charAt(0).toUpperCase() + jogador.posicao.slice(1)}</div>
                                        </div>
                                        <div className="div-wrapper-14">
                                            <div className="text-wrapper-9">{jogador.num_camisa}</div>
                                        </div>
                                        <div className="div-wrapper-15">
                                            <div className="text-wrapper-9">{(times.find(t => t.id === jogador.time_id)?.nome) || jogador.time_id}</div>
                                        </div>
                                        <div className="div-wrapper-16">
                                            <div className="text-wrapper-9">{jogador.estrangeiro ? "Sim" : "Não"}</div>
                                        </div>
                                        <div className="div-wrapper-17">
                                            <div className="text-wrapper-9">R$ {(jogador.valor_mercado).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
                                        </div>
                                        <div className="div-wrapper-18" style={{ cursor: "pointer" }}>
                                            <div className="text-wrapper-10" onClick={async () => {
                                                const axios = (await import('axios')).default;
                                                await axios.delete(`http://localhost:8001/jogador/deletar_jogador?id=${jogador.id}`);
                                                window.location.reload();
                                            }} style={{ color: '#d32f2f', fontWeight: 600 }}>
                                                Deletar
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-11">
                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Jogador Com Mais Gols</div>
                        </div>
                        <div className="div-8">
                            <div className="text-wrapper-12">
                                {(() => {
                                    const gols = eventos.filter(e => e.tipo === "gol");
                                    const contagem: Record<number, number> = {};
                                    gols.forEach(e => {
                                        contagem[e.jogador_id] = (contagem[e.jogador_id] || 0) + 1;
                                    });
                                    const jogadorIdMaisGols = Object.entries(contagem).sort((a, b) => b[1] - a[1])[0];
                                    if (jogadorIdMaisGols) {
                                        const jogador = jogadores.find(j => j.id === Number(jogadorIdMaisGols[0]));
                                        if (jogador) {
                                            const time = times.find(t => t.id === jogador.time_id);
                                            return `${jogador.nome} (${time ? time.nome : 'Time ' + jogador.time_id}) - 
                                            ${jogadorIdMaisGols[1]} gols`;
                                        }
                                        return `ID ${jogadorIdMaisGols[0]} (${jogadorIdMaisGols[1]})`;
                                    }
                                    return "-";
                                })()}
                            </div>
                        </div>
                    </div>

                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Total de Jogadores</div>
                        </div>
                        <div className="div-8">
                            <div className="text-wrapper-12">{jogadores.length}</div>
                        </div>
                    </div>
                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Total de estrangeiros</div>
                        </div>
                        <div className="div-8">
                            <div className="text-wrapper-12">{jogadores.filter(j => j.estrangeiro).length}</div>
                        </div>
                    </div>
                    <div className="div-13">
                        <div className="div-8">
                            <div className="text-wrapper-11">Jogador mais valioso</div>
                        </div>
                        <div className="div-wrapper-20">
                            <div className="text-wrapper-12">
                                {jogadores.length > 0 ? (() => {
                                    const valioso = jogadores.reduce((max, j) => j.valor_mercado > max.valor_mercado ? j : max, jogadores[0]);
                                    return `${valioso.nome} (R$ ${(valioso.valor_mercado).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M)`;
                                })() : "-"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
