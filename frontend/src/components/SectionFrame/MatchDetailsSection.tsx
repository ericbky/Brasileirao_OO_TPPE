import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import matchImage from "./image.png";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useMatchFilters } from "./MatchFiltersContext";

const MatchDetailsSection = () => {
  // Estados para dados
  const [partidas, setPartidas] = useState<any[]>([]);
  const [times, setTimes] = useState<any[]>([]);
  const [estadios, setEstadios] = useState<any[]>([]);
  // Usa filtros globais do contexto
  const { filters } = useMatchFilters();

  useEffect(() => {
    axios.get("http://localhost:8000/partida/listar_partidas").then((res) => {
      setPartidas(Array.isArray(res.data) ? res.data : []);
    });
    axios.get("http://localhost:8000/times/listar_times").then((res) => {
      setTimes(Array.isArray(res.data) ? res.data : res.data.times || []);
    });
    axios
      .get("http://localhost:8000/estadio/listar_estadios")
      .then((res) => {
        setEstadios(Array.isArray(res.data) ? res.data : res.data.estadios || []);
      })
      .catch(() => setEstadios([]));
  }, []);

  // Filtragem das partidas
  let filteredPartidas = partidas.filter((p) => {
    let ok = true;
    if (filters.season) ok = ok && p.temporada === filters.season;
    if (filters["team-name"])
      ok =
        ok &&
        (p.time_mandante_id === Number(filters["team-name"]) ||
          p.time_visitante_id === Number(filters["team-name"]));
    if (filters["match-date"]) ok = ok && p.data === filters["match-date"];
    if (filters.stadium) ok = ok && p.estadio_id === Number(filters.stadium);
    return ok;
  });
  // Ordenação
  if (filters.sort === "data-asc")
    filteredPartidas = [...filteredPartidas].sort((a, b) =>
      a.data.localeCompare(b.data)
    );
  if (filters.sort === "data-desc")
    filteredPartidas = [...filteredPartidas].sort((a, b) =>
      b.data.localeCompare(a.data)
    );
  if (filters.sort === "gols")
    filteredPartidas = [...filteredPartidas].sort(
      (a, b) =>
        b.gols_mandante + b.gols_visitante - (a.gols_mandante + a.gols_visitante)
    );

  // Se não houver filtros ativos, mostra todas as partidas
  const showAll = Object.values(filters).every((v) => v === "");
  const partidasParaExibir = showAll ? partidas : filteredPartidas;

  return (
    <Box sx={{ p: 4, width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box sx={{ maxHeight: 520, overflowY: 'auto', pr: 1, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            {partidasParaExibir.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Nenhuma partida encontrada.
              </Typography>
            ) : (
              <Stack spacing={2}>
                {partidasParaExibir.map((partida, idx) => {
                  const mandante = times.find((t) => t.id === partida?.time_mandante_id);
                  const visitante = times.find((t) => t.id === partida?.time_visitante_id);
                  const estadio = estadios.find((e) => e.id === partida?.estadio_id);
                  const tecnicoMandante = partida.tecnico_mandante_nome || mandante?.tecnico || mandante?.nome_tecnico || partida.tecnico_mandante_id;
                  const tecnicoVisitante = partida.tecnico_visitante_nome || visitante?.tecnico || visitante?.nome_tecnico || partida.tecnico_visitante_id;
                  const nomeMandante = mandante?.nome || "Mandante";
                  const nomeVisitante = visitante?.nome || "Visitante";
                  return (
                    <Box key={partida.id || idx} sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'flex-start', background: '#fff', borderRadius: 2, boxShadow: 1, p: 2 }}>
                      {mandante?.imagem && (
                        <Box
                          component="img"
                          src={mandante.imagem}
                          alt={nomeMandante}
                          sx={{ width: 64, height: 64, borderRadius: 2, objectFit: "cover", boxShadow: 1, mr: 2 }}
                        />
                      )}
                      <Stack spacing={1} flex={1}>
                        <Typography variant="body2" color="text.secondary">
                          {`📅 ${partida.data}, ${partida.horario}`}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          color="text.primary"
                        >
                          {estadio ? estadio.nome : "Estádio não disponível"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`🏟 ${partida.fase} • Placar: ${nomeMandante} ${partida.gols_mandante} x ${partida.gols_visitante} ${nomeVisitante} • Público: ${partida.publico || "N/D"}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`Técnicos: ${tecnicoMandante} (Casa), ${tecnicoVisitante} (Visitante)`}
                        </Typography>
                      </Stack>
                        <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          bottom: 8,
                          left: 8,
                          zIndex: 2,
                        }}
                      >
                        <Box
                          component="img"
                          src={matchImage}
                          alt="Foto 1"
                          sx={{
                            width: "320px",
                            height: "171px",
                            borderRadius: 3,
                            objectFit: "cover",
                            boxShadow: 1,
                          }}
                        />
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              height: 171,
              width: "100%",
              borderRadius: 2,
              backgroundImage: "url(/depth-6-frame-1-4.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              px: 2,
              py: 1,
            }}
          >
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MatchDetailsSection;