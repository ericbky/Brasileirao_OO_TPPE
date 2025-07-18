import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import matchImage from "./stadium.png";
import { Box, Button, Stack, Typography } from "@mui/material";

const FilterSection = () => {


  return (


    <Box sx={{ display: "flex", flexDirection: "column", p: 4, width: "100%" }}>
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
              Estádio Arena
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brasília - DF - Brasil • 70.000 cadeiras • 12 Partidas realizadas
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
          src={ matchImage }
          alt="Imagem Estádio"
          sx={{
            width: "320px",
            height: "171px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default FilterSection;