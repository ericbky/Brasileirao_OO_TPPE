import React from "react";
import {
  ChevronDown,
  Clock,
  Flag,
  Goal,
  RefreshCcw,
  Repeat,
  Square,
} from "lucide-react";

import "./style.css";

/* ------------------------------------------------------------------ */
/*  DADOS FAKE – troque por dados vindos do backend quando quiser     */
/* ------------------------------------------------------------------ */

const filterCategories = ["Todos", "Goals", "Cards", "Substitutions", "Others"];

const notifications = [
  {
    icon: <Goal size={20} />,
    text: "⚽ Ethan Carter marcou um gol aos 37' do 2º tempo para o Time Azul.",
    ts: "06/12/2025 — 18:43",
  },
  {
    icon: <Square size={18} />,
    text: "🛑 Liam Harper recebeu cartão vermelho aos 15' do 1º tempo.",
    ts: "06/12/2025 — 18:43",
  },
  {
    icon: <Repeat size={18} />,
    text: "⟳ Noah Bennett foi substituído por Owen aos 62' (Time Verde).",
    ts: "06/12/2025 — 18:43",
  },
  {
    icon: <Clock size={18} />,
    text: "⏲ A partida entre Time A e Time B começou!",
    ts: "06/12/2025 — 18:43",
  },
  {
    icon: <Flag size={18} />,
    text: "🏁 Vitória do Time B por 2×1 sobre o Time A.",
    ts: "06/12/2025 — 18:43",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTE                                                        */
/* ------------------------------------------------------------------ */

// ⬇️  aqui já exportamos o componente por nome
export const NotificationsFrame: React.FC = () => {
  return (
    <section className="ntf-container">
      {/* Cabeçalho */}
      <header className="ntf-header">
        <h1 className="ntf-title">Notifications</h1>

        <button className="ntf-refresh">
          <RefreshCcw size={16} /> <span>Refresh</span>
        </button>
      </header>

      {/* Filtros */}
      <div className="ntf-filters">
        {filterCategories.map((cat) => (
          <button key={cat} className="ntf-filter-badge">
            <span>{cat}</span>
            <ChevronDown size={14} />
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="ntf-list">
        {notifications.map(({ icon, text, ts }, idx) => (
          <article key={idx} className="ntf-card">
            <div className="ntf-card-left">
              <span className="ntf-icon">{icon}</span>
              <div className="ntf-texts">
                <p className="ntf-text">{text}</p>
                <p className="ntf-ts">{ts}</p>
              </div>
            </div>

            <button className="ntf-link">Ver partida</button>
          </article>
        ))}
      </div>
    </section>
  );
};