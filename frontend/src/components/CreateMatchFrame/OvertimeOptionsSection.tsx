import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const OvertimeOptionsSection = () => {
  const fields = [
    { id: "home", label: "1st Half Goals - Home", value: "0" },
    { id: "away", label: "1st Half Goals - Away", value: "0" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        px: 2,
        py: 1.5,
        width: "100%",
        maxWidth: "960px",
      }}
    >
      {fields.map((field) => (
        <Box
          key={field.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 240px",
            minWidth: "160px",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            pb={1}
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {field.label}
          </Typography>
          <TextField
            fullWidth
            value={field.value}
            InputProps={{
              readOnly: true,
              sx: {
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "background.paper",
                "& .MuiInputBase-input": {
                  color: "text.secondary",
                  fontFamily: "Manrope-Regular, Helvetica",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                },
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default OvertimeOptionsSection;