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

    React.useEffect(() => {
        import("axios").then(axios => {
            axios.default.get("http://localhost:8001/jogador/listar_jogadores").then((res) => {
                setJogadores(res.data || []);
            });
            axios.default.get("http://localhost:8001/times/listar_times").then((res) => {
                setTimes(res.data || []);
            });
        });
    }, []);

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
                                <div className="search-by-nome">
                                    Search&nbsp;&nbsp;by Nome...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-4">
                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-3">Todos</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>

                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-3">Goleiro</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>

                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-3">Defesa</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>

                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-3">Meio-campo</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>

                    <div className="div-5">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-3">Atacante</div>
                        </div>

                        <div className="div-wrapper-2">
                            <div className="img-wrapper">
                                <img className="img" alt="Vector" src={arrow} />
                            </div>
                        </div>
                    </div>
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
                                {jogadores.map((jogador) => (
                                    <div className="div-10" key={jogador.id}>
                                        <div className="div-wrapper-11">
                                            <div className="text-wrapper-8">{jogador.nome}</div>
                                        </div>
                                        <div className="div-wrapper-12">
                                            <div className="text-wrapper-9">{jogador.idade}</div>
                                        </div>
                                        <div className="div-wrapper-13">
                                            <div className="text-wrapper-9">{jogador.posicao.charAt(0).toUpperCase() + jogador.posicao.slice(1)}</div>
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
                            <div className="text-wrapper-11">Total de Jogadores</div>
                        </div>

                        <div className="div-8">
                            <div className="text-wrapper-12">127</div>
                        </div>
                    </div>

                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Total de estrangeiros</div>
                        </div>

                        <div className="div-8">
                            <div className="text-wrapper-12">12</div>
                        </div>
                    </div>

                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Total de gols marcados</div>
                        </div>

                        <div className="div-8">
                            <div className="text-wrapper-12">380</div>
                        </div>
                    </div>

                    <div className="div-12">
                        <div className="div-8">
                            <div className="text-wrapper-11">Jogador com mais gols</div>
                        </div>

                        <div className="div-wrapper-19">
                            <div className="text-wrapper-12">Lucas Silva (12)</div>
                        </div>
                    </div>

                    <div className="div-13">
                        <div className="div-8">
                            <div className="text-wrapper-11">Jogador mais valioso</div>
                        </div>

                        <div className="div-wrapper-20">
                            <div className="text-wrapper-12">Carlos Meira ($2.5M)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
