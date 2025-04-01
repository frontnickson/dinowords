import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import axios from 'axios';



import wordsImage from '../../images/progress/27013326_5200_4_03.png'

import styles from './ProgressPages.module.scss'

const ProgressPages: React.FC = () => {

  const user = useSelector((state: RootState) => state.user.studiedWords)
  const [userWords, setUserWords] = useState("")
  const token = useSelector((state: RootState) => state.user.token)
  const [progress] = useState(user.length)

  useEffect(() => {
    const getWords = async () => {
      try {
        const response = await axios.get('http://localhost:5001/user/words', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.data) {
          setUserWords(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    }

    getWords()
  }, [token])

  return (
    <div className={styles.progress}>

      <div className={styles.content}>
        <h1>Достижения</h1>
        <div>
          <div className={styles.content_progress}>

            <img src={wordsImage} alt='words' className={styles.content_progressImage} />

            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className={styles.content_progressTitle}>
                <h2>Уверенный</h2>
                <h2>{userWords ? userWords.length : ""}/1000</h2>
              </div>

              <div style={{ height: "20px", width: "100%", backgroundColor: "grey", borderRadius: "10px" }}>
                <div style={{ height: "20px", width: `${progress}px`, backgroundColor: "red", borderRadius: "10px" }}></div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgressPages;