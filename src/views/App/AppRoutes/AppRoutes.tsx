import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePages from '../../Pages/ProfilePages/ProfilePages';
import WordsTable from '../../Pages/WordsTable/WordsTable';
import ProgressPages from '../../Pages/ProgressPage/ProgressPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import StartPage from '../../Pages/StartPage/StartPage';
import RegistrationPage from '../../Pages/RegistrationPage/RegistrationPage';
import LogPage from '../../Pages/LogPage/LogPage';
import QuestionPage from '../../Pages/QuestionPage/QuestionPage';
import LevelPage from '../../Pages/LevelPage/LevelPage';
import PracticsWords from '../../Pages/PracticsWords/PracticsWords';
import SuccessfulPage from '../../Pages/PracticsWords/SuccessfulPage/SuccessfulPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path='/profile' element={<ProfilePages />} />
      <Route path='/words' element={<WordsTable />} />
      <Route path='/progress' element={<ProgressPages />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='/login' element={<LogPage />} />
      <Route path='/quest' element={<QuestionPage />} />
      <Route path='/level' element={<LevelPage />} />
      <Route path='/practics' element={<PracticsWords />} />
      <Route path='/successeful' element={<SuccessfulPage />} />
    </Routes>
  );
};

export default AppRoutes;