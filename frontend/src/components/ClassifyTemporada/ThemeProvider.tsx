// src/components/ThemeProvider.tsx
import React, { PropsWithChildren } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#111416", // cor principal de texto
    },
    secondary: {
      main: "#637c87", // cor secundária (subtítulos etc)
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111416",
      secondary: "#637c87",
    },
    divider: "#dbe2e5",
    grey: {
      100: "#eff2f4", // fundo de gráficos
      200: "#e5e8ea", // bordas e linhas
    },
    action: {
      active: "#757575", // bordas ou ícones ativos
      hover: "#f5f5f5",
      selected: "#111416",
    },
  },
  typography: {
    fontFamily: "'Manrope', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#637c87",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "13px",
      fontWeight: 700,
      color: "#637c87",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          border: "1px solid #dbe2e5",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "12px 16px",
          borderColor: theme.palette.divider,
        }),
        head: ({ theme }) => ({
          ...theme.typography.h3,
          color: theme.palette.text.primary,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h3,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};