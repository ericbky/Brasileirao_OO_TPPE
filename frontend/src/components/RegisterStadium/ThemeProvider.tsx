import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#1160e8", // Azul do botão "Salvar"
    },
    secondary: {
      main: "#eff2f4", // Cinza claro do botão "Cancelar"
    },
    text: {
      primary: "#111116",
      secondary: "#607089",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#dbdde5",
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
  shape: {
    borderRadius: 12,
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
          backgroundColor: "#1160e8",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#0d4cba",
          },
        },
        containedSecondary: {
          backgroundColor: "#eff2f4",
          color: "#111116",
          "&:hover": {
            backgroundColor: "#dbdde5",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "12px",
          height: "56px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dbdde5",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: {
          padding: "15px",
          "&::placeholder": {
            color: "#607089",
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.subtitle1,
          marginBottom: "8px",
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
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

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};