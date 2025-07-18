import React from "react";
import { Box, Stack } from "@mui/material";
import TechnicianDetailsSection from "./TechnicianDetailsSection";
import TechnicianListSection from "./TechnicianListSection";
import { ThemeProvider } from "./ThemeProvider";

const TechnicianFrame = () => {
  return (
    <ThemeProvider>
      <Box sx={{ p: 2.5 }}>
        <Stack
          direction="row"
          spacing={2} // espaço entre os dois blocos
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          {/* Você pode controlar os tamanhos com 'flex' se quiser */}
          <Box sx={{ flex: 1 }}>
            <TechnicianListSection />
          </Box>
          <Box sx={{ flex: 2 }}>
            <TechnicianDetailsSection />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default TechnicianFrame;
