import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const statisticsData = [
  { id: "home", label: "Home Team Goals", value: "0" },
  { id: "away", label: "Away Team Goals", value: "0" },
];

const MatchStatisticsSection = () => {
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
      {statisticsData.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 240px",
            minWidth: "160px",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            pb={1}
            sx={{
              fontFamily: "Manrope-Medium, Helvetica",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
            }}
          >
            {item.label}
          </Typography>
          <TextField
            fullWidth
            value={item.value}
            variant="outlined"
            InputProps={{
              sx: {
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "background.paper",
                "& .MuiOutlinedInput-input": {
                  color: "text.secondary",
                  fontFamily: "Manrope-Regular, Helvetica",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                },
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default MatchStatisticsSection;