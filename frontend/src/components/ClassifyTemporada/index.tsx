import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { ThemeProvider } from "./ThemeProvider";
import TopScorersSection from "./TopScorersSection";
import GoalkeepersSection from "./GoalkeepersSection";
import DisciplinaryPlayersSection from "./DisciplinaryPlayersSection";
import StandingsSection from "./StandingsSection";
import SeasonRankingsSection from "./SeasonRankingsSection";

const SectionHeader = ({ title }: { title: string }) => (
  <Box sx={{ py: 2.5, px: 2, width: "100%" }}>
    <Typography variant="h2" fontWeight="bold" color="text.primary">
      {title}
    </Typography>
  </Box>
);

const DepthFrameScreen = () => {
  return (
    <ThemeProvider>
      <Container maxWidth="lg" sx={{ py: 2.5, px: 5 }}>
        <Box sx={{ maxWidth: 960, width: "100%", mx: "auto" }}>
          <TopScorersSection />
          <SectionHeader title="Artilheiros" />
          <GoalkeepersSection />
          <SectionHeader title="Assistências" />
          <DisciplinaryPlayersSection />
          <SectionHeader title="Goleiros - Defesas Feitas" />
          <StandingsSection />
          <SectionHeader title="Jogadores Mais Indisciplinados" />
          <SeasonRankingsSection />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default DepthFrameScreen;