import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const OffsidesSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
      flexGrow={0}
      flexShrink={0}
      maxWidth="480px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
        minWidth="160px"
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
            Offsides
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Ex: 2"
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
                lineHeight: "24px",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default OffsidesSection;
