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

const StandingsSection = () => {
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

  // Ordena por número de defesas (adapte para seu backend se necessário)
  const jogadoresOrdenados = [...players]
    .sort((a, b) => (b.defesas ?? 0) - (a.defesas ?? 0))
    .slice(0, 5);

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
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
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  fontSize="14px"
                  color="text.primary"
                >
                  Classificação
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "240px" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  fontSize="14px"
                  color="text.primary"
                >
                  Jogador
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "223px" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  fontSize="14px"
                  color="text.primary"
                >
                  Time
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "230px" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  fontSize="14px"
                  color="text.primary"
                >
                  Defesas
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jogadoresOrdenados.map((jogador, idx) => (
              <TableRow key={jogador.id} sx={{ height: "72px" }}>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    fontSize="14px"
                    color="text.secondary"
                  >
                    {`${idx + 1}º`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    fontSize="14px"
                    color="text.primary"
                  >
                    {jogador.nome}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    fontSize="14px"
                    color="text.secondary"
                  >
                    {(times.find((t) => t.id === jogador.time_id)?.nome) ||
                      jogador.time_id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    fontSize="14px"
                    color="text.secondary"
                  >
                    {jogador.defesas !== undefined && jogador.defesas !== null
                      ? jogador.defesas
                      : "-"}
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

export default StandingsSection;