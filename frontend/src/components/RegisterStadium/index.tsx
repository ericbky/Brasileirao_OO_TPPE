import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const RegisterStadium = () => {
  const [form, setForm] = React.useState({
    nome: "",
    capacidade: "",
    cidade: "",
    estado: "",
    pais: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Garante que capacidade seja número ou 0
      const capacidadeNum = Number(form.capacidade) || 0;
      const res = await fetch("http://localhost:8000/estadio/criar_estadio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          capacidade: capacidadeNum,
          cidade: form.cidade,
          estado: form.estado,
          pais: form.pais,
        }),
      });
      if (!res.ok) throw new Error("Erro ao registrar estádio");
      setSuccess("Estádio registrado com sucesso!");
      setForm({ nome: "", capacidade: "", cidade: "", estado: "", pais: "" });
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "797px",
        padding: "20px 160px",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "960px",
          maxWidth: "960px",
          padding: "8px 0",
        }}
      >
        {/* Título */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            width: "100%",
            padding: "8px 16px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Manrope-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: "32px",
              lineHeight: "40px",
              color: "#111116",
            }}
          >
            Registrar Estádio
          </Typography>
        </Box>

        {/* Mensagens de sucesso/erro */}
        {success && (
          <Typography color="success.main" sx={{ mt: 2, mb: 1 }}>
            {success}
          </Typography>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 2, mb: 1 }}>
            {error}
          </Typography>
        )}

        {/* Campos do formulário */}
        <Stack spacing={0} sx={{ maxWidth: "480px" }}>
          <Box
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              maxWidth: "480px",
              gap: "16px",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: "medium",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#111116",
                  marginBottom: "8px",
                }}
              >
                Nome do Estádio
              </Typography>
              <TextField
                name="nome"
                value={form.nome}
                onChange={handleChange}
                fullWidth
                placeholder="Ex: Estádio Nacional de Brasília"
                variant="outlined"
                InputProps={{
                  sx: {
                    height: "45px",
                    width: "250px",
                    borderRadius: "16px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dbdde5",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#607089",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              maxWidth: "480px",
              gap: "16px",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: "medium",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#111116",
                  marginBottom: "8px",
                }}
              >
                Capacidade
              </Typography>
              <TextField
                name="capacidade"
                value={form.capacidade}
                onChange={handleChange}
                fullWidth
                placeholder="Ex: 70000"
                variant="outlined"
                type="number"
                InputProps={{
                  sx: {
                    height: "45px",
                    width: "250px",
                    borderRadius: "16px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dbdde5",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#607089",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              maxWidth: "480px",
              gap: "16px",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: "medium",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#111116",
                  marginBottom: "8px",
                }}
              >
                Cidade
              </Typography>
              <TextField
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                fullWidth
                placeholder="Ex: Brasília"
                variant="outlined"
                InputProps={{
                  sx: {
                    height: "45px",
                    width: "250px",
                    borderRadius: "16px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dbdde5",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#607089",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              maxWidth: "480px",
              gap: "16px",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: "medium",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#111116",
                  marginBottom: "8px",
                }}
              >
                Estado
              </Typography>
              <TextField
                name="estado"
                value={form.estado}
                onChange={handleChange}
                fullWidth
                placeholder="Ex: DF"
                variant="outlined"
                InputProps={{
                  sx: {
                    height: "45px",
                    width: "250px",
                    borderRadius: "16px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dbdde5",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#607089",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              flexWrap: "wrap",
              maxWidth: "480px",
              gap: "16px",
              padding: "12px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope-Medium, Helvetica",
                  fontWeight: "medium",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#111116",
                  marginBottom: "8px",
                }}
              >
                País
              </Typography>
              <TextField
                name="pais"
                value={form.pais}
                onChange={handleChange}
                fullWidth
                placeholder="Ex: Brasil"
                variant="outlined"
                InputProps={{
                  sx: {
                    height: "45px",
                    width: "250px",
                    borderRadius: "16px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#dbdde5",
                    },
                  },
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#607089",
                    fontFamily: "Manrope-Regular, Helvetica",
                    fontSize: "16px",
                    lineHeight: "24px",
                  },
                }}
              />
            </Box>
          </Box>
        </Stack>

        {/* Botões */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "12px 16px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "80px",
              height: "40px",
              borderRadius: "20px",
              backgroundColor: "#eff2f4",
              color: "#111116",
              fontFamily: "Manrope-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "21px",
              textTransform: "none",
            }}
            onClick={() =>
              setForm({ nome: "", capacidade: "", cidade: "", estado: "", pais: "" })
            }
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "80px",
              height: "40px",
              borderRadius: "20px",
              backgroundColor: "#1160e8",
              color: "white",
              fontFamily: "Manrope-Bold, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "21px",
              textTransform: "none",
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterStadium;