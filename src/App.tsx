import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from 'pages/SignUp';
import Funding from 'pages/Fundings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/funding' element={<Funding />} />
        <Route path='*' element={<>404 NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
