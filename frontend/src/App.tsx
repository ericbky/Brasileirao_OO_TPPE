import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFrame } from "./components/HeaderFrame";
import { TeamsFrame } from "./components/TeamsFrame";
import { TeamDetail } from "./components/TeamDetail";
import { PlayerFrame } from "./components/Players";
import { NotificationsFrame } from "./components/NotificationsFrame";
import DepthFrameScreen from "./components/SectionFrame";
import StadiumFrame from "./components/StadiumFrame";
import TemporadaFrame from "./components/TemporadaFrame";
import CreatePlayerFrame from "./components/CreatePlayerFrame";
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
          
          {/* Extras/auxiliares */}
          <Route path="/notificacoes" element={<NotificationsFrame />} />
          <Route path="/criar-jogador" element={<CreatePlayerFrame />} />
        </Routes>
      </MatchFiltersProvider>
    </Router>
  );
}