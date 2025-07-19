import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RegisterPlayerHistory = () => {
  const [player, setPlayer] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleClearFields = () => {
    setPlayer("");
    setTeam("");
    setStartDate("");
    setEndDate("");
  };

  const handleSaveHistory = () => {
    console.log({ player, team, startDate, endDate });
  };

  return (
    <Box display="flex" justifyContent="center" py={6}>
      <Box width="100%" maxWidth="960px" px={4}>
        <Typography variant="h1" gutterBottom>
          Register Player History
        </Typography>

        <Stack spacing={3} maxWidth="480px">
          {/* Player Select */}
          <FormControl fullWidth>
            <Select
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              displayEmpty
              sx={{
                height: 56,
                borderRadius: 2,
              }}
              renderValue={(selected) =>
                selected ? (
                  selected
                ) : (
                  <Typography color="text.secondary">
                    Select the player
                  </Typography>
                )
              }
            >
              <MenuItem value="Player 1">Player 1</MenuItem>
              <MenuItem value="Player 2">Player 2</MenuItem>
              <MenuItem value="Player 3">Player 3</MenuItem>
            </Select>
          </FormControl>

          {/* Team Select */}
          <FormControl fullWidth>
            <Select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              displayEmpty
              sx={{
                height: 56,
                borderRadius: 2,
              }}
              renderValue={(selected) =>
                selected ? (
                  selected
                ) : (
                  <Typography color="text.secondary">
                    Select the team
                  </Typography>
                )
              }
            >
              <MenuItem value="Team 1">Team 1</MenuItem>
              <MenuItem value="Team 2">Team 2</MenuItem>
              <MenuItem value="Team 3">Team 3</MenuItem>
            </Select>
          </FormControl>

          {/* Start Date */}
          <Box>
            <FormLabel>Start Date</FormLabel>
            <TextField
              fullWidth
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Today"
            />
          </Box>

          {/* End Date */}
          <Box>
            <FormLabel>End Date</FormLabel>
            <TextField
              fullWidth
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="Today"
            />
          </Box>

          {/* Buttons */}
          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            <Button variant="contained" color="secondary" onClick={handleClearFields}>
              Clear Fields
            </Button>
            <Button variant="contained" color="primary" onClick={handleSaveHistory}>
              Save History
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RegisterPlayerHistory;