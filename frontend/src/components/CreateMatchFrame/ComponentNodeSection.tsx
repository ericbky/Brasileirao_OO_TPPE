import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent
} from "@mui/material";
import React, { useState } from "react";

const ComponentNodeSection = () => {
  const [stadium, setStadium] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setStadium(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: 2,
        p: 3,
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "320px",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            pb: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              color: "text.primary",
            }}
          >
            Stadium
          </Typography>
        </Box>

        <FormControl fullWidth>
          <Select
            value={stadium}
            onChange={handleChange}
            displayEmpty
            sx={{
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "& .MuiSelect-select": {
                fontFamily: "Manrope-Regular, Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.primary",
              },
            }}
            renderValue={(selected) =>
              selected ? selected : "Select Stadium"
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add stadium options here */}
            {/* <MenuItem value="Stadium A">Stadium A</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ComponentNodeSection;