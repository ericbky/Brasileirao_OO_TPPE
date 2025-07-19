import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";

const technicians = [
  { name: "Ethan Carter", age: 38 },
  { name: "Olivia Bennett", age: 45 },
  { name: "Noah Thompson", age: 52 },
  { name: "Ava Martinez", age: 40 },
  { name: "Liam Harris", age: 48 },
];

const TechnicianListSection = () => {
  const handleTechnicianClick = (technician: { name: string; age: number }) => {
    console.log("Selected technician:", technician);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 320,
      }}
    >
      {/* Campo de busca */}
      <Box sx={{ p: 2 }}>
        <Autocomplete
          freeSolo
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Técnicos"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: "secondary.main",
                  height: "48px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              }}
            />
          )}
        />
      </Box>

      {/* Título */}
      <Box sx={{ px: 2, pt: 2, pb: 1 }}>
        <Typography variant="h2">Técnicos</Typography>
      </Box>

      {/* Lista */}
      <List disablePadding>
        {technicians.map((technician, index) => (
          <ListItem
            key={index}
            onClick={() => handleTechnicianClick(technician)}
            sx={{
              py: 2,
              px: 2,
              height: "72px",
              justifyContent: "space-between",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(17, 96, 234, 0.04)",
              },
            }}
          >
            <Stack direction="column" spacing={0}>
              <Typography variant="subtitle1">{technician.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {technician.age} anos
              </Typography>
            </Stack>
            <ChevronRightIcon color="action" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechnicianListSection;