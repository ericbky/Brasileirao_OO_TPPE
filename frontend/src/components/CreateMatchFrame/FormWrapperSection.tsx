import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const FormWrapperSection = () => {
  // Data for the form fields
  const formFields = [
    { id: "date", label: "Date", placeholder: "Select Date" },
    { id: "time", label: "Time", placeholder: "Select Time" },
  ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      spacing={2}
      sx={{
        px: 2,
        py: 1.5,
        width: "100%",
        maxWidth: "960px",
      }}
    >
      {formFields.map((field) => (
        <Box
          key={field.id}
          sx={{
            flex: "1 1 240px",
            minWidth: "160px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ pb: 1 }}
          >
            {field.label}
          </Typography>
            <TextField
              select
              fullWidth
              placeholder={field.placeholder}
              InputProps={{
                sx: {
                  height: "56px",
                  borderRadius: "12px",
                },
              }}
              SelectProps={{
                displayEmpty: true,
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
              }}
            >
            <MenuItem value="" disabled>
              <Typography color="text.secondary">
                {field.placeholder}
              </Typography>
            </MenuItem>
          </TextField>
        </Box>
      ))}
    </Stack>
  );
};

export default FormWrapperSection;