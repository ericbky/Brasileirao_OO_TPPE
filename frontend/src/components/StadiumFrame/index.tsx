import React from "react";
import { Box, Stack } from "@mui/material";
import FilterSection from "./FilterSection";
import MainContentSection from "./MainContentSection";
import QuickStatsSection from "./QuickStatsSection";
import StadiumDetailsSection from "./StadiumDetailsSection";
import StadiumWrapperSection from "./StadiumWrapperSection";
import { ThemeProvider } from "./ThemeProvider";

const StadiumFrame = () => {
  return (
    <ThemeProvider>
      <Box sx={{ display: "flex", justifyContent: "center", px: 40, py: 5 }}>
        <Stack maxWidth="960px" width="100%" spacing={0}>
          <StadiumDetailsSection />
          <StadiumWrapperSection />
          <MainContentSection />
          <FilterSection />
          <QuickStatsSection />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default StadiumFrame;