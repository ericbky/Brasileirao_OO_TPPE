import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";

interface StadiumWrapperSectionProps {
  onSelectStadium?: (stadium: string) => void;
}

const StadiumWrapperSection: React.FC<StadiumWrapperSectionProps> = ({ onSelectStadium }) => {
  const [stadiums, setStadiums] = useState<{ label: string; value: string }[]>([]);
  const [selectedStadium, setSelectedStadium] = useState<string>(""); // Adicionado estado para o valor selecionado

  useEffect(() => {
    axios
      .get("http://localhost:8000/estadio/listar_estadios")
      .then((response) => {
        const data = response.data.map((stadium: any) => ({
          label: stadium.nome,
          value: stadium.nome, // Alterado para usar o nome como valor
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
          value={selectedStadium}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedStadium(value);
            onSelectStadium?.(value);
          }}
          sx={{
            height: 56,
            borderRadius: "8px",
            "& .MuiSelect-select": {
              color: "grey.300",
              padding: "15px",
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={() => selectedStadium ? selectedStadium : "Selecione um Estádio"}
        >
          <MenuItem disabled value="">
            Selecione um Estádio
          </MenuItem>
          {stadiums.map((stadium, index) => (
            <MenuItem key={index} value={stadium.value}>
              {stadium.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StadiumWrapperSection;
