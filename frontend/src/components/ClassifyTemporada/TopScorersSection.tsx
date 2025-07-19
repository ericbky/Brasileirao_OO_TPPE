import { Box, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";

import React from "react";

const TopScorersSection = () => {
  const [year, setYear] = React.useState("2024");

    const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
    };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      p={2}
      width="100%"
      flexWrap="wrap"
      gap={1.5}
    >
      <Box>
        <Typography variant="h1" color="text.primary">
          Classificações da Temporada
        </Typography>
      </Box>

      <Select
        value={year}
        onChange={handleYearChange}
        size="small"
        sx={{
          bgcolor: "action.hover",
          borderRadius: 2,
          minWidth: "84px",
          height: "32px",
          "& .MuiSelect-select": {
            fontFamily: "'Manrope-Medium', Helvetica",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            padding: "5.5px 16px",
            textAlign: "center",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: { maxHeight: 200 },
          },
        }}
      >
        <MenuItem value="2024">2024</MenuItem>
        <MenuItem value="2023">2023</MenuItem>
        <MenuItem value="2022">2022</MenuItem>
      </Select>
    </Box>
  );
};

export default TopScorersSection;