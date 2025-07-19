import React from "react";
import { Box, Button, Typography } from "@mui/material";

const HeaderSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      width="100%"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontFamily: "Poppins, sans-serif" }}
      >
        Partidas
      </Typography>

      {/* <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#eff2f4",
          color: "#111116",
          borderRadius: "12px",
          textTransform: "none",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          padding: "5px 16px",
          minWidth: "84px",
          maxWidth: "480px",
          height: "32px",
          "&:hover": {
            backgroundColor: "#e0e3e5",
          },
        }}
      >
        Nova Partida
      </Button> */}
    </Box>
  );
};

export default HeaderSection;