import React from "react";
import { Box, Container, Typography } from "@mui/material";

import QuickStatsSection from "./QuickStatsSection";
import HeaderSection from "./HeaderSection";
import MainContentSection from "./MainContentSection";
import MatchDetailsSection from "./MatchDetailsSection";


const DepthFrameScreen = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 5,
        px: { xs: 2, md: 5 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "960px",
        }}
      >
        <HeaderSection />
        <MainContentSection />
        <Box sx={{ width: '100%' }}>
          <MatchDetailsSection />
        </Box>

        <Box sx={{ pt: 5, pb: 3, px: 4 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="'Manrope-Bold', Helvetica"
            color="#111116"
            sx={{ lineHeight: "28px" }}
          >
            Estatísticas Rápidas
          </Typography>
        </Box>

        <QuickStatsSection />
      </Box>
    </Container>
  );
};

export default DepthFrameScreen;