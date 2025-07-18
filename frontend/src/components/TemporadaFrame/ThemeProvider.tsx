import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { ReactNode } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#111416", // Main text color from the design
    },
    secondary: {
      main: "#637c87", // Secondary text color used for subtitles and descriptions
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111416",
      secondary: "#637c87",
    },
    divider: "#dbe2e5", // Border color used in cards and tables
    grey: {
      100: "#eff2f4", // Background color for graph elements
      200: "#e5e8ea", // Border color for table rows
    },
    action: {
      active: "#757575", // Border color for graph elements
    },
  },
  typography: {
    fontFamily: "'Manrope', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "0",
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: "0",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0",
      color: "#637c87",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0",
    },
    body2: {
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0",
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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};