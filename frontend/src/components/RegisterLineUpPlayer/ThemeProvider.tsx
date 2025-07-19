import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf", // Blue color used for Save Lineup button
    },
    secondary: {
      main: "#d1d5db", // Light gray used for Clear Fields button and toggle background
    },
    text: {
      primary: "#111416", // Dark text color
      secondary: "#6b7582", // Gray text color for placeholders
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#dde0e2", // Border color
    error: {
      main: "#ff3b30",
    },
    warning: {
      main: "#ff9500",
    },
    info: {
      main: "#007aff",
    },
    success: {
      main: "#34c759",
    },
  },
  typography: {
    fontFamily: "'Manrope', Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "'Manrope-Bold', Helvetica",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h2: {
      fontFamily: "'Manrope-Medium', Helvetica",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    body1: {
      fontFamily: "'Manrope-Regular', Helvetica",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    button: {
      fontFamily: "'Manrope-Bold', Helvetica",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          height: "40px",
          padding: "0 16px",
          boxShadow: "none",
        },
        containedPrimary: {
          color: "#ffffff",
        },
        containedSecondary: {
          color: "#111416",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            height: "56px",
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "#dde0e2",
            },
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
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "51px",
          height: "31px",
          padding: "2px",
        },
        switchBase: {
          padding: "2px",
          "&.Mui-checked": {
            transform: "translateX(20px)",
          },
        },
        thumb: {
          width: "27px",
          height: "27px",
          boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
        },
        track: {
          borderRadius: "15.5px",
          backgroundColor: "#f2f2f4",
          opacity: "1 !important",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.h2,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f5f5f7",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};