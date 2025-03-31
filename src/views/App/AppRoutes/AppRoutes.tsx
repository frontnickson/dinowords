import React, { useState } from 'react';
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
import { RootState } from '../../../data/store/store';
import { useSelector } from 'react-redux';

const AppRoutes: React.FC = () => {

  const user = useSelector((state: RootState) => state.user.email)


  return (
    <Routes>
      {user && (
        <div>
          <Route index element={<StartPage />} />
          <Route path='/profile' element={<ProfilePages />} />
          <Route path='/words' element={<WordsTable />} />
          <Route path='/progress' element={<ProgressPages />} />
          <Route path='/quest' element={<QuestionPage />} />
          <Route path='/level' element={<LevelPage />} />
          <Route path='/practics' element={<PracticsWords />} />
          <Route path='/successeful' element={<SuccessfulPage />} />
        </div>
      )}
      <Route index element={<StartPage />} />
      <Route path='/profile' element={<ProfilePages />} />
      <Route path='/words' element={<WordsTable />} />
      <Route path='/progress' element={<ProgressPages />} />
      <Route path='/quest' element={<QuestionPage />} />
      <Route path='/level' element={<LevelPage />} />
      <Route path='/practics' element={<PracticsWords />} />
      <Route path='/successeful' element={<SuccessfulPage />} />
      
      <Route path='/login' element={<LogPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/registration' element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppRoutes;