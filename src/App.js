
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css';
import MyHomePage from './components/MyHomePage';
import MyAppbar from './components/MyAppbar';
import MyDetail from './components/MyDetailPage';
import MyFooter from './components/MyFooter';
import MyCartPage from './components/MyCartPage'
import { Stack } from '@mui/material';
import MyRegister from './components/MyRegisterPage';
import MyLogin from './components/MyLoginPage';
import MyCheckoutPage from './components/MyCheckoutPage';

function App() {


  return (
    <BrowserRouter>
      <Stack direction="column"
      // spacing={5}
      >

        {/* <MyAppbar></MyAppbar> */}
        <Routes>
          <Route path='/' element={
            <>
              <MyAppbar></MyAppbar>
              <MyHomePage />
              <MyFooter></MyFooter>
            </>
          } />
          <Route path='/detail'>
            <Route path=':id' element={<>
              <MyAppbar></MyAppbar>
              <MyDetail />
              <MyFooter></MyFooter>
            </>} />
          </Route>
          <Route path='/cart' element={<>
            <MyAppbar></MyAppbar>
            <MyCartPage />
            <MyFooter></MyFooter>
          </>} />
          <Route path='/register' element={<MyRegister />} />
          <Route path='/login' element={<MyLogin />} />
          <Route path='/checkout' element={<MyCheckoutPage />} />


        </Routes>
        {/* <MyFooter></MyFooter> */}

      </Stack>

    </BrowserRouter>

  );
}

export default App;
