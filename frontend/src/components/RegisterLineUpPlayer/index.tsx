import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const RegisterLineUpPlayer = () => {
  const [selectedMatch, setSelectedMatch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [isStarter, setIsStarter] = useState(false);
  const [enteredDuringGame, setEnteredDuringGame] = useState(false);
  const [substituted, setSubstituted] = useState(false);
  const [minutesOnField, setMinutesOnField] = useState("");
  const [position, setPosition] = useState("");

  const handleClearFields = () => {
    setSelectedMatch("");
    setSelectedPlayer("");
    setIsStarter(false);
    setEnteredDuringGame(false);
    setSubstituted(false);
    setMinutesOnField("");
    setPosition("");
  };

  const handleSaveLineup = () => {
    console.log({
      selectedMatch,
      selectedPlayer,
      isStarter,
      enteredDuringGame,
      substituted,
      minutesOnField,
      position,
    });
  };

  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="flex-start"
      justifyContent="center"
      px={2}
      py={5}
      bgcolor="background.default"
    >
      <Container maxWidth="md">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Register Lineup
          </Typography>
        </Box>

        <Stack spacing={3} maxWidth="480px" px={4}>
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="select-match">
              Select the match
            </InputLabel>
            <Select
              displayEmpty
              value={selectedMatch}
              onChange={(e) => setSelectedMatch(e.target.value)}
              inputProps={{ id: "select-match" }}
              sx={{ height: "56px", borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>Select the match</em>
              </MenuItem>
              {/* Populate dynamically */}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel shrink htmlFor="select-player">
              Select the player
            </InputLabel>
            <Select
              displayEmpty
              value={selectedPlayer}
              onChange={(e) => setSelectedPlayer(e.target.value)}
              inputProps={{ id: "select-player" }}
              sx={{ height: "56px", borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>Select the player</em>
              </MenuItem>
              {/* Populate dynamically */}
            </Select>
          </FormControl>

          {[
            {
              label: "Starter",
              state: isStarter,
              setState: setIsStarter,
            },
            {
              label: "Entered During the Game",
              state: enteredDuringGame,
              setState: setEnteredDuringGame,
            },
            {
              label: "Substituted",
              state: substituted,
              setState: setSubstituted,
            },
          ].map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              height="56px"
              px={4}
              borderRadius="12px"
              bgcolor="background.paper"
            >
              <Typography variant="body1" noWrap>
                {item.label}
              </Typography>
              <Switch
                checked={item.state}
                onChange={(e) => item.setState(e.target.checked)}
              />
            </Box>
          ))}

          <Box>
            <FormLabel
              component="legend"
              sx={{ display: "block", mb: 2 }}
            >
              Minutes on the Field
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Ex: 78"
              value={minutesOnField}
              onChange={(e) => setMinutesOnField(e.target.value)}
            />
          </Box>

          <Box>
            <FormLabel
              component="legend"
              sx={{ display: "block", mb: 2 }}
            >
              Position on the Field
            </FormLabel>
            <TextField
              fullWidth
              placeholder="Ex: Forward, Midfielder, Defender..."
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            gap={1.5}
            width="100%"
            py={3}
            px={4}
          >
              <Button
                variant="contained"
                sx={{
                    backgroundColor: "#d1d5db",
                    color: "#111416",
                    minWidth: "84px",
                    borderRadius: "20px",
                    '&:hover': {
                    backgroundColor: "#c4c4c4",
                    },
                }}
                onClick={handleClearFields}
                >
                Clear Fields
              </Button>
                <Button
                variant="contained"
                color="primary"
                onClick={handleSaveLineup}
                sx={{
                    minWidth: "84px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#3f7fbf",
                    color: "#ffffff",
                    '&:hover': {
                    backgroundColor: "#366da5",
                    },
                }}
                >
                Save Lineup
                </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegisterLineUpPlayer;