import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

const BORDER_COLOR = "#dde0e2";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf",
    },
    secondary: {
      main: "#f2f2f4",
    },
    text: {
      primary: "#111416",
      secondary: "#6b7582",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
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
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
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
          textTransform: "none",
          borderRadius: "20px",
          padding: "0 16px",
          height: "40px",
          minWidth: "84px",
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
        root: {
          borderRadius: "12px",
          height: "56px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: BORDER_COLOR,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: BORDER_COLOR,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3f7fbf",
          },
        },
        input: {
          padding: "15px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope-Medium, Helvetica",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          color: "#111416",
          marginBottom: "8px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
        },
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

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);