import React, {useEffect} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRoutes from './AppRoutes/AppRoutes';
import {useLocation} from "react-router-dom";
import {initGA, trackPageView} from "../../data/analytics/analytics.ts";

import styles from './App.module.scss'

const App: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    initGA(); // Инициализация GA один раз при загрузке
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search); // Отправка события на каждый переход
  }, [location]);

  return (
      <div className={styles.app}>
        <Header/>

        <div className={styles.main}>
          <AppRoutes/>
        </div>

        <Footer/>
      </div>
  )
};

export default App;