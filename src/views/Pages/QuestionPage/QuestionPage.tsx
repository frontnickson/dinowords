import React, { useState } from 'react';

import styles from './QuestionPage.module.scss'

const QuestionPage: React.FC = () => {

  const [practicsBtn, setPracticsBtn] = useState(false)
  const [recordBtn, setRecordBtn] = useState(false)
  const [crosswordBtn] = useState(false)

  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div>
          <h1>Что хотите практиковать?</h1>
        </div>

        <div className={styles.content_buttons}>
          <button className={practicsBtn ? styles.content_active : styles.content_disabled} onClick={() => { if (!recordBtn && !crosswordBtn) { setPracticsBtn(!practicsBtn) } else { return } }}>Практика слов</button>
          <button className={recordBtn ? styles.content_active : styles.content_disabled} onClick={() => { if (!practicsBtn && !crosswordBtn) { setRecordBtn(!recordBtn) } else { return } }}>Угадай картинку</button>
        </div>

        <div>
          <button
            className='btn'
            disabled={!practicsBtn && !recordBtn && !crosswordBtn}
            onClick={() => {
              if (practicsBtn) {
                window.location.href = "/level";
              } else if (recordBtn) {
                window.location.href = "/record";
              }
            }}
          > Далее
          </button>

        </div>

      </div>

    </div>
  );
};

export default QuestionPage;