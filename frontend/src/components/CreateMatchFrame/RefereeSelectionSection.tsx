import { Box, FormControl, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const RefereeSelectionSection = () => {
  const [awayTeam, setAwayTeam] = useState("");

    const handleChange = (event: SelectChangeEvent<string>) => {
    setAwayTeam(event.target.value);
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        px: 2,
        py: 1.5,
        width: "100%",
        maxWidth: "960px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 240px",
          minWidth: "160px",
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            mb: 1,
          }}
        >
          Away Team
        </Typography>
        <FormControl fullWidth>
          <Select
            value={awayTeam}
            onChange={handleChange}
            displayEmpty
            sx={{
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
              fontFamily: "Manrope-Regular, Helvetica",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
            }}
            renderValue={(selected) =>
              selected ? selected : "Select Away Team"
            }
          >
            <MenuItem value="">
              <Typography
                sx={{
                  fontFamily: "Manrope-Regular, Helvetica",
                  fontWeight: 400,
                  color: "text.primary",
                }}
              >
                Select Away Team
              </Typography>
            </MenuItem>
            {/* Map team options here */}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RefereeSelectionSection;