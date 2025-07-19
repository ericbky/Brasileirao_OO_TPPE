import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const BallPossessionSection = () => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} px={4} py={3}>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        minWidth="320px"
      >
        <Box pb={1}>
          <Typography variant="subtitle1" color="text.primary">
            Posse de Bola (%)
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 65"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default BallPossessionSection;