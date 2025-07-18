
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface Time {
  nome: string;
  socios: number;
  valor_equipe_titular: number;
  valor_medio_equipe_titular: number;
  id: number;
}

export const TeamsFrame = () => {
    const navigate = useNavigate();

    const [times, setTimes] = React.useState<Time[]>([]);
    const [filtroNome, setFiltroNome] = React.useState("");
    const [filtroSocios, setFiltroSocios] = React.useState(0);
    const [filtroValorMedio, setFiltroValorMedio] = React.useState(0);

    React.useEffect(() => {
        import("axios").then(axios => {
            axios.default.get("http://localhost:8001/times/listar_times").then((res) => {
                setTimes(res.data);
            });
        });
    }, []);

    return (
        <div className="teams-frame">
            <div className="teams-main">
                <div className="teams-header">
                    <div className="teams-title-wrapper">
                        <div className="teams-title">Times</div>
                    </div>

                    <div className="teams-create-wrapper">
                        <div className="teams-create-button">
                            <div className="teams-create-text">Criar Time</div>
                        </div>
                    </div>
                </div>

                <div className="teams-filters" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end", marginBottom: 16 }}>
                    <div className="teams-filter" style={{ flex: 1, minWidth: 220 }}>
                        <label className="teams-filter-label" htmlFor="filtro-nome" style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>Nome do Time</label>
                        <input
                            id="filtro-nome"
                            className="teams-filter-input"
                            type="text"
                            placeholder="Digite o nome do time"
                            style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                            value={filtroNome}
                            onChange={e => setFiltroNome(e.target.value)}
                        />
                    </div>
                    <div className="teams-filter" style={{ flex: 1, minWidth: 180 }}>
                        <label className="teams-filter-label" htmlFor="filtro-socios" style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>Número mínimo de membros</label>
                        <input
                            id="filtro-socios"
                            className="teams-filter-input"
                            type="number"
                            min={0}
                            placeholder="Digite o número mínimo de membros"
                            style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                            value={filtroSocios === 0 ? "" : filtroSocios}
                            onChange={e => setFiltroSocios(Number(e.target.value))}
                        />
                    </div>
                    <div className="teams-filter" style={{ flex: 1, minWidth: 220 }}>
                        <label className="teams-filter-label" htmlFor="filtro-valor-medio" style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>Escalação inicial mínima do Médio Valor</label>
                        <input
                            id="filtro-valor-medio"
                            className="teams-filter-input"
                            type="number"
                            min={0}
                            step={0.01}
                            placeholder="Digite o valor mínimo do médio valor"
                            style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                            value={filtroValorMedio === 0 ? "" : filtroValorMedio}
                            onChange={e => setFiltroValorMedio(Number(e.target.value))}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <button
                            className="teams-create-button"
                            style={{ padding: "10px 18px", borderRadius: 8, background: "#eee", color: "#1976d2", fontWeight: "bold", fontSize: 16, border: "none", cursor: "pointer" }}
                            onClick={() => { setFiltroNome(""); setFiltroSocios(0); setFiltroValorMedio(0); }}
                        >
                            Limpar Filtros
                        </button>
                    </div>
                </div>

                <div className="teams-section-title-wrapper">
                    <div className="teams-section-title">Times Registrados</div>
                </div>

                <div className="teams-list-wrapper">
                    <div className="teams-list" style={{ maxHeight: 420, overflowY: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {times
                            .filter(time =>
                                (!filtroNome || time.nome.toLowerCase().includes(filtroNome.toLowerCase())) &&
                                (filtroSocios === 0 || time.socios >= filtroSocios) &&
                                (filtroValorMedio === 0 || time.valor_medio_equipe_titular >= filtroValorMedio)
                            )
                            .map((time, idx) => {
                                // Formatação dos valores para milhões por ano
                                const valorEquipeMilhoes = Number(time.valor_equipe_titular).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                const valorMedioMilhoes = Number(time.valor_medio_equipe_titular).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                // Padronizar: -b, -c, -d, reinicia a cada linha
                                const cardSuffix = ["-b", "-c", "-d"];
                                const suffix = cardSuffix[idx % 3];
                                return (
                                    <div className={`teams-card${suffix}`} key={time.id} onClick={() => navigate(`/times/${time.nome.toLowerCase().replace(/ /g, "-")}`)} style={{ cursor: "pointer" }}>
                                        <div className={`teams-card-image${suffix}`} />
                                        <div className="teams-card-info">
                                            <div className="teams-card-info">
                                                <div className="teams-filter-label">{time.nome}</div>
                                            </div>
                                            <div className="teams-card-info">
                                                <div className="teams-card-subinfo">{Number(time.socios).toLocaleString('pt-BR')} Membros</div>
                                            </div>
                                            <div className="teams-card-info">
                                                <p className="teams-card-subinfo">Valor total do Time: R$ {valorEquipeMilhoes} milhões/ano · Médio. Valor do Jogador: R$ {valorMedioMilhoes} milhões/ano</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};