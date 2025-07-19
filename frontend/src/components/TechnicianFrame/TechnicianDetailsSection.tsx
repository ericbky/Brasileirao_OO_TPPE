import React from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const formFields = [
  { id: "nome", label: "Nome" },
  { id: "idade", label: "Idade" },
  { id: "nacionalidade", label: "Nacionalidade" },
  { id: "dataInicio", label: "Data de Início" },
  { id: "dataFim", label: "Data de Fim" },
  { id: "timeAtual", label: "Time Atual" },
];

const timeHistory = [
  {
    id: 1,
    time: "Time A",
    dataInicio: "2023-01-01",
    dataFim: "2024-05-10",
  },
  {
    id: 2,
    time: "Time B",
    dataInicio: "2024-05-15",
    dataFim: "Atualmente",
  },
];

const TechnicianDetailsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "960px",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      {/* Título */}
      <Box sx={{ px: 2, py: 2 }}>
        <Typography variant="h1" fontWeight="bold">
          Técnico Detalhes
        </Typography>
      </Box>

      {/* Formulário */}
      {formFields.map((field) => (
        <Box key={field.id} sx={{ px: 2, py: 1 }}>
          <Stack spacing={1} sx={{ maxWidth: "480px" }}>
            <Typography variant="subtitle1">{field.label}</Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
            />
          </Stack>
        </Box>
      ))}

      {/* Botões principais */}
      <Box sx={{ display: "flex", px: 2, py: 2 }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Salvar
          </Button>
          <Button variant="contained" color="secondary">
            Cancelar
          </Button>
          <Button color="error">Deletar Técnico</Button>
        </Stack>
      </Box>

      {/* Histórico */}
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography variant="h2" fontWeight="bold">
          Time History
        </Typography>
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Data de Início</TableCell>
                <TableCell>Data de Fim</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timeHistory.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.time}</TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {row.dataInicio}
                  </TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {row.dataFim}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    >
                      Editar Período
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Botão de adicionar histórico */}
      <Box sx={{ px: 2, py: 2 }}>
        <Button variant="contained" color="secondary">
          Adicionar histórico
        </Button>
      </Box>
    </Box>
  );
};

export default TechnicianDetailsSection;