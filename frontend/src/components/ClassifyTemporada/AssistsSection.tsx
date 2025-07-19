import { Box, Tab, Tabs, Select, MenuItem, Typography, SelectChangeEvent } from "@mui/material";
import React, { useState, useEffect } from "react";

const AssistsSection = () => {
  const [value, setValue] = useState<number>(0);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | "">("");

  useEffect(() => {
    // Busca anos das partidas do backend
    fetch("/api/partidas")
      .then((res) => res.json())
      .then((data) => {
        const anos = Array.from(
          new Set(
            data.map((partida: any) => {
              // Suporte para campo "ano" ou "temporada"
              const val = partida.ano || partida.temporada || partida.year;
              return typeof val === "string" ? parseInt(val) : val;
            })
          )
        ).filter((v) => typeof v === "number" && !isNaN(v));
        (anos as number[]).sort((a, b) => b - a);
        setAvailableYears(anos as number[]);
        if (anos.length > 0) setSelectedYear(anos[0] as number);
      });
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        pb: 1.5,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "action.selected",
              height: 3,
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "text.secondary",
              fontWeight: "bold",
              fontSize: "14px",
              minWidth: "auto",
              px: 2,
              "&.Mui-selected": {
                color: "text.primary",
              },
            },
          }}
        >
          <Tab label="Jogadores" />
          <Tab label="Time" />
        </Tabs>
        <Box sx={{ minWidth: 120, ml: 2 }}>
          <Typography variant="body2" sx={{ mr: 1, display: "inline" }}>
            Temporada:
          </Typography>
          <Select
            value={selectedYear === "" ? undefined : selectedYear}
            onChange={handleYearChange}
            size="small"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            {availableYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      {/* ...aqui você pode renderizar os dados filtrados por selectedYear... */}
    </Box>
  );
};

export default AssistsSection;