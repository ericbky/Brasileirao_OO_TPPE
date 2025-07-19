import { Box, Button, Stack } from "@mui/material";
import React from "react";

const SaveButtonSection = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="flex-end"
      px={2}
      py={2}
      maxWidth="960px"
    >
      <Stack direction="row" spacing={1.5}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            minWidth: "84px",
            height: "40px",
            fontWeight: 700,
            fontFamily: "Manrope-Bold, Helvetica",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: "84px",
            height: "40px",
            fontWeight: 700,
            fontFamily: "Manrope-Bold, Helvetica",
          }}
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default SaveButtonSection;