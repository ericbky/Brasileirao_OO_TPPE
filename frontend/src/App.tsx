import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFrame } from "./components/HeaderFrame";
import { TeamsFrame } from "./components/TeamsFrame";
import { TeamDetail } from "./components/TeamDetail";
import { PlayerFrame } from "./components/Players";
import { NotificationsFrame } from "./components/NotificationsFrame";
import DepthFrameScreen from "./components/SectionFrame";
import StadiumFrame from "./components/StadiumFrame";
import RegisterStadium from "./components/RegisterStadium";
import TechnicianFrame from "./components/TechnicianFrame";
import TemporadaFrame from "./components/TemporadaFrame";
import ClassifyTemporada from "./components/ClassifyTemporada";
import CreatePlayerFrame from "./components/CreatePlayerFrame";
import CreateMatchFrame from "./components/CreateMatchFrame";
import RegisterMatchEvent from "./components/RegisterMatchEvent";
import RegisterLineUpPlayer from "./components/RegisterLineUpPlayer";
import RegisterPlayerHistory from "./components/RegisterPlayerHistory";
import RegisterMatchStatistics from "./components/RegisterMatchStatistics";
import { MatchFiltersProvider } from "./components/SectionFrame/MatchFiltersContext";

export default function App() {
  return (
    <Router>
      <HeaderFrame />
      <MatchFiltersProvider>
        <Routes>
          <Route path="/" element={<TemporadaFrame />} />
          <Route path="/estadios" element={<StadiumFrame />} />
          <Route path="/times" element={<TeamsFrame />} />
          <Route path="/times/:id" element={<TeamDetail />} />
          <Route path="/jogadores" element={<PlayerFrame />} />
          <Route path="/partidas" element={<DepthFrameScreen />} />
          <Route path="/rankings" element={<ClassifyTemporada />} />

          {/* Extras/auxiliares */}
          <Route path="/notificacoes" element={<NotificationsFrame />} />
          <Route path="/registrar-estadio" element={<RegisterStadium />} />
          <Route path="/tecnicos" element={<TechnicianFrame />} />
          <Route path="/classificar-temporada" element={<ClassifyTemporada />} />
          <Route path="/criar-partida" element={<CreateMatchFrame />} />
          <Route path="/registrar-evento-partida" element={<RegisterMatchEvent />} />
          <Route path="/criar-jogador" element={<CreatePlayerFrame />} />
          <Route path="/registrar-escalacao" element={<RegisterLineUpPlayer />} />
          <Route path="/registrar-historico-jogador" element={<RegisterPlayerHistory />} />
          <Route path="/registrar-estatisticas" element={<RegisterMatchStatistics />} />
        </Routes>
      </MatchFiltersProvider>
    </Router>
  );
}