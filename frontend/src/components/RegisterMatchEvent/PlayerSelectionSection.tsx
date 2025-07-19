import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, FormControl, Select, Typography, SelectChangeEvent } from "@mui/material";
import React from "react";

const PlayerSelectionSection = () => {
  const [match, setMatch] = React.useState("");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setMatch(event.target.value);
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
    >
      <Box
        display="flex"
        flexDirection="column"
        minWidth="160px"
        flexGrow={1}
      >
        <FormControl fullWidth>
          <Typography
            variant="subtitle1"
            color="text.primary"
            pb={1}
            fontFamily="Manrope-Medium, Helvetica"
            fontWeight={500}
          >
            Match
          </Typography>
          <Select
            value={match}
            onChange={handleChange}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {
              if (!selected) {
                return (
                  <Typography
                    color="text.primary"
                    fontFamily="Manrope-Regular, Helvetica"
                    fontWeight={400}
                  >
                    Select match
                  </Typography>
                );
              }
              return selected;
            }}
            sx={{
              height: "56px",
              borderRadius: "12px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.divider,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.divider,
              },
            }}
          >
            {/* Menu items would be populated here */}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PlayerSelectionSection;