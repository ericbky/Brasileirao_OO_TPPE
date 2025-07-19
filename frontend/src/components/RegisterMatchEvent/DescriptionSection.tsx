import { Box, FormControl, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";

const DescriptionSection = () => {
  const [player, setPlayer] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
    setPlayer(event.target.value);
    };

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
      <FormControl fullWidth sx={{ minWidth: "160px", flex: 1 }}>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            pb: 1,
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
          }}
        >
          Player
        </Typography>
        <Select
          value={player}
          onChange={handleChange}
          displayEmpty
           sx={{
            height: "56px",
            borderRadius: "12px",
            border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: (theme: Theme) => theme.palette.divider,
            },
            }}

          renderValue={(selected) =>
            !selected ? (
              <Typography
                sx={{
                  fontFamily: "Manrope-Regular, Helvetica",
                  fontWeight: 400,
                  color: "text.primary",
                }}
              >
                Select player
              </Typography>
            ) : (
              selected
            )
          }
        >
          <MenuItem value="" disabled>
            <em>Select player</em>
          </MenuItem>
          {/* Add player options here when available */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DescriptionSection;