import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#6C5DD3", dark: "black", contrastText: "white" },
    secondary: { main: "#E91F63" },
    text: { primary: "#808191", disabled: "#D1D1D1" },
    background: { primary: "#F1F5F9", dark: "F5F5FA66" },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontFamily: "Lato",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "32.72px",
          textAlign: "left",
          color: "#1C1D21",
        },
        body1: {
          fontFamily: "Lato",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25.45px",
          textAlign: "left",
          color: "#8181A5",
        },
        body2: {
          fontFamily: "Lato",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          textAlign: "left",
          // color: "#808191",
        },
      },
    },
  },
});
