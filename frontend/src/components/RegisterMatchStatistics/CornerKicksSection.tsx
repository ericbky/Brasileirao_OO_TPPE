import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const CornerKicksSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      px={4}
      py={3}
      maxWidth="480px"
      alignItems="flex-end"
    >
      <Box
        display="flex"
        flexDirection="column"
        minWidth="160px"
        flexGrow={1}
      >
        <Box pb={1}>
          <Typography variant="subtitle1" color="text.primary">
            Corner Kicks
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 4"
          variant="outlined"
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

export default CornerKicksSection;