import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

import BallPossessionSection from "./BallPossessionSection";
import CornerKicksSection from "./CornerKicksSection";
import FoulsCommittedSection from "./FoulsCommittedSection";
import StatisticsActionsSection from "./StatisticsActionsSection";
import OffsidesSection from "./OffsidesSection";
import RegisterMatchStatisticsSection from "./RegisterMatchStatisticsSection";
import ShotsOffTargetSection from "./ShotsOffTargetSection";
import ShotsOnTargetSection from "./ShotsOnTargetSection";
import SuccessfulPassesSection from "./SuccessfulPassesSection";
import TotalAttemptsSection from "./TotalAttemptsSection";
import UnsuccessfulPassesSection from "./UnsuccessfulPassesSection";

const RegisterMatchStatistics = () => {
  const matchOptions: { value: string; label: string }[] = [];
  const teamOptions: { value: string; label: string }[] = []; 

  return (
    <ThemeProvider>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Box width="100%">
          <Box p={4}>
            <Typography variant="h1" color="text.primary">
              Registrar Estatísticas da Partida
            </Typography>
          </Box>

          <Box px={4} py={3}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                displayEmpty
                value=""
                renderValue={() => (
                  <Typography
                    fontFamily="Manrope-Regular, Helvetica"
                    fontSize="16px"
                    lineHeight="24px"
                    color="text.primary"
                  >
                    Selecione a partida
                  </Typography>
                )}
                sx={{
                  height: "56px",
                  borderRadius: "12px",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                {matchOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box px={4} py={3}>
            <FormControl fullWidth>
              <Select
                displayEmpty
                value=""
                renderValue={() => (
                  <Typography
                    fontFamily="Manrope-Regular, Helvetica"
                    fontSize="16px"
                    lineHeight="24px"
                    color="text.primary"
                  >
                    Selecione o time
                  </Typography>
                )}
                sx={{
                  height: "56px",
                  borderRadius: "12px",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                {teamOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Match statistic sections */}
          <ShotsOnTargetSection />
          <ShotsOffTargetSection />
          <UnsuccessfulPassesSection />
          <SuccessfulPassesSection />
          <RegisterMatchStatisticsSection />
          <BallPossessionSection />
          <TotalAttemptsSection />
          <CornerKicksSection />
          <FoulsCommittedSection />
          <OffsidesSection />
          <StatisticsActionsSection />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterMatchStatistics;
