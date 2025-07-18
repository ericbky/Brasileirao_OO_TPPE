import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Clock,
  Flag,
  Goal,
  RefreshCcw,
  Repeat,
  Square,
} from "lucide-react";
import axios from "axios";
import "./style.css";

const filterCategories = [
  "Todos",
  "Gols",
  "Cartões",
  "Substituições",
  "Outros",
];

const iconMap: Record<string, React.ReactNode> = {
  gol: <Goal size={20} />,
  amarelo: <Square size={18} style={{ color: "#FFD600" }} />,
  vermelho: <Square size={18} style={{ color: "#D32F2F" }} />,
  substituicao: <Repeat size={18} />,
  falta: <Flag size={18} style={{ color: "#FF9800" }} />,
  inicio: <Clock size={18} />,
  fim: <Flag size={18} />,
  outros: <Clock size={18} />,
};

function getCategory(evento: string) {
  if (evento === "gol") return "Gols";
  if (
    evento === "amarelo" ||
    evento === "vermelho" ||
    evento === "cartao_amarelo" ||
    evento === "cartao_vermelho"
  ) return "Cartões";
  if (evento === "substituicao") return "Substituições";
  if (evento === "falta") return "Outros";
  if (evento === "inicio" || evento === "fim") return "Outros";
  return "Outros";
}

export const NotificationsFrame: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Todos");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get("http://localhost:8001/partida/listar_partidas"),
      axios.get("http://localhost:8001/evento_partida/listar_evento_partidas"),
      axios.get("http://localhost:8001/jogador/listar_jogadores"),
      axios.get("http://localhost:8001/times/listar_times")
    ])
      .then(([resPartidas, resEventos, resJogadores, resTimes]) => {

        const ultimasPartidas = [...resPartidas.data]
          .sort((a: any, b: any) => {
            const dateA = new Date(`${a.data}T${a.horario}`);
            const dateB = new Date(`${b.data}T${b.horario}`);
            return dateB.getTime() - dateA.getTime();
          }); // Removida a limitação de 3 partidas

        const eventosUltimas = resEventos.data.filter((ev: any) => ultimasPartidas.some((p: any) => p.id === ev.partida_id));

        const eventosOrdenados = ultimasPartidas.flatMap((partida: any) =>
          eventosUltimas
            .filter((ev: any) => ev.partida_id === partida.id)
            .sort((a: any, b: any) => b.minuto - a.minuto)
        ); // Ordena os eventos pela ordem das partidas e mantém todos os eventos

        const eventosExibir = eventosOrdenados; // Removido filtro para exibir todos os eventos

        const ntfs = eventosExibir.map((ev: any) => {
          const jogadorObj = resJogadores.data.find((j: any) => j.id === ev.jogador_id);
          const jogador = jogadorObj?.nome || "-";
          const partida = ultimasPartidas.find((p: any) => p.id === ev.partida_id);
          let timeId: number | null = null;
          let nomePartida = "-";
          if (ev.time_id && resTimes.data.find((t: any) => t.id === ev.time_id)) {
            timeId = ev.time_id;
          } else if (partida && jogadorObj) {
            if (jogadorObj.time_id === partida.time_mandante_id) {
              timeId = partida.time_mandante_id;
            } else if (jogadorObj.time_id === partida.time_visitante_id) {
              timeId = partida.time_visitante_id;
            } else {
              timeId = partida.time_mandante_id;
            }
          } else if (partida) {
            timeId = partida.time_mandante_id;
          }
          if (partida) {
            const nomeMandante = resTimes.data.find((t: any) => t.id === partida.time_mandante_id)?.nome || "-";
            const nomeVisitante = resTimes.data.find((t: any) => t.id === partida.time_visitante_id)?.nome || "-";
            nomePartida = `${nomeMandante} x ${nomeVisitante}`;
          }
          const timeNome = timeId !== null ? (resTimes.data.find((t: any) => t.id === timeId)?.nome || "-") : "-";
          let texto = "";
          const tipoEv = ev.tipo_evento || ev.tipo; // Adicionado fallback para ev.tipo_evento
          if (["cartao_amarelo", "amarelo"].includes(tipoEv)) {
            texto = `🟨 ${jogador} recebeu cartão amarelo aos ${ev.minuto}' (${timeNome})`;
          } else if (["cartao_vermelho", "vermelho"].includes(tipoEv)) {
            texto = `🟥 ${jogador} recebeu cartão vermelho aos ${ev.minuto}' (${timeNome})`;
          } else if (tipoEv === "gol") {
            texto = `⚽ ${jogador} marcou um gol aos ${ev.minuto}' (${timeNome})`;
          } else if (tipoEv === "substituicao") {
            texto = `⟳ ${jogador} foi substituído aos ${ev.minuto}' (${timeNome})${ev.descricao ? ` - ${ev.descricao}` : ""}`;
          } else {
            texto = `🚩 Evento: ${tipoEv} aos ${ev.minuto || "-"}' (${timeNome})${ev.descricao ? ` - ${ev.descricao}` : ""}`;
          }
          return {
            icon: iconMap[tipoEv] || iconMap["outros"],
            text: texto,
            ts: partida ? partida.data_hora : "",
            categoria: ["gol", "cartao_amarelo", "cartao_vermelho", "substituicao"].includes(tipoEv) ? getCategory(tipoEv) : "Outros",
            partidaId: partida ? partida.id : null,
          };
        });
        setNotifications(ntfs);
        setLoading(false);
      })
      .catch(() => {
        setNotifications([]);
        setLoading(false);
      });
  }, []);

  const filteredNotifications =
    filter === "Todos"
      ? notifications
      : notifications.filter((n) => n.categoria === filter);

  return (
    <section className="ntf-container">
      <header className="ntf-header">
        <h1 className="ntf-title">Notificações</h1>
        <button className="ntf-refresh" onClick={() => window.location.reload()} disabled={loading}>
          <RefreshCcw size={16} /> <span>Atualizar</span>
        </button>
      </header>
      <div className="ntf-filters">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`ntf-filter-badge${filter === cat ? " ntf-active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            <span>{cat}</span>
            <ChevronDown size={14} />
          </button>
        ))}
      </div>
      <div className="ntf-list">
        {loading ? (
          <div className="ntf-loading">Carregando...</div>
        ) : filteredNotifications.length === 0 ? (
          <div className="ntf-empty">Nenhuma notificação encontrada.</div>
        ) : (
          filteredNotifications.map(({ icon, text, ts, partidaId }, idx) => (
            <article key={idx} className="ntf-card">
              <div className="ntf-card-left">
                <span className="ntf-icon">{icon}</span>
                <div className="ntf-texts">
                  <p className="ntf-text">{text}</p>
                  <p className="ntf-ts">{ts}</p>
                </div>
              </div>
              <a
                className="ntf-link"
                href={partidaId ? `/partida/${partidaId}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver partida
              </a>
            </article>
          ))
        )}
      </div>
    </section>
  );
};