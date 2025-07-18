
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
  if (evento === "inicio" || evento === "fim") return "Outros";
  return "Outros";
}

export const NotificationsFrame: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Todos");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Lógica igual ao TemporadaFrame, mas mantendo visual original
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      // Busca dados das entidades
      const [resPartidas, resEventos, resJogadores, resTimes] = await Promise.all([
        axios.get("http://localhost:8001/partida/listar_partidas"),
        axios.get("http://localhost:8001/evento_partida/listar_evento_partidas"),
        axios.get("http://localhost:8001/jogador/listar_jogadores"),
        axios.get("http://localhost:8001/times/listar_times")
      ]);

      // Ordena partidas por data/hora decrescente
      const partidasOrdenadas = [...resPartidas.data].sort((a, b) => {
        const dateA = new Date(`${a.data}T${a.horario}`);
        const dateB = new Date(`${b.data}T${b.horario}`);
        return dateB.getTime() - dateA.getTime();
      });
      // Pega os IDs das 5 partidas mais recentes
      const partidasRecentesIds = partidasOrdenadas.slice(0, 5).map((p) => p.id);

      // Filtra eventos das partidas recentes
      let eventosRecentes = resEventos.data.filter((ev: any) =>
        partidasRecentesIds.includes(ev.partida_id)
      );
      // Se não houver eventos, pega os últimos 10 eventos do campeonato
      if (eventosRecentes.length === 0 && resEventos.data.length > 0) {
        eventosRecentes = resEventos.data.slice(-10);
      }

      // Mapas para busca rápida
      const partidasMap = Object.fromEntries(
        resPartidas.data.map((p: any) => [p.id, p])
      );
      const jogadoresMap = Object.fromEntries(
        resJogadores.data.map((j: any) => [j.id, j.nome])
      );
      const timesMap = Object.fromEntries(
        resTimes.data.map((t: any) => [t.id, t.nome])
      );

      // Monta notificações (eventos das partidas recentes)
      const ntfs = eventosRecentes.reverse().map((ev: any) => {
        const partida = partidasMap[ev.partida_id];
        const jogador = jogadoresMap[ev.jogador_id] || "-";
        // Lógica para identificar o time correto do evento
        let timeNome = "-";
        if (ev.time_id && timesMap[ev.time_id]) {
          timeNome = timesMap[ev.time_id];
        } else if (partida) {
          // Se for gol ou cartão, associa ao mandante
          if (["gol", "amarelo", "vermelho", "cartao_amarelo", "cartao_vermelho"].includes(ev.tipo_evento) || ["gol", "amarelo", "vermelho", "cartao_amarelo", "cartao_vermelho"].includes(ev.tipo)) {
            timeNome = timesMap[partida.time_mandante_id] || "-";
          } else {
            timeNome = timesMap[partida.time_mandante_id] || "-";
          }
        }
        const nomePartida = partida
          ? `${timesMap[partida.time_mandante_id] || "?"} x ${
              timesMap[partida.time_visitante_id] || "?"
            }`
          : "Partida desconhecida";
        let texto = "";
        const tipoEv = ev.tipo_evento || ev.tipo;
        if (["cartao_amarelo", "amarelo"].includes(tipoEv)) {
          texto = `🟨 ${jogador} recebeu cartão amarelo aos ${ev.minuto}' (${timeNome})`;
        } else if (["cartao_vermelho", "vermelho"].includes(tipoEv)) {
          texto = `🟥 ${jogador} recebeu cartão vermelho aos ${ev.minuto}' (${timeNome})`;
        } else {
          switch (tipoEv) {
            case "gol":
              texto = `⚽ ${jogador} marcou um gol aos ${ev.minuto}' (${timeNome})`;
              break;
            case "substituicao":
              texto = `⟳ Substituição aos ${ev.minuto}': ${ev.descricao || "Sem descrição"}`;
              break;
            case "inicio":
              texto = `⏲ Início da partida ${nomePartida}`;
              break;
            case "fim":
              texto = `🏁 Fim da partida ${nomePartida}`;
              break;
            default:
              texto = `Evento: ${tipoEv} aos ${ev.minuto || "-"}' (${nomePartida})`;
          }
        }
        return {
          icon: iconMap[tipoEv] || iconMap["outros"],
          text: texto,
          ts: partida ? partida.data_hora : "",
          categoria: getCategory(tipoEv),
          partidaId: ev.partida_id,
        };
      });
      setNotifications(ntfs);
    } catch (err) {
      setNotifications([]);
    }
    setLoading(false);
  };

  const filteredNotifications =
    filter === "Todos"
      ? notifications
      : notifications.filter((n) => n.categoria === filter);

  return (
    <section className="ntf-container">
      <header className="ntf-header">
        <h1 className="ntf-title">Notificações</h1>
        <button className="ntf-refresh" onClick={fetchNotifications} disabled={loading}>
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