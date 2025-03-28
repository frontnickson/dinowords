import React from 'react';



import wordsImage from '../../images/progress/27013326_5200_4_03.png'
import styles from './ProgressPages.module.scss'

const ProgressPages: React.FC = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.content}>
        <h1>Достижения</h1>
        <div>
          <div className={styles.content_progress}>

            <img src={wordsImage} alt='words' className={styles.content_progressImage}/>

            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "20px"}}>
              <div className={styles.content_progressTitle}>
                <h2>Уверенный</h2>
                <h2>675/1000</h2>
              </div>

              <div className={styles.content_progressProgress}>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPages;