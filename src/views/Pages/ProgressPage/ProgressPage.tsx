import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import wordsImage from '../../images/progress/27013326_5200_4_03.png'

import styles from './ProgressPages.module.scss'
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';

const ProgressPages: React.FC = () => {
  
  const token = useSelector((state: RootState) => state.user.token)
  const userWords = useSelector((state: RootState) => state.user.studiedWords)

  return (
    <div className={styles.progress}>

      {token ? (
        <div className={styles.content}>
          <h1>Достижения</h1>

          <div>
            <div className={styles.content_progress}>

              <img src={wordsImage} alt='words' className={styles.content_progressImage} />

              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className={styles.content_progressTitle}>
                  <h2>Уверенный</h2>
                  <h2>{userWords.length > 0 ? userWords.length : "0"}/1000</h2>
                </div>

                <div style={{ height: "20px", width: "100%", backgroundColor: "grey" }}>
                  <div style={{ height: "20px", width: `${userWords.length}px`, backgroundColor: "red" }}></div>
                </div>

              </div>

            </div>
          </div>
        </div>
      ) : (<ErrorComponents />)}

    </div>
  );
};

export default ProgressPages;