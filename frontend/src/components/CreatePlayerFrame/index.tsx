import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  age: string;
  height: string;
  position: string;
  jerseyNumber: string;
  mainTeam: boolean;
  juniorTeam: boolean;
  foreigner: boolean;
  marketValue: string;
  team: string;
}

const formFields = [
  { id: "nome", label: "Nome", placeholder: "Digite o nome do jogador" },
  { id: "idade", label: "Idade", placeholder: "Digite a idade" },
  { id: "altura", label: "Altura (em metros)", placeholder: "Digite a altura em metros" },
  { id: "num_camisa", label: "Número da camisa", placeholder: "Digite o número da camisa" },
  { id: "valor_mercado", label: "Valor de mercado (R$)", placeholder: "Digite o valor em milhões" },
];

const toggleOptions = [
  { id: "convocado_selecao_principal", label: "Convocado para a seleção principal" },
  { id: "convocado_selecao_juniores", label: "Convocado para a seleção de juniores" },
  { id: "estrangeiro", label: "É estrangeiro?" },
];

const dropdownFields = [
  { id: "posicao", label: "Posição", placeholder: "Selecione a posição" },
  { id: "time_id", label: "Time", placeholder: "Selecione o time" },
];

const CreatePlayerFrame = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<any>({
    nome: "",
    idade: "",
    altura: "",
    posicao: "",
    num_camisa: "",
    convocado_selecao_principal: false,
    convocado_selecao_juniores: false,
    estrangeiro: false,
    valor_mercado: "",
    time_id: "",
    data_inicio: "",
    data_fim: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
    // Não redireciona ao selecionar time, apenas salva o id
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormValues((prev: any) => ({ ...prev, [name]: checked }));
  };

  // Buscar times do backend
  const [times, setTimes] = React.useState<{ id: number; nome: string }[]>([]);
  const posicoes = [
    "atacante",
    "meio-campo",
    "zagueiro",
    "goleiro",
    "lateral",
  ];

  React.useEffect(() => {
    import("axios").then(axios => {
      axios.default.get("http://localhost:8000/times/listar_times").then((res) => {
        if (Array.isArray(res.data)) {
          setTimes(res.data);
        } else if (Array.isArray(res.data.times)) {
          setTimes(res.data.times);
        } else {
          setTimes([]);
        }
      }).catch(() => setTimes([]));
    });
  }, []);

  // Lógica de registro
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Cria jogador
      const jogadorPayload = {
        nome: formValues.nome,
        idade: Number(formValues.idade),
        altura: formValues.altura ? Number(formValues.altura.replace(",", ".")) : 0,
        posicao: formValues.posicao,
        num_camisa: Number(formValues.num_camisa),
        convocado_selecao_principal: formValues.convocado_selecao_principal,
        convocado_selecao_juniores: formValues.convocado_selecao_juniores,
        estrangeiro: formValues.estrangeiro,
        valor_mercado: formValues.valor_mercado ? Number(formValues.valor_mercado.replace(",", ".")) : 0,
        time_id: Number(formValues.time_id),
      };
      const jogadorRes = await fetch("http://localhost:8000/jogador/criar_jogador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jogadorPayload),
      });
      if (!jogadorRes.ok) throw new Error("Erro ao criar jogador");
      const jogador = await jogadorRes.json();

      // Cria histórico
      const historicoPayload = {
        data_inicio: formValues.data_inicio || new Date().toISOString().slice(0, 10),
        data_fim: formValues.data_fim || new Date().toISOString().slice(0, 10),
        jogador_id: jogador.id,
        time_id: Number(formValues.time_id),
      };
      const historicoRes = await fetch("http://localhost:8000/historico_jogador/criar_historico_jogador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historicoPayload),
      });
      if (!historicoRes.ok) throw new Error("Erro ao criar histórico");

      setSuccess("Jogador registrado com sucesso!");
      setFormValues({
        nome: "",
        idade: "",
        altura: "",
        posicao: "",
        num_camisa: "",
        convocado_selecao_principal: false,
        convocado_selecao_juniores: false,
        estrangeiro: false,
        valor_mercado: "",
        time_id: "",
        data_inicio: "",
        data_fim: "",
      });
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" py={5}>
      <Container maxWidth="sm" sx={{ py: 4, px: 2 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Registrar Jogador
        </Typography>

        {formFields.map((field) => (
          <Box key={field.id} mb={2}>
            <Stack spacing={1}>
              <FormLabel>{field.label}</FormLabel>
              <TextField
                fullWidth
                name={field.id}
                placeholder={field.placeholder}
                value={formValues[field.id]}
                onChange={e => {
                  let value = (e.target as HTMLInputElement).value;
                  // Impede valores negativos nos campos numéricos
                  if (["idade", "altura", "num_camisa", "valor_mercado"].includes(field.id) && value !== "" && Number(value.replace(",", ".")) < 0) return;
                  // Para altura, aceita vírgula ou ponto, mas salva como string
                  if (field.id === "altura") {
                    // Aceita vírgula ou ponto, mas não deixa digitar letras
                    value = value.replace(/[^0-9.,]/g, "");
                  }
                  // Para valor_mercado, aceita apenas números e ponto
                  if (field.id === "valor_mercado") {
                    value = value.replace(/[^0-9.]/g, "");
                  }
                  setFormValues((prev: any) => ({ ...prev, [field.id]: value }));
                }}
                variant="outlined"
                type={field.id === "idade" || field.id === "num_camisa" ? "number" : "text"}
                InputProps={{ sx: { height: "48px", borderRadius: 2 } }}
                inputProps={field.id === "idade" || field.id === "num_camisa" ? { min: 0 } : {}}
              />
            </Stack>
          </Box>
        ))}

        {dropdownFields.map((field) => (
          <Box key={field.id} mb={2}>
            <Stack spacing={1}>
              <FormLabel>{field.label}</FormLabel>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  name={field.id}
                  value={formValues[field.id]}
                  onChange={handleSelectChange}
                  IconComponent={KeyboardArrowDownIcon}
                  renderValue={(selected) => {
                    if (!selected) return field.placeholder;
                    if (field.id === "posicao") {
                      return posicoes.find((p) => p === selected) || selected;
                    }
                    if (field.id === "time_id") {
                      const time = times.find((t) => t.id === Number(selected));
                      return time ? time.nome : selected;
                    }
                    return selected;
                  }}
                  sx={{ height: "48px", borderRadius: 2 }}
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  {field.id === "posicao"
                    ? posicoes.map((p) => (
                        <MenuItem key={p} value={p}>{p}</MenuItem>
                      ))
                    : times.map((t) => (
                        <MenuItem key={t.id} value={t.id}>{t.nome}</MenuItem>
                      ))}
                </Select>
              </FormControl>
            </Stack>
          </Box>
        ))}

        {/* Campos para data de início e fim do histórico */}
        <Box mb={2}>
          <Stack spacing={1}>
            <FormLabel>Data de início no time</FormLabel>
            <TextField
              fullWidth
              name="data_inicio"
              type="date"
              value={formValues.data_inicio}
              onChange={handleInputChange}
              variant="outlined"
              InputProps={{ sx: { height: "48px", borderRadius: 2 } }}
            />
          </Stack>
        </Box>
        <Box mb={2}>
          <Stack spacing={1}>
            <FormLabel>Data de fim no time</FormLabel>
            <TextField
              fullWidth
              name="data_fim"
              type="date"
              value={formValues.data_fim}
              onChange={handleInputChange}
              variant="outlined"
              InputProps={{ sx: { height: "48px", borderRadius: 2 } }}
            />
          </Stack>
        </Box>

        {toggleOptions.map((option) => (
          <Box
            key={option.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="48px"
            mb={1.5}
          >
            <Typography variant="body1">{option.label}</Typography>
            <Switch
              name={option.id}
              checked={formValues[option.id]}
              onChange={handleSwitchChange}
            />
          </Box>
        ))}

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>
        )}
        {success && (
          <Typography color="primary" sx={{ mt: 2 }}>{success}</Typography>
        )}

        <Box display="flex" justifyContent="flex-end" gap={1.5} mt={3}>
          <Button
            variant="contained"
            sx={{
                minWidth: "84px",
                backgroundColor: "#f2f2f4",
                color: "#111416",
                "&:hover": {
                backgroundColor: "#e0e0e0",
                },
            }}
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
            {loading ? "Salvando..." : "Registrar Jogador"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePlayerFrame;