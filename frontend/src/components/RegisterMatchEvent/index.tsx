import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import DescriptionSection from "./DescriptionSection";
import EventDetailsSection from "./EventDetailsSection";
import EventRegistrationSection from "./EventRegistrationSection";
import PlayerSelectionSection from "./PlayerSelectionSection";
import RegisteredEventsSection from "./RegisteredEventsSection";
import { ThemeProvider } from "./ThemeProvider";

const RegisterMatchEvent = () => {
  return (
    <ThemeProvider>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 5,
          px: { xs: 2, md: 5 },
        }}
      >
        <Stack maxWidth="960px" width="960px" spacing={2} py={2}>
          <Box p={2}>
            <Typography variant="h1">Register Match Event</Typography>
          </Box>

          <EventRegistrationSection />
          <EventDetailsSection />
          <DescriptionSection />
          <PlayerSelectionSection />

          <Box display="flex" justifyContent="flex-end" px={2} py={1.5}>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: "84px", height: "40px" }}
            >
              Add Event
            </Button>
          </Box>

          <Box px={2} pt={2} pb={1}>
            <Typography variant="h2">Registered Events</Typography>
          </Box>

          <RegisteredEventsSection />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterMatchEvent;