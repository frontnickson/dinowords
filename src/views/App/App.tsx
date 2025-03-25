import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRoutes from './AppRoutes/AppRoutes';

import styles from './App.module.scss'

const App: React.FC = () => {

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.main}>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  )
};

export default App;