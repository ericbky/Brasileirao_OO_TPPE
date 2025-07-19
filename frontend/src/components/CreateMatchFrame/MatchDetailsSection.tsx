import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const MatchDetailsSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
      width="100%"
      maxWidth="960px"
    >
      <Box
        display="flex"
        flexDirection="column"
        flex="1 1 240px"
        minWidth="160px"
      >
        <Typography variant="subtitle1" color="text.primary" pb={1}>
          Referee
        </Typography>
        <TextField
          fullWidth
          placeholder="Referee's Name"
          variant="outlined"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MatchDetailsSection;