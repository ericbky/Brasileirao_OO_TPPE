import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

const FieldWrapperSection = () => {
  const [phase, setPhase] = useState("Quarter-Finals");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setPhase(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      p={2}
      maxWidth="480px"
      alignItems="flex-end"
    >
      <FormControl fullWidth sx={{ minWidth: "160px", flex: 1 }}>
        <Typography
          variant="subtitle1"
          color="text.primary"
          pb={1}
        >
          Phase
        </Typography>
        <Select
          value={phase}
          onChange={handleChange}
          displayEmpty
          sx={{
            height: "56px",
            borderRadius: "12px",
            "& .MuiSelect-select": {
              padding: "15px",
              fontFamily: "Manrope-Regular, Helvetica",
              color: "text.secondary",
            },
          }}
        >
          <MenuItem value="Quarter-Finals">Quarter-Finals</MenuItem>
          <MenuItem value="Semi-Finals">Semi-Finals</MenuItem>
          <MenuItem value="Finals">Finals</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FieldWrapperSection;