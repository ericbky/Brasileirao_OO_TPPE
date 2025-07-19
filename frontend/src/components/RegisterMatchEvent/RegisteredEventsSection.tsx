import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

// Mock data
const eventData = [
  { minute: "12'", type: "Goal", player: "Liam Carter", action: "Edit / Delete" },
  { minute: "35'", type: "Foul", player: "Ethan Bennett", action: "Edit / Delete" },
  { minute: "68'", type: "Substitution", player: "Noah Thompson", action: "Edit / Delete" },
];

const RegisteredEventsSection = () => {
  return (
    <Box sx={{ px: 2, py: 1 }}>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          border: 1,
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="245px">
                <Typography variant="subtitle2" color="text.primary">
                  Minute
                </Typography>
              </TableCell>
              <TableCell width="262px">
                <Typography variant="subtitle2" color="text.primary">
                  Type
                </Typography>
              </TableCell>
              <TableCell width="256px">
                <Typography variant="subtitle2" color="text.primary">
                  Player
                </Typography>
              </TableCell>
              <TableCell width="164px">
                <Typography variant="subtitle2" color="text.secondary">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {eventData.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell sx={{ height: "72px", textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {row.minute}
                  </Typography>
                </TableCell>
                <TableCell sx={{ height: "72px", textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell sx={{ height: "72px", textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {row.player}
                  </Typography>
                </TableCell>
                <TableCell sx={{ height: "72px", textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 700, cursor: "pointer" }}
                  >
                    {row.action}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RegisteredEventsSection;