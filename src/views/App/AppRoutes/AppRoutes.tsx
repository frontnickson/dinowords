import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePages from '../../Pages/ProfilePages/ProfilePages';
import WordsTable from '../../Pages/WordsTable/WordsTable';
import ProgressPages from '../../Pages/ProgressPage/ProgressPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import StartPage from '../../Pages/StartPage/StartPage';
import RegistrationPage from '../../Pages/RegistrationPage/RegistrationPage';
import LogPage from '../../Pages/LogPage/LogPage';

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
    </Routes>
  );
};

export default AppRoutes;