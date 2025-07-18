import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import matchImage from "./stadium.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";

const FilterSection = ({ selectedCity, selectedStadium, onSelectStadium }: { selectedCity: string; selectedStadium: string, onSelectStadium: (stadium: string) => void }) => {
  const [stadiumDetails, setStadiumDetails] = useState<any>(null);
  const [stadiumMatches, setStadiumMatches] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    axios
      .get("http://localhost:8001/estadio/listar_estadios")
      .then((response) => {
        if (!selectedCity && !selectedStadium) {
          setStadiumDetails(response.data);
        } else {
          const filteredStadium = response.data.filter(
            (stadium: any) =>
              (!selectedCity || stadium.cidade === selectedCity) &&
              (!selectedStadium || stadium.nome === selectedStadium)
          );
          setStadiumDetails(filteredStadium.length > 0 ? filteredStadium : null);
        }
      })
      .catch(() => {
        setStadiumDetails(null);
      });
  }, [selectedCity, selectedStadium]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/partida/listar_partidas")
      .then((response) => {
        // Agrupa partidas por estadio_id
        const grouped: { [key: string]: any[] } = {};
        response.data.forEach((match: any) => {
          const estId = match.estadio_id;
          if (!grouped[estId]) grouped[estId] = [];
          grouped[estId].push(match);
        });
        setStadiumMatches(grouped);
      })
      .catch(() => {
        setStadiumMatches({});
      });
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 4, width: "100%" }}>
      {/* Se stadiumDetails for um array, renderiza todos os estádios; se for objeto, renderiza só o filtrado; se null, mostra mensagem */}
      {Array.isArray(stadiumDetails) ? (
        stadiumDetails.length > 0 ? (
          stadiumDetails.filter((stadium: any, idx: number, arr: any[]) =>
            idx === arr.findIndex((s) => s.id === stadium.id)
          ).map((stadium: any) => (
            <Box
              key={stadium.id || stadium.nome}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                borderRadius: "12px",
                mb: 2,
              }}
            >
              <Stack spacing={4} sx={{ maxWidth: "608px" }}>
                <Stack spacing={1}>
                  <Typography variant="h3" color="text.primary">
                    {stadium.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${stadium.cidade} - ${stadium.estado} - ${stadium.pais} • ${stadium.capacidade} cadeiras • Partidas realizadas: ${stadiumMatches[stadium.id]?.length || 0}`}
                  </Typography>
                </Stack>
                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon sx={{ width: 14, height: 11 }} />}
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: "12px",
                    minWidth: "84px",
                    maxWidth: "480px",
                    height: "32px",
                    pl: 2,
                    pr: 1,
                    justifyContent: "center",
                    alignSelf: "flex-start",
                    "& .MuiButton-endIcon": {
                      ml: 0.5,
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Visualizar Partidas
                  </Typography>
                </Button>
              </Stack>
              <Box
                component="img"
                src={matchImage}
                alt="Imagem Estádio"
                sx={{
                  width: "320px",
                  height: "171px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))
        ) : (
          <Typography variant="h6">Nenhum estádio encontrado.</Typography>
        )
      ) : stadiumDetails ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "12px",
          }}
        >
          <Stack spacing={4} sx={{ maxWidth: "608px" }}>
            <Stack spacing={1}>
              <Typography variant="h3" color="text.primary">
                {stadiumDetails.nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${stadiumDetails.cidade} - ${stadiumDetails.estado} - ${stadiumDetails.pais} • ${stadiumDetails.capacidade} cadeiras • Partidas realizadas: ${stadiumMatches[stadiumDetails.id]?.length || 0}`}
              </Typography>
            </Stack>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ width: 14, height: 11 }} />}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "12px",
                minWidth: "84px",
                maxWidth: "480px",
                height: "32px",
                pl: 2,
                pr: 1,
                justifyContent: "center",
                alignSelf: "flex-start",
                "& .MuiButton-endIcon": {
                  ml: 0.5,
                },
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Visualizar Partidas
              </Typography>
            </Button>
          </Stack>
          <Box
            component="img"
            src={matchImage}
            alt="Imagem Estádio"
            sx={{
              width: "320px",
              height: "171px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Box>
      ) : (
        <Typography variant="h6">Nenhum estádio encontrado.</Typography>
      )}
    </Box>
  );
};

export default FilterSection;