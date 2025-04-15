import React, {useState} from 'react';

import styles from './QuestionPage.module.scss'
import {useNavigate} from "react-router-dom";

const QuestionPage: React.FC = () => {

  const navigate = useNavigate()

  const [practicsClass, setPracticsClass] = useState<boolean>(false)
  const [practicsImageClass, setPracticsImageClass] = useState<boolean>(false)

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <div>
            <h1>Что хотите практиковать?</h1>
          </div>

          <div className={styles.content_buttons}>

            <button className={practicsClass ? styles.content_active : styles.content_disabled} onClick={() => {
              if (setPracticsImageClass) {
                setPracticsClass(true);
                setPracticsImageClass(false);
              }
            }}>Практика слов
            </button>

            <button className={practicsImageClass ? styles.content_active : styles.content_disabled} onClick={() => {
              if (setPracticsClass) {
                setPracticsClass(false);
                setPracticsImageClass(true);
              }
            }}>Угадай картинку
            </button>

          </div>

          <div>
            <button className='btn'
                    disabled={!practicsClass && !practicsImageClass}
                    onClick={() => {
                      if (practicsClass) {
                        navigate('/level')
                        console.log("hello")
                      } else if (practicsImageClass) {
                        navigate('/record')
                      }
                    }}>
              {!practicsClass && !practicsImageClass ? "Выберите" : "Далее"}
            </button>
          </div>

        </div>

      </div>
  );
};

export default QuestionPage;