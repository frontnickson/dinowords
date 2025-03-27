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
            <button className='btn-element'>Практика слов</button>
          </Link>

          <button className='btn-element-disabled'>Чат с dinoteacher</button>
          <button className='btn-element-disabled'>Dinowords на время</button>
        </div>

        <div>
          <button className='btn'>Далее</button>
        </div>

      </div>
    </div>
  );
};

export default QuestionPage;