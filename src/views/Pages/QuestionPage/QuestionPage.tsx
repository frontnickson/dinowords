import React, {useState} from 'react';

import styles from './QuestionPage.module.scss'
import {useNavigate} from "react-router-dom";

const QuestionPage: React.FC = () => {

  const navigate = useNavigate()

  const [practicsClass, setPracticsClass] = useState<boolean>(false)
  const [practicsImageClass, setPracticsImageClass] = useState<boolean>(false)

  const [message, setMessage] = useState<boolean>(false)

  const handleMessageError = () => {
    if(!practicsClass && !practicsImageClass) {
      setMessage(true)
    }
  }

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <div style={{display: 'flex', flexDirection: 'column', gap: "10px"}}>
            <h1>Что хотите практиковать?</h1>
            {message && (
                <p style={{color: "red"}}>Вы не выбрали</p>
            )}
          </div>

          <div className={styles.content_buttons}>

            <button className={practicsClass ? styles.content_active : styles.content_disabled} onClick={() => {
              if (setPracticsImageClass) {
                setPracticsClass(true);
                setPracticsImageClass(false);
                setMessage(false)
              }
            }}>Практика слов
            </button>

            <button className={practicsImageClass ? styles.content_active : styles.content_disabled} onClick={() => {
              if (setPracticsClass) {
                setPracticsClass(false);
                setPracticsImageClass(true);
                setMessage(false)
              }
            }}>Угадай картинку
            </button>

          </div>

          <div>
            <button className='btn'
                    onClick={() => {
                      handleMessageError();
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