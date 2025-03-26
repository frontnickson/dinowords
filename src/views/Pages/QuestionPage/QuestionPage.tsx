import React from 'react';
import { Link } from 'react-router-dom';

import styles from './QuestionPage.module.scss'

const QuestionPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div>
          <h1>Что хотите практиковать?</h1>
        </div>

        <div className={styles.content_buttons}>
          <Link to="/level">
            <button className={styles.content_buttonsService}>Практика слов</button>
          </Link>
          <button className={styles.content_buttonsServiceDisabled}>Чат с dinoteacher</button>
          <p style={{ color: "red" }}>временно не доступно</p>
          <button className={styles.content_buttonsServiceDisabled}>Dinowords на время</button>
          <p style={{ color: "red" }}>временно не доступно</p>
        </div>

        <div>
          <button className='btn'>Далее</button>
        </div>

      </div>
    </div>
  );
};

export default QuestionPage;