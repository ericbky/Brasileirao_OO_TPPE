import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";

interface Time {
  nome: string;
  socios: number;
  valor_equipe_titular: number;
  valor_medio_equipe_titular: number;
  id: number;
}

interface TimeTemporada {
  data_inicio: string;
  data_final: string;
  temporada: string;
  time_id: number;
  id: number;
}

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
}

export const TeamDetail = () => {
    const { id } = useParams();
    const [time, setTime] = React.useState<Time | null>(null);
    const [jogadores, setJogadores] = React.useState<Jogador[]>([]);
    const [temporadaAtual, setTemporadaAtual] = React.useState<string | null>(null);
    const [tecnico, setTecnico] = React.useState<any | null>(null);

    React.useEffect(() => {
        import("axios").then(axios => {
            axios.default.get("http://localhost:8000/times/listar_times").then((res) => {
                const nomeParam = id?.replace(/-/g, " ").toLowerCase();
                const found = res.data.find((t: Time) => t.nome.toLowerCase() === nomeParam);
                setTime(found || null);
                if (found) {
                    axios.default.get(`http://localhost:8000/jogador/listar_jogadores?time_id=${found.id}`).then((resJog) => {
                        setJogadores(resJog.data || []);
                    });
                    axios.default.get(`http://localhost:8000/time_temporada/listar_times_temporada?time_id=${found.id}`).then((resTemp) => {
                        if (Array.isArray(resTemp.data) && resTemp.data.length > 0) {
                            setTemporadaAtual(resTemp.data[resTemp.data.length - 1].temporada);
                        } else {
                            setTemporadaAtual(null);
                        }
                    });
                    axios.default.get("http://localhost:8000/tecnico/tecnico/listar_tecnicos").then((resTec) => {
                        // Seleciona o técnico cujo time_id corresponde ao id do time presente em TeamDetail
                        const historicoDoTime: any[] = [];
                        let tecnicoDoTime: any | null = null;
                        axios.default.get("http://localhost:8000/historico_tecnico/listar_historico_tecnicos").then((resHist) => {
                            // Filtra histórico do time
                            const historicoFiltrado = resHist.data.filter((hist: any) => hist.time_id === found.id);
                            historicoDoTime.push(...historicoFiltrado);
                            // Busca o nome do técnico pelo tecnico_id do histórico
                            const tecnicoId = historicoFiltrado.length > 0 ? historicoFiltrado[0].tecnico_id : null;
                            if (tecnicoId) {
                                const tecnicoObj = resTec.data.find((tec: any) => tec.id === tecnicoId);
                                tecnicoDoTime = tecnicoObj ? { ...tecnicoObj, historico: historicoFiltrado } : null;
                            }
                            setTecnico(tecnicoDoTime);
                        });
                    });
                } else {
                    setJogadores([]);
                    setTemporadaAtual(null);
                    setTecnico(null);
                }
            });
        });
    }, [id]);

    return (
        <div className="team-detail">
            <div className="div">
                <div className="team-detail-header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '24px 0' }}>
                    <div className="team-name" style={{ fontSize: 32, fontWeight: 700, letterSpacing: 1, minWidth: 320 }}>
                        {time ? time.nome.toUpperCase() : id?.replace("-", " ").toUpperCase()}
                    </div>
                </div>

                <div className="div-2">
                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">{time ? Number(time.socios).toLocaleString('pt-BR') : "-"}</div>
                        </div>
                        <div className="team-detail-wrapper-2">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Membros</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">{time ? `R$ ${Number(time.valor_equipe_titular).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} milhões` : "-"}</div>
                        </div>
                        <div className="team-detail-wrapper-3">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Valor Total</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-3">
                        <div className="div-wrapper-2">
                            <div className="text-wrapper-2">{time ? `R$ ${Number(time.valor_medio_equipe_titular).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} milhões` : "-"}</div>
                        </div>
                        <div className="team-detail-wrapper-3">
                            <div className="div-wrapper-3">
                                <div className="text-wrapper-3">Valor Médio</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper-4">
                    <div className="text-wrapper-4">Técnico</div>
                </div>

                <div className="div-4">
                    <div className="div-5" />
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-5">{tecnico ? tecnico.nome : "-"}</div>
                    </div>
                </div>

                <div className="div-6">
                    <div className="div-7">
                        {/* Data de Fundação removida conforme solicitado */}
                        <div className="div-9">
                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-6">
                                    <div className="text-wrapper-3">Número de Membros</div>
                                </div>
                            </div>
                            <div className="team-detail-wrapper-4">
                                <div className="div-wrapper-6">
                                    <div className="text-wrapper-6">{time ? Number(time.socios).toLocaleString('pt-BR') : "-"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-7">
                        <div className="div-10">
                            <div className="team-detail-wrapper-5">
                                <div className="div-wrapper-7">
                                    <div className="text-wrapper-3">Temporada Atual</div>
                                </div>
                            </div>
                            <div className="team-detail-wrapper-6">
                                <div className="div-wrapper-7">
                                    <p className="text-wrapper-6">
                                        {temporadaAtual ? `Participando da temporada de ${temporadaAtual}` : "-"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-7">
                    <div className="team-detail-wrapper-8">
                        <div className="div-wrapper-8">
                            <Link
                                to="/tecnicos"
                                className="text-wrapper-7"
                                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                            >
                                Visualizar o Histórico Técnico
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="div-wrapper-4">
                    <div className="text-wrapper-4">Jogadores</div>
                </div>

                <div style={{ maxHeight: 220, overflowY: "auto", overflowX: "hidden", marginBottom: 16, width: "100%", maxWidth: "100%" }}>
                    {jogadores.length === 0 && (
                        <div className="div-11">
                            <div className="div-12" />
                            <div className="div-13">
                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-8">Nenhum jogador cadastrado</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, width: "100%" }}>
                        {jogadores
                            .filter(jogador => time && jogador.time_id === time.id)
                            .map((jogador, idx) => (
                            <div className="div-11" key={jogador.nome + idx} style={{ minWidth: 0 }}>
                                <div className="div-13">
                                    <div className="div-wrapper-2">
                                        <div className="text-wrapper-8">{jogador.nome}</div>
                                    </div>
                                    <div className="text-wrapper-3" style={{ fontSize: 13, color: '#555' }}>{jogador.posicao.charAt(0).toUpperCase() + jogador.posicao.slice(1)} · Camisa: {jogador.num_camisa}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-detail-wrapper-7">
                    <div className="team-detail-wrapper-8">
                        <div className="div-wrapper-8">
                            <Link
                                to="/jogadores"
                                className="text-wrapper-9"
                                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                            >
                                Visualizar Jogadores
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="team-detail-wrapper-9">
                    <div className="div-16">
                        <div className="team-detail-wrapper-8">
                            <div className="div-wrapper-8">
                                <button
                                    className="text-wrapper-7"
                                    style={{ background: '#e53935', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}
                                    onClick={async () => {
                                        if (time) {
                                            const axios = (await import('axios')).default;
                                            await axios.delete(`http://localhost:8000/times/deletar_time?id=${time.id}`);
                                            window.location.href = '/times';
                                        }
                                    }}
                                >
                                    Deletar Time
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};