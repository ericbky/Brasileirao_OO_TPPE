import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const EventRegistrationSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "480px",
        alignItems: "flex-end",
        gap: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "160px",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            mb: 1,
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
          }}
        >
          Minute
        </Typography>
        <TextField
          fullWidth
          placeholder="Ex: 45"
          variant="outlined"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "border.main",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EventRegistrationSection;