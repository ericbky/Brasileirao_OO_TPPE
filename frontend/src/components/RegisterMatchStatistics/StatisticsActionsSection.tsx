import { Box, Button, Stack } from "@mui/material";
import React from "react";

const StatisticsActionsSection = () => {
  return (
    <Box width="100%" display="flex" justifyContent="flex-end">
      <Stack direction="row" spacing={1.5} padding={3} pr={4}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            minWidth: "84px",
            maxWidth: "480px",
            height: "40px",
            borderRadius: "20px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Clear Fields
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: "84px",
            maxWidth: "480px",
            height: "40px",
            borderRadius: "20px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          Save Statistics
        </Button>
      </Stack>
    </Box>
  );
};

export default StatisticsActionsSection;
