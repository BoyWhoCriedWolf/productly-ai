import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Drawer } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { DRAWER_WIDTH } from './constants/dimension';
import Sidebar from './pages/layout/sidebar/Sidebar';
import { lightTheme } from './theme/lightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Drawer open variant='permanent' sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
      }}>
        <Sidebar />
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
