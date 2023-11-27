// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './views/main';
import Crew from './views/crewreg';
import CrewList from './views/crew';
import CrewBoard from './views/crewdetail';
import QuestionForm from './views/questionform';
import Question from './views/question';
import JoinForm from './views/join';

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

      {/* 문의게시판 목록 */}
      <Route path="/question" element={<Question />} />
      {/* 문의게시판 등록 */}
      <Route path="/question/form" element={<QuestionForm />} />

      {/* 회원가입 */}
      <Route path='/join' element={<JoinForm/>} />
    </Routes>
  );
}

export default App;
