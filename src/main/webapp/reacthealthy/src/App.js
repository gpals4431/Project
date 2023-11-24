import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Main from './views/main';
import CrewReg from './views/crew-reg';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/crew/reg" element={<CrewReg/>} />
    </Routes>
  );
}

export default App;