import {
  Box,
  Container,
  Switch,
  Typography
} from "@mui/material";
import React from "react";
import AttendanceInputSection from "./AttendanceInputSection";
import CapacityInputSection from "./CapacityInputSection";
import ComponentNodeSection from "./ComponentNodeSection";
import FieldWrapperSection from "./FieldWrapperSection";
import FormFieldSection from "./FormFieldSection";
import FormWrapperSection from "./FormWrapperSection";
import MainFormSection from "./MainFormSection";
import MatchDetailsSection from "./MatchDetailsSection";
import MatchStatisticsSection from "./MatchStatisticsSection";
import OvertimeOptionsSection from "./OvertimeOptionsSection";
import PenaltyOptionsSection from "./PenaltyOptionsSection";
import RefereeSelectionSection from "./RefereeSelectionSection";
import SaveButtonSection from "./SaveButtonSection";
import TeamSelectionSection from "./TeamSelectionSection";
import { ThemeProvider } from "./ThemeProvider";

const CreateMatchFrame = () => {
  return (
    <ThemeProvider>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 5,
          py: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "960px",
            width: "960px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "12px",
              p: 4,
              width: "100%",
            }}
          >
            <Box sx={{ minWidth: "288px" }}>
              <Typography variant="h3">Registrar Nova Partida</Typography>
            </Box>
          </Box>

          <MainFormSection />
          <FormWrapperSection />
          <FieldWrapperSection />
          <FormFieldSection />
          <ComponentNodeSection />
          <MatchDetailsSection />
          <TeamSelectionSection />
          <MatchStatisticsSection />
          <OvertimeOptionsSection />

          {/* Overtime Switch */}
          <Box
            sx={{
              display: "flex",
              height: "56px",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 0,
              bgcolor: "background.paper",
              width: "100%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Overtime?
              </Typography>
            </Box>
            <Switch />
          </Box>

          {/* Penalty Switch */}
          <Box
            sx={{
              display: "flex",
              height: "56px",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 0,
              bgcolor: "background.paper",
              width: "100%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Penalties?
              </Typography>
            </Box>
            <Switch />
          </Box>

          <PenaltyOptionsSection />
          <RefereeSelectionSection />
          <AttendanceInputSection />
          <CapacityInputSection />
          <SaveButtonSection />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateMatchFrame;