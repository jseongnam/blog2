import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
