import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const MainFormSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: 2,
        px: 2,
        py: 1.5,
        width: "100%",
        maxWidth: "960px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 240px",
          minWidth: "160px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ pb: 1, color: "text.primary" }}
        >
          Season
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="2025"
          InputProps={{
            sx: {
              borderRadius: "12px",
              backgroundColor: "background.paper",
              height: "56px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "text.secondary",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MainFormSection;