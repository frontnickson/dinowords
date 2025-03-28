import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './QuestionPage.module.scss'

const QuestionPage: React.FC = () => {

  const buttonActive = {
    border: "none",
    borderRadius: "15px",
    height: "50px",
    width: "180px",
    backgroundColor: "#A99FFF",
    cursor: "pointer"
  };

  const buttonDisabled = {
    border: "none",
    borderRadius: "15px",
    color: "white",
    height: "50px",
    width: "180px",
    backgroundColor: "#616161",
    cursor: "pointer"
  };

  const [useBtn, setUseBtn] = useState(false)

  const handleChoose = () => {
    if (!useBtn) {
      setUseBtn(true)
    } else {
      setUseBtn(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div>
          <h1>Что хотите практиковать?</h1>
        </div>

        <div className={styles.content_buttons}>
          <button style={useBtn ? buttonActive : buttonDisabled} onClick={handleChoose}>Практика слов</button>
        </div>

        <div>
          {useBtn ? (
            <Link to="/level">
              <div>
                <button className='btn'>Далее</button>
                <button className='btn-mobile'>Далее</button>
              </div>
            </Link>
          ) : (
            <div>
              <button className='btn'>Выберите</button>
              <button className='btn-mobile'>Выберите</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default QuestionPage;