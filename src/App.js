import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Drawer, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import "./App.css";
import { DRAWER_WIDTH } from "./constants/dimension";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar/Sidebar";
import { lightTheme } from "./theme/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Drawer
        open
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Sidebar />
      </Drawer>
      <Stack
        sx={{
          height: "100%",
          paddingLeft: `${DRAWER_WIDTH}px`,
          width: window.innerWidth - DRAWER_WIDTH - 50,
          overflowX: "hidden",
        }}
      >
        <Header />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
