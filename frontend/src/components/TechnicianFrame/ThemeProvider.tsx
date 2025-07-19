import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#1160ea", // Azul do botão Salvar
    },
    secondary: {
      main: "#eff2f4", // Cinza claro dos botões e fundo da busca
    },
    error: {
      main: "#dc1b24", // Vermelho padrão
    },
    text: {
      primary: "#111116", // Títulos e labels
      secondary: "#607089", // Texto secundário
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#e5e8ea", // Divisores de tabela
  },

  typography: {
    fontFamily: "Manrope, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "23px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    button: {
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
          height: "40px",
          minWidth: "84px",
          padding: "0 16px",
        },
        contained: {
          boxShadow: "none",
        },
        containedPrimary: {
          backgroundColor: "#1160ea",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#0d4bc7",
          },
        },
        containedSecondary: {
          backgroundColor: "#eff2f4",
          color: "#111116",
          "&:hover": {
            backgroundColor: "#e0e3e6",
          },
        },
        text: {
          color: "#111116",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "32px",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#dbdde5",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1160ea",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1160ea",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.subtitle1,
          color: theme.palette.text.primary,
        }),
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          borderColor: "#e5e8ea",
        },
        head: ({ theme }) => ({
          ...theme.typography.body2,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body2,
          color: theme.palette.text.secondary,
        }),
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.subtitle1,
          color: theme.palette.text.primary,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
          color: theme.palette.text.secondary,
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #dbdde5",
          borderRadius: "8px",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#e5e8ea",
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