import React, { useEffect, useState } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import axios from "axios";

interface Estadio {
  id: number;
  nome: string;
  capacidade: number;
  partidas_realizadas?: number;
}

const QuickStatsSection = () => {
  const [stats, setStats] = useState({
    maiorCapacidade: { nome: "-", capacidade: 0 },
    maisPartidas: { nome: "-", partidas: 0 },
    ocupacaoMedia: 0,
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/estadio/listar_estadios"),
      axios.get("http://localhost:8001/partida/listar_partidas"),
    ]).then(([estadioRes, partidaRes]) => {
      const estadios: Estadio[] = estadioRes.data;
      const partidas: any[] = partidaRes.data;
      if (!estadios || estadios.length === 0) return;

      // Estádio com maior capacidade
      const maiorCapacidade = estadios.reduce((max: Estadio, est: Estadio) =>
        est.capacidade > max.capacidade ? est : max
      );

      // Agrupa partidas por estadio_id
      const grouped: { [key: string]: any[] } = {};
      partidas.forEach((match: any) => {
        const estId = match.estadio_id;
        if (!grouped[estId]) grouped[estId] = [];
        grouped[estId].push(match);
      });

      // Encontra o estádio com mais partidas realizadas
      let maisPartidas = { nome: "-", partidas: 0 };
      estadios.forEach((estadio) => {
        const numPartidas = grouped[estadio.id]?.length || 0;
        if (numPartidas > maisPartidas.partidas) {
          maisPartidas = { nome: estadio.nome, partidas: numPartidas };
        }
      });

      // Ocupação média por estádio
      const totalOcupacao = estadios.reduce((sum: number, est: Estadio) => sum + (est.capacidade || 0), 0);
      const ocupacaoMedia = Math.round(totalOcupacao / estadios.length);

      setStats({
        maiorCapacidade: { nome: maiorCapacidade.nome, capacidade: maiorCapacidade.capacidade },
        maisPartidas,
        ocupacaoMedia,
      });
    });
  }, []);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      sx={{ p: 2, width: "100%", alignItems: "flex-start" }}
    >
      <Card
        sx={{
          p: 3,
          flex: 1,
          minWidth: 158,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle1" color="text.primary">
            Estádio com Maior Capacidade
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color="text.primary">
            {stats.maiorCapacidade.nome} ({stats.maiorCapacidade.capacidade.toLocaleString()})
          </Typography>
        </Box>
      </Card>
      <Card
        sx={{
          p: 3,
          flex: 1,
          minWidth: 158,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle1" color="text.primary">
            Estádio com mais partidas realizadas
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color="text.primary">
            {stats.maisPartidas.nome} ({stats.maisPartidas.partidas})
          </Typography>
        </Box>
      </Card>
      <Card
        sx={{
          p: 3,
          flex: 1,
          minWidth: 158,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="subtitle1" color="text.primary">
            Ocupação Média por Estádio
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color="text.primary">
            {stats.ocupacaoMedia.toLocaleString()}
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
};

export default QuickStatsSection;