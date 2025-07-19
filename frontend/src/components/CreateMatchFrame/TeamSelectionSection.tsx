import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const TeamSelectionSection = () => {
  const formFields = [
    {
      id: "attendance",
      label: "Attendance",
      placeholder: "Enter Attendance",
    },
    {
      id: "maximumCapacity",
      label: "Maximum Capacity",
      placeholder: "Enter Maximum Capacity",
    },
  ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      sx={{ px: 2, py: 1.5, maxWidth: "960px" }}
    >
      {formFields.map((field) => (
        <Box
          key={field.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 160px",
            minWidth: "160px",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{
              pb: 1,
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
            placeholder={field.placeholder}
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
                  fontWeight: 400,
                  lineHeight: "24px",
                },
              },
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default TeamSelectionSection;