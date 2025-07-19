import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

const MainContentSection = ({ onSelectCity }: { onSelectCity?: (city: string) => void }) => {
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>(""); // Adicionado estado para o valor selecionado

  useEffect(() => {
    axios
      .get("http://localhost:8000/estadio/listar_estadios")
      .then((response) => {
        const cities = response.data.map((stadium: any) => String(stadium.cidade)); // Garante que cada cidade seja uma string
        const uniqueCities: string[] = Array.from(new Set(cities)); // Remove duplicatas e garante o tipo correto
        setCityOptions(uniqueCities);
      })
      .catch(() => {
        setCityOptions([]);
      });
  }, []);

  useEffect(() => {
    if (selectedCity === "") {
      setSelectedCity("");
    }
  }, [selectedCity]);

  // Função para limpar filtros
  const handleClearFilters = () => {
    setSelectedCity("");
    onSelectCity?.("");
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "480px", width: "100%", padding: 3 }}>
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
            value={selectedCity}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedCity(value);
              onSelectCity?.(value);
            }}
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
            renderValue={() => selectedCity ? selectedCity : "Selecione uma Cidade"}
          >
            <MenuItem disabled value="">
              Selecione uma Cidade
            </MenuItem>
            {cityOptions.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Botão de limpar filtro geral, se necessário */}
        {/* <Button onClick={handleClearFilters}>Limpar Filtros</Button> */}
      </Box>
    </>
  );
};

export default MainContentSection;