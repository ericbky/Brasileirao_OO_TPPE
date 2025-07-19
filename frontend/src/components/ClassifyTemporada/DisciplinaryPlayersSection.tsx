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

const DisciplinaryPlayersSection = () => {
  const [players, setPlayers] = React.useState<any[]>([]);
  const [times, setTimes] = React.useState<any[]>([]);

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
    });
  }, []);

  // Ordena por mais assistências (adapte para seu backend se necessário)
  const jogadoresOrdenados = [...players]
    .sort((a, b) => (b.assistencias ?? 0) - (a.assistencias ?? 0))
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
                <Typography variant="subtitle1" color="primary">
                  Classificação
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "240px" }}>
                <Typography variant="subtitle1" color="primary">
                  Jogador
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "223px" }}>
                <Typography variant="subtitle1" color="primary">
                  Time
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "230px" }}>
                <Typography variant="subtitle1" color="primary">
                  Assistências
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jogadoresOrdenados.map((jogador, idx) => (
              <TableRow key={jogador.id}>
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
                    {(times.find((t) => t.id === jogador.time_id)?.nome) ||
                      jogador.time_id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="text.secondary">
                    {jogador.assistencias ?? "-"}
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

export default DisciplinaryPlayersSection;