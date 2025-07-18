import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

// Dados do estádio (pode ser expandido para múltiplos estádios futuramente)
const stadiumData = {
  name: "Metropolitan Estádio",
  location: "São Paulo - SP - Brasil",
  capacity: "65.000 lugares",
  matchesPlayed: "10 Partidas realizadas",
  image: "/depth-6-frame-1-2.png",
};

const StadiumListSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 4,
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <Grid item xs={12} md={6}>
          <Stack spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h3" color="text.primary">
                {stadiumData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${stadiumData.location} • ${stadiumData.capacity} • ${stadiumData.matchesPlayed}`}
              </Typography>
            </Stack>

            <Button
              variant="text"
              startIcon={
                <Typography variant="subtitle2">
                  Visualizar Partidas
                </Typography>
              }
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "12px",
                justifyContent: "flex-start",
                width: "fit-content",
                px: 2,
                py: 0.5,
                "& .MuiButton-endIcon": {
                  ml: 0.5,
                },
                "& .MuiButton-startIcon": {
                  mr: 0,
                },
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "171px",
              borderRadius: "12px",
              backgroundImage: `url(${stadiumData.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StadiumListSection;