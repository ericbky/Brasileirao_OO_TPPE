import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
} from "@mui/material";
import React, { FC, ReactNode } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf", // Blue button color
    },
    secondary: {
      main: "#6b7582", // Gray text color
    },
    text: {
      primary: "#111416", // Dark text
      secondary: "#6b7582", // Gray text
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#e5e8ea", // Used for table row borders, etc.
  },
  typography: {
    fontFamily: "Manrope, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Manrope-Bold, Helvetica",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h2: {
      fontFamily: "Manrope-Bold, Helvetica",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "23px",
    },
    subtitle1: {
      fontFamily: "Manrope-Medium, Helvetica",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    subtitle2: {
      fontFamily: "Manrope-Medium, Helvetica",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
    },
    body1: {
      fontFamily: "Manrope-Regular, Helvetica",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Manrope-Regular, Helvetica",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    button: {
      fontFamily: "Manrope-Bold, Helvetica",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          height: "56px",
          "& fieldset": {
            borderColor: "#dde0e2",
          },
          "&:hover fieldset": {
            borderColor: "#dde0e2",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          ...theme.typography.subtitle1,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          height: "72px",
          borderColor: "#e5e8ea",
        },
        head: ({ theme }: { theme: Theme }) => ({
          ...theme.typography.subtitle2,
          color: theme.palette.text.primary,
        }),
        body: ({ theme }: { theme: Theme }) => ({
          ...theme.typography.body2,
          color: theme.palette.secondary.main,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }: { theme: Theme }) => ({
          ...theme.typography.subtitle1,
        }),
        secondary: ({ theme }: { theme: Theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};