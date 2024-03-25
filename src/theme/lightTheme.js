import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        primary: { main: "#6C5DD3", },
        secondary: { main: "#E91F63" },
        text: { primary: "#808191", disabled: '#D1D1D1' },
    }, shape: { borderRadius: 6 },
    components: {
        MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
        MuiTypography: {
            styleOverrides: {

            }
        }
    },
})