import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { DetailInfo } from './pages/detailInfo/detailInfo';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/city/:id' element={<DetailInfo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>

  );
}

export default App;
