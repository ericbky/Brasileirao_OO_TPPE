import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StadiumDetailsSection = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="space-between"
      gap="12px"
      p={2}
      width="100%"
    >
      <Box display="flex" flexDirection="column" maxWidth="288px">
        <Typography variant="h1" color="text.primary">
          Estádios
        </Typography>
      </Box>

      <Link to="/registrar-estadio" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          sx={{
            minWidth: "84px",
            maxWidth: "480px",
            height: "32px",
            backgroundColor: "background.paper",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            Novo Estádio
          </Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default StadiumDetailsSection;