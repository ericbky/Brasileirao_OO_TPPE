import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";

// Dados das estatísticas
const statsData = [
  {
    title: "Estádio com Maior Capacidade",
    value: "Grand Estádio (80.000)",
  },
  {
    title: "Estádio com mais partidas realizadas",
    value: "Grand Estádio (15)",
  },
  {
    title: "Ocupação Média por Estádio",
    value: "65.000",
  },
];

const QuickStatsSection = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      sx={{ p: 2, width: "100%", alignItems: "flex-start" }}
    >
      {statsData.map((stat, index) => (
        <Card
          key={index}
          sx={{
            p: 3,
            flex: 1,
            minWidth: 158,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: 1,
            borderColor: "divider",
            borderRadius: 3,
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="text.primary">
              {stat.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="text.primary">
              {stat.value}
            </Typography>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default QuickStatsSection;