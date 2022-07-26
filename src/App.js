
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyBody from './components/MyHomePage';
import MyAppbar from './components/MyAppbar';
import MyDetail from './components/MyDetail';
import MyFooter from './components/MyFooter';
import { Stack } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Stack direction="column"
      // spacing={5}
      >
        <MyAppbar></MyAppbar>
        <Routes>
          <Route path='/' element={<MyBody />} />
          <Route path='/detail' element={<MyDetail />} />
        </Routes>
        <MyFooter></MyFooter>
      </Stack>

    </BrowserRouter>

  );
}

export default App;
