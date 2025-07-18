import React from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#111116",
    },
    secondary: {
      main: "#607089",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111116",
      secondary: "#607089",
    },
    grey: {
      100: "#EFF2F4",
      200: "#DBDDE5",
    },
  },
  typography: {
    fontFamily: "Manrope, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      fontFamily: "Manrope-Bold, Helvetica",
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28px",
      fontFamily: "Manrope-Bold, Helvetica",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "20px",
      fontFamily: "Manrope-Bold, Helvetica",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
      fontFamily: "Manrope-Bold, Helvetica",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      fontFamily: "Manrope-Regular, Helvetica",
      color: "#607089",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      fontFamily: "Manrope-Medium, Helvetica",
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      fontFamily: "Manrope-Medium, Helvetica",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          padding: "0px 16px",
          height: "32px",
          backgroundColor: "#EFF2F4",
          color: "#111116",
          "&:hover": {
            backgroundColor: "#DBDDE5",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          border: "1px solid #DBDDE5",
          padding: "24px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h3,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          backgroundColor: "#EFF2F4",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};