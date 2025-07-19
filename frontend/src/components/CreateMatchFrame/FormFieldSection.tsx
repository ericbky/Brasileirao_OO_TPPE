import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const FormFieldSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      p={1.5}
      maxWidth="480px"
      alignItems="flex-end"
    >
      <Box
        display="flex"
        flexDirection="column"
        minWidth="160px"
        flexGrow={1}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          gutterBottom
        >
          Phase Type
        </Typography>
        <TextField
          fullWidth
          value="Elimination"
          InputProps={{ readOnly: true }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              height: "56px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default FormFieldSection;