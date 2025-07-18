import React from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#111416",
    },
    secondary: {
      main: "#6b7282",
    },
    background: {
      default: "#ffffff",
      paper: "#f2f2f4",
    },
    text: {
      primary: "#111416",
      secondary: "#6b7282",
      disabled: "#607089",
    },
    action: {
      active: "#c4d3ea",
    },
    divider: "#dde0e2",
    grey: {
      100: "#f2f2f4",
      200: "#dbdde5",
      300: "#607089",
      400: "#6b7282",
    },
  },
  typography: {
    fontFamily: "'Manrope', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Bold', Helvetica",
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Bold', Helvetica",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Bold', Helvetica",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Bold', Helvetica",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Medium', Helvetica",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Medium', Helvetica",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Regular', Helvetica",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: 0,
      fontFamily: "'Manrope-Regular', Helvetica",
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
          backgroundColor: "#f2f2f4",
          color: "#111416",
          "&:hover": {
            backgroundColor: "#e5e5e7",
          },
        },
        containedPrimary: {
          backgroundColor: "#c4d3ea",
          "&:hover": {
            backgroundColor: "#b3c2d9",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid #dbdde5",
          backgroundColor: "#ffffff",
          height: "56px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        input: {
          padding: "15px",
          color: "#607089",
          "&::placeholder": {
            color: "#607089",
            opacity: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        notchedOutline: {
          borderColor: "#dbdde5",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          border: "1px solid #dde0e2",
          padding: "24px",
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
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle1,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h3,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
          color: theme.palette.text.secondary,
        }),
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