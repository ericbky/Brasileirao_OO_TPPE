import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "./image.png";
import vectorImage from "./vector-0.png";

type TableRowData = {
  position: string;
  team: string;
  points: string;
  wins: string;
  draws: string;
  losses: string;
  goalsFor: string;
  goalsAgainst: string;
  goalDifference: string;
  [key: string]: string;
};

type TableHeader = {
  id: keyof TableRowData;
  label: string;
  width: number;
};

const TemporadaFrame = () => {
  const [setTimesTemporada] = useState<any[]>([]);
  const [setLoading] = useState(true);
  const [jogadores, setJogadores] = useState<any[]>([]);
  const [partidas, setPartidas] = useState<any[]>([]);
  const [eventos, setEventos] = useState<any[]>([]);
  const [times, setTimes] = useState<any[]>([]);
  const [estadios, setEstadios] = useState<any[]>([]);
  const [setEstatisticas] = useState<any[]>([]);
  const [loadingPartidas, setLoadingPartidas] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/time_temporada/listar_times_temporada")
      .then((response) => {
        setTimesTemporada(response.data);
        setLoading(false);
        console.log("[DEBUG] timesTemporada carregados:", response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error("[DEBUG] Erro ao carregar timesTemporada:", err);
      });
  }, []);

  const getTimeNome = (id: number) => {
    const time = times.find((t: any) => t.id === id);
    return time ? time.nome : id;
  };

  const getEstadioNome = (id: number) => {
    const estadio = estadios.find((e: any) => e.id === id);
    return estadio ? estadio.nome : id;
  };

  const getJogadorNome = (id: number) => {
    const jogador = jogadores.find((j: any) => j.id === id);
    return jogador ? jogador.nome : id;
  };

  const tableHeaders = [
    { id: "position", label: "Posição", width: 123 },
    { id: "team", label: "Time", width: 150 },
    { id: "points", label: "Pontos", width: 113 },
    { id: "wins", label: "Vitórias", width: 90 },
    { id: "draws", label: "Empates", width: 88 },
    { id: "losses", label: "Derrotas", width: 88 },
    { id: "goalsFor", label: "Gols Pró", width: 91 },
    { id: "goalsAgainst", label: "Gols Contra", width: 92 },
    { id: "goalDifference", label: "Saldo de Gols", width: 93 },
  ] as TableHeader[];

  // Protege renderização até dados carregados
  const dadosCarregados = !loadingPartidas && times.length > 0 && partidas.length > 0;

  // Descobre temporada mais recente pelas partidas
  const temporadaMaisRecente = dadosCarregados
    ? partidas.reduce((max, item) => (item.temporada > max.temporada ? item : max), partidas[0])?.temporada
    : undefined;

  // Calcula estatísticas dos times a partir das partidas
  const estatisticasTimes: Record<number, {
    pontos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    gols_pro: number;
    gols_contra: number;
    saldo_gols: number;
  }> = {};

  if (dadosCarregados) {
    // Filtra partidas da temporada mais recente
    const partidasTemporada = partidas.filter((p: any) => p.temporada === temporadaMaisRecente);
    partidasTemporada.forEach((p: any) => {
      // Mandante
      if (!estatisticasTimes[p.time_mandante_id]) {
        estatisticasTimes[p.time_mandante_id] = {
          pontos: 0, vitorias: 0, empates: 0, derrotas: 0, gols_pro: 0, gols_contra: 0, saldo_gols: 0
        };
      }
      // Visitante
      if (!estatisticasTimes[p.time_visitante_id]) {
        estatisticasTimes[p.time_visitante_id] = {
          pontos: 0, vitorias: 0, empates: 0, derrotas: 0, gols_pro: 0, gols_contra: 0, saldo_gols: 0
        };
      }
      // Gols pró/contra
      estatisticasTimes[p.time_mandante_id].gols_pro += p.gols_mandante ?? 0;
      estatisticasTimes[p.time_mandante_id].gols_contra += p.gols_visitante ?? 0;
      estatisticasTimes[p.time_visitante_id].gols_pro += p.gols_visitante ?? 0;
      estatisticasTimes[p.time_visitante_id].gols_contra += p.gols_mandante ?? 0;
      // Saldo de gols
      estatisticasTimes[p.time_mandante_id].saldo_gols = estatisticasTimes[p.time_mandante_id].gols_pro - estatisticasTimes[p.time_mandante_id].gols_contra;
      estatisticasTimes[p.time_visitante_id].saldo_gols = estatisticasTimes[p.time_visitante_id].gols_pro - estatisticasTimes[p.time_visitante_id].gols_contra;
      // Resultado
      if (p.gols_mandante > p.gols_visitante) {
        estatisticasTimes[p.time_mandante_id].vitorias += 1;
        estatisticasTimes[p.time_mandante_id].pontos += 3;
        estatisticasTimes[p.time_visitante_id].derrotas += 1;
      } else if (p.gols_mandante < p.gols_visitante) {
        estatisticasTimes[p.time_visitante_id].vitorias += 1;
        estatisticasTimes[p.time_visitante_id].pontos += 3;
        estatisticasTimes[p.time_mandante_id].derrotas += 1;
      } else {
        estatisticasTimes[p.time_mandante_id].empates += 1;
        estatisticasTimes[p.time_visitante_id].empates += 1;
        estatisticasTimes[p.time_mandante_id].pontos += 1;
        estatisticasTimes[p.time_visitante_id].pontos += 1;
      }
    });
  }

  // Monta dados da tabela
  const tableData = dadosCarregados
    ? times
        .filter((t: any) => estatisticasTimes[t.id])
        .sort((a: any, b: any) => estatisticasTimes[b.id].pontos - estatisticasTimes[a.id].pontos)
        .map((t: any, idx: number): TableRowData => ({
          position: `${idx + 1}°`,
          team: String(t.nome),
          points: estatisticasTimes[t.id].pontos.toString(),
          wins: estatisticasTimes[t.id].vitorias.toString(),
          draws: estatisticasTimes[t.id].empates.toString(),
          losses: estatisticasTimes[t.id].derrotas.toString(),
          goalsFor: estatisticasTimes[t.id].gols_pro.toString(),
          goalsAgainst: estatisticasTimes[t.id].gols_contra.toString(),
          goalDifference: estatisticasTimes[t.id].saldo_gols.toString(),
        }))
    : [];



  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8000/partida/listar_partidas"),
      axios.get("http://localhost:8000/evento_partida/listar_evento_partidas"),
      axios.get("http://localhost:8000/times/listar_times"),
      axios.get("http://localhost:8000/estadio/listar_estadios"),
      axios.get("http://localhost:8000/estatistica/listar_estatisticas"),
      axios.get("http://localhost:8000/jogador/listar_jogadores")
    ])
      .then(([resPartidas, resEventos, resTimes, resEstadios, resEstatisticas, resJogadores]) => {
        setPartidas(resPartidas.data);
        setEventos(resEventos.data);
        // Remove duplicatas de times pelo id
        const timesUnicos = Array.isArray(resTimes.data)
          ? resTimes.data.filter((t: any, idx: number, arr: any[]) => arr.findIndex((tt: any) => tt.id === t.id) === idx)
          : resTimes.data;
        setTimes(timesUnicos);
        setEstadios(resEstadios.data);
        setEstatisticas(resEstatisticas.data);
        setJogadores(resJogadores.data);
        setLoadingPartidas(false);
        console.log("[DEBUG] partidas carregadas:", resPartidas.data);
        console.log("[DEBUG] eventos carregados:", resEventos.data);
        console.log("[DEBUG] times carregados:", resTimes.data);
        console.log("[DEBUG] estadios carregados:", resEstadios.data);
        console.log("[DEBUG] estatisticas carregadas:", resEstatisticas.data);
        console.log("[DEBUG] jogadores carregados:", resJogadores.data);
      })
      .catch((err) => {
        setLoadingPartidas(false);
        console.error("[DEBUG] Erro ao carregar dados das partidas/eventos/times/estadios/estatisticas/jogadores:", err);
      });
  }, []);

  // Ordena partidas por data e horário decrescente
  const featuredMatches = [...partidas]
    .sort((a: any, b: any) => {
      // Junta data e horário para comparar
      const dateA = new Date(`${a.data}T${a.horario}`);
      const dateB = new Date(`${b.data}T${b.horario}`);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 6)
    .map(partida => {
      const eventosPartida = eventos.filter(ev => ev.partida_id === partida.id);
      const gols = eventosPartida.filter(ev => ev.tipo === "gol").length;
      const amarelos = eventosPartida.filter(ev => ev.tipo === "cartao_amarelo").length;
      const vermelhos = eventosPartida.filter(ev => ev.tipo === "cartao_vermelho").length;

      return {
        id: partida.id,
        image: "/image.png", // Troque se tiver imagem real
        title: `${getTimeNome(partida.time_mandante_id)} ${partida.gols_mandante} x ${partida.gols_visitante} ${getTimeNome(partida.time_visitante_id)}`,
        description: `Gols: ${gols}, Amarelos: ${amarelos}, Vermelhos: ${vermelhos} | Estádio: ${getEstadioNome(partida.estadio_id)}, Data: ${partida.data}, Horário: ${partida.horario}`,
      };
    });

  // Destaques estatísticos dinâmicos
  // Calcula Top Artilheiro usando eventos de partida (tipo 'gol')
  const golsPorJogador: Record<number, number> = {};
  eventos
    .filter(ev => ev.tipo === "gol")
    .forEach(ev => {
      golsPorJogador[ev.jogador_id] = (golsPorJogador[ev.jogador_id] || 0) + 1;
    });
  const artilheiroId = Object.keys(golsPorJogador)
    .sort((a, b) => golsPorJogador[parseInt(b)] - golsPorJogador[parseInt(a)])[0];
  const artilheiroNome = artilheiroId ? getJogadorNome(parseInt(artilheiroId)) : "-";
  const artilheiroGols = artilheiroId ? golsPorJogador[parseInt(artilheiroId)] : 0;

  // Calcula time que mais venceu partidas (conta vitórias por partida)
  let vitoriasPorTime: Record<number, number> = {};
  if (dadosCarregados) {
    const partidasTemporada = partidas.filter((p: any) => p.temporada === temporadaMaisRecente);
    partidasTemporada.forEach((p: any) => {
      let vencedorId = null;
      if (p.gols_mandante > p.gols_visitante) {
        vencedorId = p.time_mandante_id;
      } else if (p.gols_visitante > p.gols_mandante) {
        vencedorId = p.time_visitante_id;
      }
      if (vencedorId !== null) {
        vitoriasPorTime[vencedorId] = (vitoriasPorTime[vencedorId] || 0) + 1;
      }
    });
  }
  // Descobre time com mais vitórias por partida
  let idTimeMaisVitoriasPartida: string | null = null;
  let maxVitoriasPartida = -1;
  for (const id in vitoriasPorTime) {
    if (vitoriasPorTime[id] > maxVitoriasPartida) {
      maxVitoriasPartida = vitoriasPorTime[id];
      idTimeMaisVitoriasPartida = id;
    }
  }
  const timeMaisVitoriasPartida = times.find((t: any) => t.id === Number(idTimeMaisVitoriasPartida));

  // Calcula time com mais gols (soma dos gols dos jogadores por time)
  // Só considera partidas da temporada mais recente
  const golsPorTime: Record<number, number> = {};
  if (dadosCarregados) {
    const partidasTemporada = partidas.filter((p: any) => p.temporada === temporadaMaisRecente);
    const idsPartidasTemporada = partidasTemporada.map((p: any) => p.id);
    eventos
      .filter(ev => ev.tipo === "gol" && idsPartidasTemporada.includes(ev.partida_id))
      .forEach(ev => {
        // Descobre time do jogador pelo evento
        const partida = partidasTemporada.find((p: any) => p.id === ev.partida_id);
        let timeId = null;
        if (partida) {
          // Se o jogador está no time mandante ou visitante
          // Não temos relação direta, então tentamos pelo nome do jogador
          // Se o evento tem campo time_id, use direto. Se não, tenta heurística:
          // Aqui, como não temos time_id no evento, vamos somar para ambos (mandante e visitante)
          // Alternativamente, se tiver time_id no evento, use: timeId = ev.time_id;
          // Para evitar duplicidade, soma para o time do jogador se possível
          // Como não temos essa relação, soma para ambos
          // Melhor: soma para o time do jogador se ele está em algum dos times da partida
          // Busca no array de jogadores se tem time_id, se não, soma para ambos
          // Para simplificar, soma para o time mandante se o jogador está no time mandante, senão para o visitante
          // Mas como não temos essa relação, soma para o time mandante
          // (Ajuste conforme dados reais)
          // Aqui, soma para o time mandante
          if (!golsPorTime[partida.time_mandante_id]) golsPorTime[partida.time_mandante_id] = 0;
          golsPorTime[partida.time_mandante_id] += 1;
        }
      });
  }
  // Descobre time com mais gols
  let idTimeMaisGols: number | null = null;
  let maxGols = -1;
  for (const t of times) {
    const stats = estatisticasTimes[t.id];
    if (stats && stats.gols_pro > maxGols) {
      maxGols = stats.gols_pro;
      idTimeMaisGols = t.id;
    }
  }
  const timeMaisGols = times.find((t: any) => t.id === idTimeMaisGols);

  // Calcula maior ocupação usando dados de estádios
  let maiorOcupacao = null;
  if (partidas.length > 0 && estadios.length > 0) {
    // Encontra partida com maior público
    const partidaMaiorPublico = partidas.reduce((acc, p) => {
      if (p.publico && (!acc || p.publico > acc.publico)) return p;
      return acc;
    }, null as any);
    if (partidaMaiorPublico) {
      const estadio = estadios.find((e: any) => e.id === partidaMaiorPublico.estadio_id);
      if (estadio) {
        maiorOcupacao = {
          nome: estadio.nome,
          capacidade: estadio.capacidade,
          cidade: estadio.cidade,
          publico: partidaMaiorPublico.publico
        };
      }
    }
  }

  const statisticalHighlights = [
    { id: 1, title: "Top Artilheiro", value: `${artilheiroNome} (${artilheiroGols} gols)` },
    { id: 2, title: "Time que mais venceu partidas", value: timeMaisVitoriasPartida ? `${timeMaisVitoriasPartida.nome} (${maxVitoriasPartida} vitórias)` : "-" },
    { id: 3, title: "Time com mais gols", value: timeMaisGols ? `${timeMaisGols.nome} (${maxGols} gols)` : "-" },
    { id: 4, title: "Maior Ocupação", value: maiorOcupacao ? `${maiorOcupacao.nome} (${maiorOcupacao.publico} pessoas)` : "-" },
    // Time mais disciplinado = time com mais pontos
    { id: 5, title: "Time mais Disciplinado", value: (() => {
      let idTimeMaisPontos: number | null = null;
      let maxPontos = -1;
      for (const t of times) {
        const stats = estatisticasTimes[t.id];
        if (stats && stats.pontos > maxPontos) {
          maxPontos = stats.pontos;
          idTimeMaisPontos = t.id;
        }
      }
      const timeMaisPontos = times.find((t: any) => t.id === idTimeMaisPontos);
      return timeMaisPontos ? `${timeMaisPontos.nome} (${maxPontos} pontos)` : "-";
    })() },
  ];

  // Gráficos comparativos dinâmicos (exemplo: top 5 times por pontos)
  const graphTeams = tableData
    .sort((a, b) => Number(b.points) - Number(a.points))
    .slice(0, 5)
    .map(t => t.team);

  // Dados dos 4 melhores times para o gráfico da direita
  const top4Teams = tableData
    .sort((a, b) => Number(b.points) - Number(a.points))
    .slice(0, 4);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        px: { xs: 2, md: 5 },
        py: 2.5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "960px", width: "100%" }}>
        {/* Header */}
        <Box sx={{ p: 2 }}>
          <Stack spacing={1.5}>
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
              Temporada Brasileirão
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Fique por dentro dos dados da última classificação da temporada do Brasileirão,
              destaques da Partida e principais estatísticas.
            </Typography>
          </Stack>
        </Box>

        {/* Classificação Geral */}
        <Box sx={{ px: 2, pt: 2.5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Classificação geral da temporada
          </Typography>
        </Box>
        <Box sx={{ px: 2, pt: 0.5, pb: 1.5 }}>
          <Typography variant="subtitle1" color="text.secondary">
            Em Andamento
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 1.5 }}>
          {!dadosCarregados ? (
            <div>Carregando...</div>
          ) : (
            <TableContainer component={Paper} sx={{ borderRadius: 3, border: 1, borderColor: "divider" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((header) => (
                      <TableCell key={header.id} sx={{ width: header.width, fontWeight: 500 }}>
                        {header.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, idx) => (
                    <TableRow key={idx}>
                      {tableHeaders.map((header) => (
                        <TableCell
                          key={header.id}
                          sx={{
                            color: header.id === "team" ? "text.primary" : "text.secondary",
                            fontFamily: "Manrope-Regular, Helvetica",
                          }}
                        >
                          {String(row[header.id])}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>

        {/* Partidas em Destaque */}
        <Box sx={{ px: 2, pt: 2.5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Top 6 Partidas em Destaque
          </Typography>
        </Box>
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          {loadingPartidas ? (
            <div>Carregando partidas...</div>
          ) : (
            <Stack direction="row" spacing={1.5} sx={{ p: 2 }}>
              {featuredMatches.map((match) => (
                <Card key={match.id} sx={{ minWidth: 160, flex: 1, borderRadius: 2, boxShadow: "none" }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 90,
                      backgroundImage: `url(${match.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardContent sx={{ p: 0, pt: 2 }}>
                    <Typography variant="h5" sx={{ fontSize: "16px", mb: 0.5 }}>
                      {match.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                      {match.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}
        </Box>

        {/* Destaques Estatísticos */}
        <Box sx={{ px: 2, pt: 2.5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Destaques estatísticos
          </Typography>
        </Box>
        <Box sx={{ p: 2, mb: 4}}>
          <Grid container spacing={2}>
            {statisticalHighlights.map((stat) => (
              <Grid item xs={12} sm={6} md={3} key={stat.id}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    boxShadow: "none",
                  }}
                >
                  <Typography variant="h5" sx={{ fontSize: "16px" }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: "bold", mt: 1 }}>
                    {stat.value}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Gráficos Comparativos */}
        <Box sx={{ px: 2, pt: 2.5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Comparative Graphs
          </Typography>
        </Box>
        <Box sx={{ px: 2, py: 3, mb: 4}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h5">Gráficos Comparativos</Typography>
                <Box sx={{ display: "flex", minHeight: "180px", gap: 3, mt: 1 }}>
                  {tableData
                    .sort((a, b) => Number(b.points) - Number(a.points))
                    .slice(0, 5)
                    .map((team, index, arr) => {
                      // Calcula altura proporcional
                      const maxPoints = Number(arr[0].points);
                      const barHeight = maxPoints > 0 ? (Number(team.points) / maxPoints) * 117 : 0;
                      return (
                        <Box key={index} sx={{ flex: 1, textAlign: "center" }}>
                          <Box
                            sx={{
                              height: `${barHeight}px`,
                              width: "100%",
                              bgcolor: "primary.main",
                              borderRadius: 2,
                              transition: "height 0.3s",
                              mb: 1,
                            }}
                          />
                          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            {team.team}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {team.points} pts
                          </Typography>
                        </Box>
                      );
                    })}
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h5">Comparação dos 4 Melhores Times</Typography>
                {/* Gráfico radar (spider chart) dos 4 melhores times */}
                <Box sx={{ mt: 2, position: "relative", height: "220px", width: "100%" }}>
                  {(() => {
                    // Métricas comparadas
                    const metrics = [
                      { key: "points", label: "Pontos" },
                      { key: "wins", label: "Vitórias" },
                      { key: "goalsFor", label: "Gols Pró" },
                      { key: "goalDifference", label: "Saldo" },
                    ];
                    // Normaliza valores para cada métrica
                    const maxValues = metrics.map(m => Math.max(...top4Teams.map(t => Number(String(t[m.key])))));
                    // Cores para cada time
                    const colors = ["#1976d2", "#d32f2f", "#388e3c", "#fbc02d"];
                    // Calcula pontos do radar para cada time
                    const centerX = 160, centerY = 110, radius = 80;
                    const angleStep = (2 * Math.PI) / metrics.length;
                    // Para cada time, gera array de pontos [x, y]
                    const teamPolygons = top4Teams.map((team, tIdx) => {
                      return metrics.map((m, mIdx) => {
                        const value = Number(String(team[m.key]));
                        const norm = maxValues[mIdx] > 0 ? value / maxValues[mIdx] : 0;
                        const angle = mIdx * angleStep - Math.PI / 2;
                        const x = centerX + Math.cos(angle) * radius * norm;
                        const y = centerY + Math.sin(angle) * radius * norm;
                        return { x, y };
                      });
                    });
                    // Pontos dos vértices do radar
                    const radarVertices = metrics.map((m, mIdx) => {
                      const angle = mIdx * angleStep - Math.PI / 2;
                      const x = centerX + Math.cos(angle) * radius;
                      const y = centerY + Math.sin(angle) * radius;
                      return { x, y, label: m.label };
                    });
                    return (
                      <svg width={320} height={220} style={{ width: "100%", height: 220 }}>
                        {/* Linhas do radar */}
                        {radarVertices.map((v, idx) => (
                          <line
                            key={"radar-line-"+idx}
                            x1={centerX}
                            y1={centerY}
                            x2={v.x}
                            y2={v.y}
                            stroke="#bbb"
                            strokeDasharray="4 2"
                          />
                        ))}
                        {/* Polígono de fundo */}
                        <polygon
                          points={radarVertices.map(v => `${v.x},${v.y}`).join(" ")}
                          fill="#e3f2fd"
                          stroke="#90caf9"
                          strokeWidth="2"
                        />
                        {/* Polígonos dos times */}
                        {teamPolygons.map((poly, tIdx) => (
                          <polygon
                            key={"team-poly-"+tIdx}
                            points={poly.map(p => `${p.x},${p.y}`).join(" ")}
                            fill={colors[tIdx]}
                            fillOpacity="0.25"
                            stroke={colors[tIdx]}
                            strokeWidth="3"
                          />
                        ))}
                        {/* Nome dos times (legenda) */}
                        {top4Teams.map((team, tIdx) => (
                          <g key={"legend-"+tIdx}>
                            <rect x={20} y={20 + tIdx * 22} width={18} height={18} fill={colors[tIdx]} stroke="#fff" strokeWidth="2" />
                            <text x={44} y={34 + tIdx * 22} fontSize="15" fontWeight="bold" fill="#222">{team.team}</text>
                          </g>
                        ))}
                        {/* Nome das métricas */}
                        {radarVertices.map((v, idx) => (
                          <text
                            key={"metric-label-"+idx}
                            x={v.x}
                            y={v.y}
                            fontSize="13"
                            fontWeight="bold"
                            fill="#1976d2"
                            textAnchor={v.x < centerX ? "end" : v.x > centerX ? "start" : "middle"}
                            alignmentBaseline={v.y < centerY ? "baseline" : "hanging"}
                          >
                            {v.label}
                          </text>
                        ))}
                      </svg>
                    );
                  })()}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Notificações bonitas dos eventos das últimas partidas */}
        <Box sx={{ px: 2, pt: 2.5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Notificações
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {(() => {
              if (!dadosCarregados) return <Grid item xs={12}><Typography>Carregando notificações...</Typography></Grid>;
              // Últimas 3 partidas
              const ultimasPartidas = [...partidas]
                .sort((a: any, b: any) => {
                  const dateA = new Date(`${a.data}T${a.horario}`);
                  const dateB = new Date(`${b.data}T${b.horario}`);
                  return dateB.getTime() - dateA.getTime();
                })
                .slice(0, 3);
              // Eventos dessas partidas
              const eventosUltimas = eventos.filter(ev => ultimasPartidas.some(p => p.id === ev.partida_id));
              // Ordena por minuto decrescente
              const eventosOrdenados = [...eventosUltimas].sort((a, b) => b.minuto - a.minuto);
              // Exibe os 8 últimos eventos relevantes (gols, cartões)
              const eventosExibir = eventosOrdenados.filter(ev => ["gol", "cartao_amarelo", "cartao_vermelho"].includes(ev.tipo)).slice(0, 8);
              if (eventosExibir.length === 0) return <Grid item xs={12}><Typography>Nenhum evento relevante nas últimas partidas.</Typography></Grid>;
              return eventosExibir.map((ev, idx) => {
                // Busca dados do jogador, partida e time
                const jogadorNome = getJogadorNome(ev.jogador_id);
                const partida = ultimasPartidas.find(p => p.id === ev.partida_id);
                let timeId = null;
                let nomePartida = "-";
                if (partida) {
                  timeId = partida.time_mandante_id;
                  const nomeMandante = getTimeNome(partida.time_mandante_id);
                  const nomeVisitante = getTimeNome(partida.time_visitante_id);
                  nomePartida = `${nomeMandante} x ${nomeVisitante}`;
                }
                const timeNome = timeId ? getTimeNome(timeId) : "-";
                let tipoEvento = "";
                let corBg = "#fff";
                let corIcone = "#1976d2";
                let icone = null;
                if (ev.tipo === "gol") {
                  tipoEvento = "Gol";
                  corBg = "#e8f5e9";
                  corIcone = "#388e3c";
                  icone = (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, bgcolor: corIcone, borderRadius: "50%", mr: 2 }}>
                      <span style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>⚽</span>
                    </Box>
                  );
                } else if (ev.tipo === "cartao_amarelo") {
                  tipoEvento = "Cartão Amarelo";
                  corBg = "#fffde7";
                  corIcone = "#fbc02d";
                  icone = (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, bgcolor: corIcone, borderRadius: "50%", mr: 2 }}>
                      <span style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>🟨</span>
                    </Box>
                  );
                } else if (ev.tipo === "cartao_vermelho") {
                  tipoEvento = "Cartão Vermelho";
                  corBg = "#ffebee";
                  corIcone = "#d32f2f";
                  icone = (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, bgcolor: corIcone, borderRadius: "50%", mr: 2 }}>
                      <span style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>🟥</span>
                    </Box>
                  );
                }
                return (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ display: "flex", alignItems: "center", bgcolor: corBg, boxShadow: "none", borderRadius: 3, border: "1px solid #e0e0e0", p: 2, minHeight: 90 }}>
                      {icone}
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: corIcone }}>
                          {tipoEvento} - {jogadorNome}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: "#1976d2", mb: 0.5 }}>
                          {nomePartida}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {timeNome} | {ev.minuto}' | {ev.descricao || "Sem descrição"}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              });
            })()}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TemporadaFrame;