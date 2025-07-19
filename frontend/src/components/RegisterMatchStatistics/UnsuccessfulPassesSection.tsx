import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const UnsuccessfulPassesSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      p={2}
      flexGrow={0}
    >
      <Box display="flex" flexDirection="column" minWidth="160px" flexGrow={1}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" pb={1} width="100%">
          <Typography variant="h6" color="text.primary">
            Corner Kicks
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 5"
          variant="outlined"
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

export default UnsuccessfulPassesSection;