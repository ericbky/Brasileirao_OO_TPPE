import React, { useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import FilterSection from "./FilterSection";
import MainContentSection from "./MainContentSection";
import QuickStatsSection from "./QuickStatsSection";
import StadiumDetailsSection from "./StadiumDetailsSection";
import StadiumWrapperSection from "./StadiumWrapperSection";
import { ThemeProvider } from "./ThemeProvider";

const StadiumFrame = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedStadium, setSelectedStadium] = useState<string>("");

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex", justifyContent: "center", px: 40, py: 5 }}>
        <Stack maxWidth="960px" width="100%" spacing={0}>
          <StadiumDetailsSection />
          <StadiumWrapperSection onSelectStadium={setSelectedStadium} />
          <MainContentSection onSelectCity={setSelectedCity} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", pt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C4D4EB",
                color: "#121417",
                width: "140px",
                height: "40px",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "'Manrope-Medium', Helvetica",
                fontSize: "14px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#b3c6de",
                },
              }}
              onClick={() => {
                setSelectedCity("");
                setSelectedStadium("");
              }}
            >
              Limpar Filtros
            </Button>
          </Box>
          <FilterSection
            selectedCity={selectedCity}
            selectedStadium={selectedStadium}
            onSelectStadium={setSelectedStadium}
          />
          <QuickStatsSection />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default StadiumFrame;