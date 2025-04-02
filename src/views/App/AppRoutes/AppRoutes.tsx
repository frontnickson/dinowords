import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePages from '../../Pages/ProfilePages/ProfilePages';
import WordsTable from '../../Pages/WordsTable/WordsTable';
import ProgressPages from '../../Pages/ProgressPage/ProgressPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import RegistrationPage from '../../Pages/RegistrationPage/RegistrationPage';
import LogPage from '../../Pages/LogPage/LogPage';
import QuestionPage from '../../Pages/QuestionPage/QuestionPage';
import LevelPage from '../../Pages/LevelPage/LevelPage';
import PracticsWords from '../../Pages/PracticsWords/PracticsWords';
import SuccessfulPage from '../../Pages/PracticsWords/SuccessfulPage/SuccessfulPage';
import { RootState } from '../../../data/store/store';
import { useSelector } from 'react-redux';
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';

const AppRoutes: React.FC = () => {
  const token = useSelector((state: RootState) => state.user.token)

  return (
    <Routes>
      {token ? (
        <>
          <Route index element={<AboutPage />} />
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePages />} />
          <Route path="/words" element={<WordsTable />} />
          <Route path="/progress" element={<ProgressPages />} />
          <Route path="/quest" element={<QuestionPage />} />
          <Route path="/level" element={<LevelPage />} />
          <Route path="/practics" element={<PracticsWords />} />
          <Route path="/successeful" element={<SuccessfulPage />} />
          <Route path="*" element={<ErrorComponents />} />
        </>
      ) : (
        <>
          <Route path="*" element={<ErrorComponents />} />
          <Route path="/login" element={<LogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;