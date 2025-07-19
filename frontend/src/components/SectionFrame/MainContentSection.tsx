import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Chip, Stack, Typography } from "@mui/material";
import axios from "axios";
// Filtros globais compartilhados
import { useMatchFilters } from "./MatchFiltersContext";

// Define filter options as data to map over
const filterOptions = [
  { label: "Temporada", id: "season" },
  { label: "Nome do Time", id: "team-name" },
  { label: "Data da Partida", id: "match-date" },
  { label: "Estádio", id: "stadium" },
  { label: "Ordenar", id: "sort" },
];

const MainContentSection = () => {
  const [partidas, setPartidas] = useState<any[]>([]);
  const [times, setTimes] = useState<any[]>([]);
  const [estadios, setEstadios] = useState<any[]>([]);
  const { filters, setFilters } = useMatchFilters();
  const [showSelect, setShowSelect] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8001/partida/listar_partidas").then((res) => {
      setPartidas(Array.isArray(res.data) ? res.data : []);
    });
    axios.get("http://localhost:8001/times/listar_times").then((res) => {
      setTimes(Array.isArray(res.data) ? res.data : res.data.times || []);
    });
    axios.get("http://localhost:8001/estadio/listar_estadios").then((res) => {
      setEstadios(Array.isArray(res.data) ? res.data : res.data.estadios || []);
    }).catch(() => setEstadios([]));
  }, []);

  const handleFilterClick = (filterId: string) => {
    setShowSelect(filterId);
  };

  const handleSelectChange = (filterId: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterId]: value }));
    setShowSelect(null);
  };

  // Opções para cada filtro
  const seasonOptions = Array.from(new Set(partidas.map(p => p.temporada))).filter(Boolean);
  const teamOptions = times;
  const dateOptions = Array.from(new Set(partidas.map(p => p.data))).filter(Boolean);
  const stadiumOptions = estadios;

  // Filtragem das partidas
  let filteredPartidas = partidas.filter(p => {
    let ok = true;
    if (filters.season) ok = ok && p.temporada === filters.season;
    if (filters["team-name"]) ok = ok && (p.time_mandante_id === Number(filters["team-name"]) || p.time_visitante_id === Number(filters["team-name"]));
    if (filters["match-date"]) ok = ok && p.data === filters["match-date"];
    if (filters.stadium) ok = ok && p.estadio_id === Number(filters.stadium);
    return ok;
  });
  // Ordenação
  if (filters.sort === "data-asc") filteredPartidas = [...filteredPartidas].sort((a, b) => a.data.localeCompare(b.data));
  if (filters.sort === "data-desc") filteredPartidas = [...filteredPartidas].sort((a, b) => b.data.localeCompare(a.data));
  if (filters.sort === "gols") filteredPartidas = [...filteredPartidas].sort((a, b) => (b.gols_mandante + b.gols_visitante) - (a.gols_mandante + a.gols_visitante));

  return (
    <Box sx={{ padding: "12px 16px 12px 12px", width: "100%" }}>
      <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: "12px" }}>
        {filterOptions.map((filter) => (
          <Box key={filter.id} sx={{ position: "relative" }}>
            <Chip
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{ fontFamily: "Manrope, sans-serif", fontSize: "14px", lineHeight: "21px" }}
                  >
                    {filter.label}
                  </Typography>
                  <KeyboardArrowDownIcon fontSize="small" sx={{ width: 20, height: 20 }} />
                </Stack>
              }
              onClick={() => handleFilterClick(filter.id)}
              sx={{ height: "32px", backgroundColor: "#eff2f4", borderRadius: "12px", color: "#111116", "& .MuiChip-label": { padding: "0 0 0 8px" } }}
            />
            {showSelect === filter.id && (
              <Box sx={{ position: "absolute", top: 40, left: 0, zIndex: 10, minWidth: 180, background: "#fff", boxShadow: 2, borderRadius: 2, p: 1, maxHeight: 240, overflowY: "auto" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li>
                    <button
                      style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: "#f7f7f7", cursor: "pointer", textAlign: "left" }}
                      onClick={() => handleSelectChange(filter.id, "")}
                    >Todos</button>
                  </li>
                  {filter.id === "season" && seasonOptions.map(opt => (
                    <li key={opt}>
                      <button
                        style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: filters[filter.id] === opt ? "#e0e0e0" : "#fff", cursor: "pointer", textAlign: "left" }}
                        onClick={() => handleSelectChange(filter.id, opt)}
                      >{opt}</button>
                    </li>
                  ))}
                  {filter.id === "team-name" && teamOptions.map(opt => (
                    <li key={opt.id}>
                      <button
                        style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: filters[filter.id] === String(opt.id) ? "#e0e0e0" : "#fff", cursor: "pointer", textAlign: "left" }}
                        onClick={() => handleSelectChange(filter.id, String(opt.id))}
                      >{opt.nome}</button>
                    </li>
                  ))}
                  {filter.id === "match-date" && dateOptions.map(opt => (
                    <li key={opt}>
                      <button
                        style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: filters[filter.id] === opt ? "#e0e0e0" : "#fff", cursor: "pointer", textAlign: "left" }}
                        onClick={() => handleSelectChange(filter.id, opt)}
                      >{opt}</button>
                    </li>
                  ))}
                  {filter.id === "stadium" && stadiumOptions.map(opt => (
                    <li key={opt.id}>
                      <button
                        style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: filters[filter.id] === String(opt.id) ? "#e0e0e0" : "#fff", cursor: "pointer", textAlign: "left" }}
                        onClick={() => handleSelectChange(filter.id, String(opt.id))}
                      >{opt.nome}</button>
                    </li>
                  ))}
                  {filter.id === "sort" && [
                    { label: "Data (crescente)", value: "data-asc" },
                    { label: "Data (decrescente)", value: "data-desc" },
                    { label: "Gols", value: "gols" },
                  ].map(opt => (
                    <li key={opt.value}>
                      <button
                        style={{ width: "100%", height: 32, borderRadius: 8, border: "1px solid #ccc", padding: "0 8px", background: filters[filter.id] === opt.value ? "#e0e0e0" : "#fff", cursor: "pointer", textAlign: "left" }}
                        onClick={() => handleSelectChange(filter.id, opt.value)}
                      >{opt.label}</button>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
        ))}
      </Stack>
      {/* Mostra os valores dos filtros ativos */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
          Filtros ativos:
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {Object.entries(filters).map(([key, value]) => {
            if (!value) return null;
            let displayValue = value;
            if (key === "team-name") {
              const team = times.find(t => String(t.id) === value);
              displayValue = team ? team.nome : value;
            }
            if (key === "stadium") {
              const estadio = estadios.find(e => String(e.id) === value);
              displayValue = estadio ? estadio.nome : value;
            }
            return (
              <Box key={key} sx={{ px: 2, py: 1, background: '#f2f2f2', borderRadius: 2, fontSize: 14 }}>
                <strong>{filterOptions.find(f => f.id === key)?.label || key}:</strong> {displayValue}
              </Box>
            );
          })}
          {Object.values(filters).every(v => v === "") && (
            <Typography variant="body2" color="text.secondary">Nenhum filtro aplicado</Typography>
          )}
        </Stack>
      </Box>
      {/* Removido bloco de exibição das partidas filtradas conforme solicitado */}
    </Box>
  );
};

export default MainContentSection;
