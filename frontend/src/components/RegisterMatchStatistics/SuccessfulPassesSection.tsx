import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const SuccessfulPassesSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      px={2}
      py={1.5}
      alignItems="flex-end"
    >
      <Box
        display="flex"
        flexDirection="column"
        minWidth="160px"
        flexGrow={1}
      >
        <Box display="flex" flexDirection="column" width="100%" pb={1}>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Successful Passes
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 300"
          InputProps={{
            sx: {
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              color: "text.secondary",
              "& input::placeholder": {
                color: "text.secondary",
                opacity: 1,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SuccessfulPassesSection;