import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

// Mock data for teams
const teams = [
  { id: 1, name: "Team 1" },
  { id: 2, name: "Team 2" },
  { id: 3, name: "Team 3" },
];

const PenaltyOptionsSection = () => {
  const [homeTeam, setHomeTeam] = React.useState("");

  const handleHomeTeamChange = (event: SelectChangeEvent<string>) => {
    setHomeTeam(event.target.value);
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
          component="div"
          pb={1}
          sx={{
            fontFamily: "Manrope-Medium, Helvetica",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          Home Team
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            value={homeTeam}
            onChange={handleHomeTeamChange}
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "background.paper",
              fontFamily: "Manrope-Regular, Helvetica",
              fontWeight: 400,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            }}
            renderValue={(selected) =>
              selected
                ? teams.find((team) => team.id === Number(selected))?.name
                : "Select Home Team"
            }
          >
            <MenuItem value="" disabled>
              <Typography
                sx={{
                  fontFamily: "Manrope-Regular, Helvetica",
                  fontWeight: 400,
                  color: "text.primary",
                }}
              >
                Select Home Team
              </Typography>
            </MenuItem>
            {teams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PenaltyOptionsSection;