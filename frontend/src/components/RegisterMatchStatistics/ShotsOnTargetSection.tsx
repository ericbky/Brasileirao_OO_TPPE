import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const ShotsOnTargetSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
      sx={{ maxWidth: 480 }}
    >
      <Box display="flex" flexDirection="column" sx={{ minWidth: 320, flexGrow: 1 }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" pb={1} width="100%">
          <Typography variant="h6" color="text.primary">
            Posse de Bola
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 55 (adicionar só número em %)"
          variant="outlined"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
              "& input::placeholder": {
                color: "text.secondary",
                opacity: 1,
                fontFamily: "Manrope-Regular, Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
              },
              "& input": {
                color: "text.primary",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ShotsOnTargetSection;