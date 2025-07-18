import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainContentSection = () => {
  const cityOptions: string[] = [];

  return (
    <>
      <Box sx={{ padding: 3, maxWidth: "480px" }}>
        <FormControl fullWidth>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              mb: 2,
              fontFamily: "'Manrope-Medium', Helvetica",
              color: "#111116",
            }}
          >
            Cidade
          </Typography>

          <Select
            displayEmpty
            value=""
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              height: "56px",
              borderRadius: "8px",
              "& .MuiSelect-select": {
                color: "#607089",
                fontFamily: "'Manrope-Regular', Helvetica",
                fontSize: "16px",
                lineHeight: "24px",
              },
            }}
            renderValue={() => "Select City"}
          >
            {cityOptions.length > 0 ? (
              cityOptions.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled value="">
                No cities available
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>

      {/* Botão fora da box acima, com alinhamento à esquerda */}
      <Box
        sx={{
          px: 3,
          pb: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C4D4EB",
            color: "#121417",
            width: "84px",
            height: "40px",
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "'Manrope-Medium', Helvetica",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#b3c6de",
            },
          }}
        >
          Filtrar
        </Button>
      </Box>
    </>
  );
};

export default MainContentSection;