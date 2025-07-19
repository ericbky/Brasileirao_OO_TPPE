import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, FormControl, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";
import React from "react";

const EventDetailsSection = () => {
  const [eventType, setEventType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEventType(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: 2,
        p: 2,
        flexGrow: 1,
      }}
    >
      <FormControl fullWidth sx={{ minWidth: "160px" }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            pb: 1,
            color: "text.primary",
            fontFamily: "Manrope-Medium, Helvetica",
          }}
        >
          Event Type
        </Typography>
        <Select
          value={eventType}
          onChange={handleChange}
          displayEmpty
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            height: "56px",
            backgroundColor: "background.paper",
            borderRadius: "12px",
            border: 1,
            borderColor: "border.main",
            "& .MuiSelect-select": {
              fontFamily: "Manrope-Regular, Helvetica",
              color: "text.primary",
            },
          }}
          renderValue={(selected) =>
            !selected ? "Select event type" : selected
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
          <MenuItem value="Workshop">Workshop</MenuItem>
          <MenuItem value="Seminar">Seminar</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default EventDetailsSection;