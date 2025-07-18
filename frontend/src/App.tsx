import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFrame } from "./components/HeaderFrame";
import { TeamsFrame } from "./components/TeamsFrame";
import { NotificationsFrame } from "./components/NotificationsFrame";
import StadiumFrame from "./components/StadiumFrame";
import TemporadaFrame from "./components/TemporadaFrame";

export default function App() {
  return (
    <Router>
      <HeaderFrame />
      <Routes>
        <Route path="/" element={<TemporadaFrame />} />
        <Route path="/estadios" element={<StadiumFrame />} />
        <Route path="/times" element={<TeamsFrame />} />

        {/* Extras/auxiliares */}
        <Route path="/notificacoes" element={<NotificationsFrame />} />
      </Routes>
    </Router>
  );
}