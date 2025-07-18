import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";

const StadiumWrapperSection = () => {
  const [stadiums, setStadiums] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/estadio/listar_estadios")
      .then((response) => {
        const data = response.data.map((stadium: any) => ({
          label: stadium.nome,
          value: stadium.id.toString(),
        }));
        setStadiums(data);
      })
      .catch(() => {
        setStadiums([]);
      });
  }, []);

  return (
    <Box sx={{ p: 3, maxWidth: "480px" }}>
      <FormControl fullWidth>
        <Typography
          variant="subtitle1"
          component="label"
          sx={{
            color: "text.primary",
            pb: 2,
            display: "block",
          }}
        >
          Nome
        </Typography>

        <Select
          displayEmpty
          value=""
          sx={{
            height: 56,
            borderRadius: "8px",
            "& .MuiSelect-select": {
              color: "grey.300",
              padding: "15px",
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={() => "Select Estádium"}
        >
          {stadiums.length > 0 ? (
            stadiums.map((stadium, index) => (
              <MenuItem key={index} value={stadium.value}>
                {stadium.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled value="">
              No stadiums available
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StadiumWrapperSection;
