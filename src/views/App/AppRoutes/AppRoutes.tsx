import React from 'react';
import {Routes, Route} from 'react-router-dom';
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
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';
import RecordPage from '../../Pages/RecordPage/RecordPage';

const AppRoutes: React.FC = () => {


  return (
      <>
        <Routes>
          <Route index element={<AboutPage/>}/>
          <Route path="*" element={<ErrorComponents/>}/>
          <Route path="/" element={<AboutPage/>}/>
          <Route path="/profile" element={<ProfilePages/>}/>
          <Route path="/login" element={<LogPage/>}/>

          <Route path="/about" element={<AboutPage/>}/>

          {/*ALL WORDS*/}
          <Route path="/words" element={<WordsTable/>}/>

          {/*PROGRESS PAGE*/}
          <Route path="/progress" element={<ProgressPages/>}/>

          {/*QUESTION PAGE*/}
          <Route path="/quest" element={<QuestionPage/>}/>

          {/*CHOOSE LEVEL FOR PRACTICS WORDS*/}
          <Route path="/level" element={<LevelPage/>}/>
          <Route path="/practics" element={<PracticsWords/>}/>

          <Route path="/successeful" element={<SuccessfulPage/>}/>

          {/*RANDOM IMAGE PAGE*/}
          <Route path="/record" element={<RecordPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/registration" element={<RegistrationPage/>}/>
        </Routes>
      </>
  );
};

export default AppRoutes;