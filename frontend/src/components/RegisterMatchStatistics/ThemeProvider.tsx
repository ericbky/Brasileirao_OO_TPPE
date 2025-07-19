import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf", // Blue button color from the UI
    },
    secondary: {
      main: "#f2f2f4", // Light gray button color
    },
    text: {
      primary: "#111416", // Dark text color used for headings and labels
      secondary: "#6b7582", // Gray text color used for placeholders
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#dde0e2", // Border color for inputs
  },
  typography: {
    fontFamily: "Manrope, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Manrope-Bold, Helvetica",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h6: {
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
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          height: "40px",
          padding: "0 16px",
        },
        containedPrimary: {
          backgroundColor: "#3f7fbf",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#366da3",
          },
        },
        containedSecondary: {
          backgroundColor: "#f2f2f4",
          color: "#111416",
          "&:hover": {
            backgroundColor: "#e5e5e8",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "12px",
          height: "56px",
          borderColor: theme.palette.divider,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.divider,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: {
          padding: "15px",
          "&::placeholder": {
            color: "#6b7582",
            opacity: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.h6,
          color: theme.palette.text.primary,
          marginBottom: "8px",
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.h6,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h6,
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
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};