// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Crew from './views/crewreg';
import CrewList from './views/crew';
import CrewBoard from './views/crewdetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* 크루 등록 */}
      <Route path="/crew/reg" element={<Crew />} />
      {/* 크루 목록 */}
      <Route path="/crew" element={<CrewList />} />
      {/* 크루 상세보기 */}
      <Route path="/crew/detail" element={<CrewBoard />} />
      {/* 크루 댓글달기 */}
      <Route path="/crew/comment" element={<Crew />} />
      {/* 크루 댓글수정 */}
      <Route path="/crew/update/:idx" element={<Crew />} />
    </Routes>
  );
}

export default App;
