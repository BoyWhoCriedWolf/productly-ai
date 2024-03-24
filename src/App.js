import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Drawer } from '@mui/material';
import './App.css';
import { DRAWER_WIDTH } from './constants/dimension';
import Sidebar from './pages/layout/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Drawer open variant='permanent' sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
      }}>
        <Sidebar />
      </Drawer>
    </div>
  );
}

export default App;
