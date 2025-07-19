import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent
} from "@mui/material";
import React from "react";

const CapacityInputSection = () => {
  const [coach, setCoach] = React.useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCoach(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      maxWidth="480px"
      alignItems="flex-end"
      gap={2}
      px={2}
      py={1.5}
      flexGrow={1}
    >
      <FormControl fullWidth sx={{ minWidth: "160px", flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
            color: "text.primary",
            pb: 1,
          }}
        >
          Away Coach
        </Typography>

        <Select
          value={coach}
          onChange={handleChange}
          displayEmpty
          sx={{
            height: "56px",
            bgcolor: "background.paper",
            borderRadius: "12px",
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
            selected ? selected : "Select Away Coach"
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* Add coach options here */}
          {/* <MenuItem value="Coach A">Coach A</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CapacityInputSection;