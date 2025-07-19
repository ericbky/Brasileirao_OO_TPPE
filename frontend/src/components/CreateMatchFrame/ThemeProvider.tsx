import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React, { ReactNode } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf", // Save button background color
    },
    secondary: {
      main: "#f2f2f4", // Cancel button background color
    },
    text: {
      primary: "#111416", // Main text color
      secondary: "#6b7582", // Placeholder text color
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#dde0e2", // Border color
  },
  typography: {
    fontFamily: "Manrope, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Manrope-Bold, Helvetica",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    subtitle1: {
      fontFamily: "Manrope-Medium, Helvetica",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    body1: {
      fontFamily: "Manrope-Regular, Helvetica",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
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
          borderRadius: "20px",
          padding: "0 16px",
          height: "40px",
          textTransform: "none",
          boxShadow: "none",
        },
        containedPrimary: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedSecondary: {
          color: "#111416",
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
        },
        input: {
          padding: "15px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.subtitle1,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "51px",
          height: "31px",
          padding: "2px",
        },
        track: {
          borderRadius: "15.5px",
          backgroundColor: "#f2f2f4",
        },
        thumb: {
          width: "27px",
          height: "27px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
  },
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);