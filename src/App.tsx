import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from 'pages/SignUp';
import Funding from 'pages/Fundings';
import Detail from 'pages/Detail';
import { RecoilRoot } from 'recoil';
import Modal from 'components/Modal';
import MyPage from 'pages/MyPage';
import Auth from './pages/auth';
import AuthWrapper from 'components/AuthWrapper';

const App = () => {
  return (
    <RecoilRoot>
      <AuthWrapper>
        <Modal />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/funding' element={<Funding />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/auth/google' element={<Auth />} />
            <Route path='*' element={<>404 NOT FOUND</>} />
          </Routes>
        </BrowserRouter>
      </AuthWrapper>
    </RecoilRoot>
  );
};

export default App;
