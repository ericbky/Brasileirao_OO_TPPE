import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions,
} from "@mui/material";
import React, { ReactNode } from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3f7fbf", // Azul do botão Salvar Jogador
    },
    secondary: {
      main: "#F2F2F5", // Cinza claro de botões secundários e fundo de toggle
    },
    text: {
      primary: "#111416", // Cor principal do texto
      secondary: "#6b7582", // Cor de texto secundário (placeholders, etc.)
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#dde0e2",
    grey: {
      100: "#f2f2f4",
      200: "#dde0e2",
      500: "#6b7582",
      900: "#111416",
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
        root: ({ theme }) => ({
        ...theme.typography.button, // aplica a fonte correta (Manrope-Bold, 14px, etc.)
        textTransform: "none", // redundante, mas garante
        height: "40px",
        borderRadius: "12px",
        padding: "0 16px",
        minWidth: "84px",
        }),
        containedPrimary: {
        color: "#ffffff",
        },
        containedSecondary: {
        color: "#111416",
        backgroundColor: "#f2f2f4",
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
            "&:hover fieldset": {
              borderColor: "#dde0e2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3f7fbf",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "Manrope-Medium, Helvetica",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#6b7582",
            opacity: 1,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 51,
          height: 31,
          padding: 2,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            "&.Mui-checked": {
              transform: "translateX(20px)",
              "& + .MuiSwitch-track": {
                backgroundColor: "#f2f2f4",
                opacity: 1,
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: "#ffffff",
              },
            },
          },
          "& .MuiSwitch-thumb": {
            width: 27,
            height: 27,
            borderRadius: "13.5px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
          },
          "& .MuiSwitch-track": {
            borderRadius: "15.5px",
            backgroundColor: "#f2f2f4",
            opacity: 1,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "56px",
          borderRadius: "12px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dde0e2",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dde0e2",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3f7fbf",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.h6,
          color: theme.palette.text.primary,
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
          fontWeight: 500,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.body1,
          color: theme.palette.text.primary,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
          color: theme.palette.text.secondary,
        }),
      },
    },
  },
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
