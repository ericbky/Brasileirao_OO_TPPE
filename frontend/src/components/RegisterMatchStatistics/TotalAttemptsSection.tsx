import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const TotalAttemptsSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
    >
      <Box display="flex" flexDirection="column" minWidth="160px" flexGrow={1}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" pb={1} width="100%">
          <Typography variant="h6" color="text.primary">
            Shots on Target
          </Typography>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ex: 7"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              "& .MuiOutlinedInput-input": {
                color: "text.secondary",
                fontFamily: "Manrope-Regular, Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TotalAttemptsSection;