import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const SeasonRankingsSection = () => {
  const [players, setPlayers] = React.useState<any[]>([]);
  const [times, setTimes] = React.useState<any[]>([]);
  const [eventos, setEventos] = React.useState<any[]>([]);

  React.useEffect(() => {
    import("axios").then((axios) => {
      axios.default
        .get("http://localhost:8000/jogador/listar_jogadores")
        .then((res) => {
          setPlayers(res.data || []);
        });
      axios.default.get("http://localhost:8000/times/listar_times").then((res) => {
        setTimes(res.data || []);
      });
      axios.default
        .get("http://localhost:8000/evento_partida/listar_evento_partidas")
        .then((res) => {
          setEventos(res.data || []);
        });
    });
  }, []);

  // Contabiliza cartões por jogador
  const cartoesPorJogador: Record<number, number> = {};
  eventos.forEach((e: any) => {
    if (e.tipo === "cartao_amarelo" || e.tipo === "cartao_vermelho") {
      cartoesPorJogador[e.jogador_id] = (cartoesPorJogador[e.jogador_id] || 0) + 1;
    }
  });

  // Ordena jogadores por número de cartões
  const jogadoresComCartoes = players
    .map((j) => ({ ...j, cartoes: cartoesPorJogador[j.id] || 0 }))
    .filter((j) => j.cartoes > 0)
    .sort((a, b) => b.cartoes - a.cartoes)
    .slice(0, 5);

  return (
    <Box sx={{ padding: "12px 16px" }}>
      <TableContainer
        component={Paper}
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "233px" }}>
                <Typography variant="subtitle1" color="text.primary">
                  Classificação
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "240px" }}>
                <Typography variant="subtitle1" color="text.primary">
                  Jogador
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "223px" }}>
                <Typography variant="subtitle1" color="text.primary">
                  Time
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "230px" }}>
                <Typography variant="subtitle1" color="text.primary">
                  Cartões
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jogadoresComCartoes.map((jogador, idx) => (
              <TableRow key={jogador.id} sx={{ height: "72px" }}>
                <TableCell>
                  <Typography variant="body1" color="text.secondary">
                    {`${idx + 1}º`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.primary">
                    {jogador.nome}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.secondary">
                    {(times.find((t) => t.id === jogador.time_id)?.nome) || jogador.time_id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.secondary">
                    {jogador.cartoes}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SeasonRankingsSection;