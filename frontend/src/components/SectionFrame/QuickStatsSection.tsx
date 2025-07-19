import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

// Data for stats cards
const statsData = [
  { title: "Total de Partidas Realizadas", value: "120" },
  { title: "Média de Gols por Partidas", value: "2.5" },
  { title: "Total de Cartões", value: "5,000" },
  { title: "Time Com Mais Vitórias", value: "Time A" },
];

const QuickStatsSection = () => {
  const [totalPartidas, setTotalPartidas] = React.useState<number | null>(null);
  const [mediaGols, setMediaGols] = React.useState<string | null>(null);
  const [totalGols, setTotalGols] = React.useState<string | null>(null);
  const [timeMaisVitorias, setTimeMaisVitorias] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/partida/listar_partidas")
      .then(res => res.json())
      .then(data => {
        let partidas: any[] = Array.isArray(data) ? data : (Array.isArray(data.partidas) ? data.partidas : []);
        setTotalPartidas(partidas.length);
        // Média de gols
        if (partidas.length > 0) {
          const totalGols = partidas.reduce((acc: number, p: any) => acc + (p.gols_mandante || 0) + (p.gols_visitante || 0), 0);
          setMediaGols((totalGols / partidas.length).toFixed(2));
        } else {
          setMediaGols("-");
        }
        // Total de gols
        const totalGolsCalc = partidas.reduce((acc: number, p: any) => acc + (p.gols_mandante || 0) + (p.gols_visitante || 0), 0);
        setTotalGols(totalGolsCalc ? String(totalGolsCalc) : "-");
        // Time com mais vitórias
        const vitorias: Record<string, number> = {};
        partidas.forEach((p: any) => {
          if (p.gols_mandante > p.gols_visitante) {
            vitorias[p.time_mandante_id] = (vitorias[p.time_mandante_id] || 0) + 1;
          } else if (p.gols_visitante > p.gols_mandante) {
            vitorias[p.time_visitante_id] = (vitorias[p.time_visitante_id] || 0) + 1;
          }
        });
        let maxVitorias = 0;
        let idTimeMaisVitorias: string | null = null;
        Object.entries(vitorias).forEach(([id, v]) => {
          if (v > maxVitorias) {
            maxVitorias = v;
            idTimeMaisVitorias = id;
          }
        });
        if (idTimeMaisVitorias) {
          // Buscar nome do time
          fetch("http://localhost:8000/times/listar_times")
            .then(res => res.json())
            .then(timesData => {
              const times: any[] = Array.isArray(timesData) ? timesData : (Array.isArray(timesData.times) ? timesData.times : []);
              const time = times.find((t: any) => String(t.id) === String(idTimeMaisVitorias));
              setTimeMaisVitorias(time ? time.nome : String(idTimeMaisVitorias));
            })
            .catch(() => setTimeMaisVitorias(idTimeMaisVitorias ? String(idTimeMaisVitorias) : "-"));
        } else {
          setTimeMaisVitorias("-");
        }
      })
      .catch(() => {
        setTotalPartidas(null);
        setMediaGols(null);
        setTimeMaisVitorias(null);
      });
  }, []);

  const stats = [
    { title: "Total de Partidas Realizadas", value: totalPartidas !== null ? String(totalPartidas) : "-" },
    { title: "Média de Gols por Partidas", value: mediaGols !== null ? mediaGols : "-" },
    { title: "Total de Gols", value: totalGols !== null ? totalGols : "-" },
    { title: "Time Com Mais Vitórias", value: timeMaisVitorias !== null ? timeMaisVitorias : "-" },
  ];

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "136px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                border: "1px solid #dbdde5",
                borderRadius: "12px",
                minWidth: "158px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Manrope-Medium', Helvetica",
                  fontWeight: 500,
                  color: "#111116",
                  lineHeight: "24px",
                }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Manrope-Bold', Helvetica",
                  fontWeight: 700,
                  color: "#111116",
                  fontSize: "24px",
                  lineHeight: "30px",
                  mt: 0,
                }}
              >
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickStatsSection;
