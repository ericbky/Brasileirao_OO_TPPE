import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const FoulsCommittedSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={4}
      py={3}
      flexGrow={1}
      maxWidth="480px"
    >
      <Box display="flex" flexDirection="column" minWidth={160} flexGrow={1}>
        <Box pb={1}>
          <Typography variant="subtitle1" color="text.primary">
            Fouls Committed
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 15"
          variant="outlined"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "white",
              "& .MuiOutlinedInput-input": {
                fontFamily: "Manrope-Regular, Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.secondary",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default FoulsCommittedSection;