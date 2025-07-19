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
} from "@mui/material";

const GoalkeepersSection = () => {
  const [goalkeepers, setGoalkeepers] = React.useState<any[]>([]);
  const [times, setTimes] = React.useState<any[]>([]);

  React.useEffect(() => {
    import("axios").then((axios) => {
      axios.default
        .get("http://localhost:8000/jogador/listar_jogadores")
        .then((res) => {
          // Filtra apenas goleiros
          const goleiros = res.data.filter(
            (j: any) => j.posicao.toLowerCase().includes("goleiro")
          );
          setGoalkeepers(goleiros);
        });
      axios.default.get("http://localhost:8000/times/listar_times").then((res) => {
        setTimes(res.data || []);
      });
    });
  }, []);

  // Simulação: ordena por menos gols sofridos (adapte para seu backend se necessário)
  const goleirosOrdenados = [...goalkeepers]
    .sort((a, b) => (a.gols_sofridos ?? 0) - (b.gols_sofridos ?? 0))
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
              <TableCell
                sx={{
                  width: "235px",
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: 500,
                  color: "text.primary",
                  fontSize: "14px",
                }}
              >
                Classificação
              </TableCell>
              <TableCell
                sx={{
                  width: "238px",
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: 500,
                  color: "text.primary",
                  fontSize: "14px",
                }}
              >
                Jogador
              </TableCell>
              <TableCell
                sx={{
                  width: "226px",
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: 500,
                  color: "text.primary",
                  fontSize: "14px",
                }}
              >
                Time
              </TableCell>
              <TableCell
                sx={{
                  width: "227px",
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: 500,
                  color: "text.primary",
                  fontSize: "14px",
                }}
              >
                Gols Sofridos
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {goleirosOrdenados.map((goleiro, idx) => (
              <TableRow key={goleiro.id} sx={{ height: "72px" }}>
                <TableCell
                  sx={{
                    height: "72px",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontWeight: 400,
                    color: "text.secondary",
                    fontSize: "14px",
                  }}
                >
                  {`${idx + 1}º`}
                </TableCell>
                <TableCell
                  sx={{
                    height: "72px",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontWeight: 400,
                    color: "text.primary",
                    fontSize: "14px",
                  }}
                >
                  {goleiro.nome}
                </TableCell>
                <TableCell
                  sx={{
                    height: "72px",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontWeight: 400,
                    color: "text.secondary",
                    fontSize: "14px",
                  }}
                >
                  {(times.find((t) => t.id === goleiro.time_id)?.nome) ||
                    goleiro.time_id}
                </TableCell>
                <TableCell
                  sx={{
                    height: "72px",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontWeight: 400,
                    color: "text.secondary",
                    fontSize: "14px",
                  }}
                >
                  {goleiro.gols_sofridos ?? "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GoalkeepersSection;