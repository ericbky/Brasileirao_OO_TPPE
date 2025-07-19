import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const ShotsOffTargetSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
      maxWidth="480px"
    >
      <Box
        display="flex"
        flexDirection="column"
        minWidth="160px"
        flexGrow={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          pb={1}
          width="100%"
        >
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Shots Off Target
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
              backgroundColor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ShotsOffTargetSection;