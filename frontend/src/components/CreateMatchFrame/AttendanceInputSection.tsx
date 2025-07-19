import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import React from "react";

const AttendanceInputSection = () => {
  // Data for the dropdown options could be populated here
  const coaches: { id: string; name: string }[] = [];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: 2,
        p: 2,
        maxWidth: "480px",
      }}
    >
      <FormControl
        fullWidth
        sx={{
          minWidth: "160px",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
            color: "text.primary",
            pb: 1,
          }}
        >
          Home Coach
        </Typography>

        <Select
          displayEmpty
          value=""
          sx={{
            height: "56px",
            bgcolor: "background.paper",
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <MenuItem value="" disabled>
            <Typography
              sx={{
                fontFamily: "Manrope-Regular, Helvetica",
                fontWeight: 400,
                color: "text.primary",
              }}
            >
              Select Home Coach
            </Typography>
          </MenuItem>

          {coaches.map((coach, index) => (
            <MenuItem key={index} value={coach.id}>
              {coach.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AttendanceInputSection;