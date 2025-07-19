import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const RegisterMatchStatisticsSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      p={2}
      sx={{ maxWidth: "480px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ minWidth: "160px", flexGrow: 1 }}
      >
        <Box display="flex" flexDirection="column" pb={1} width="100%">
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Register Match Statistics
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 100"
          InputProps={{
            sx: {
              height: "56px",
              color: "text.secondary",
              fontFamily: "Manrope-Regular, Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default RegisterMatchStatisticsSection;