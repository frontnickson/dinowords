import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { removeUser, WordState } from '../../../data/slices/userSlice';
import axios from 'axios';

import progressImage from '../../images/profile/27013326_5200_4_03.png'
import profileImage from '../../images/profile/6200_8_05.png'

import styles from './ProfilePages.module.scss'

const ProfilePages: React.FC = () => {

  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.user.token)
  const [userWords, setUserWords] = useState<WordState[]>()
  const userName = useSelector((state: RootState) => state.user.name)
  const [progress] = useState(userWords ? userWords.length : "0")

  const exitProfile = () => {
    dispatch(removeUser())
    window.location.href = "/about"
  }

  useEffect(() => {
    const getWords = async () => {
      if (!token) return; 
  
      try {
        const response = await axios.get('http://localhost:5001/user/words', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        setUserWords(response.data)
  
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
          console.error("Response data:", error.response?.data);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };
  
    getWords();
  }, [token])

  return (
    <div className={styles.profile}>

      <div className={styles.content}>

        <div className={styles.content_info}>

          <div className={styles.content_image}>

            <img src={profileImage} />
          </div>

          <div className={styles.content_infoProfile}>
            <h1>{userName}</h1>
            <br />
            <p>Возраст: 28</p>
            <p>Пол: мужской</p>
            <p>Уровень: начинающий</p>

            <div style={{ marginTop: "auto" }}>
              <p onClick={exitProfile}>Выйти из профиля</p>
            </div>
          </div>

        </div>

        <div className={styles.content_infoProgress}>

          <div className={styles.content_infoProgressAll}>

            <h1>Достижения</h1>
            <h1>ВСЕ</h1>

          </div>

          <div className={styles.content_infoProgressStatus}>

            <div>
              <img src={progressImage} alt='image' />
            </div>

            <div className={styles.content_infoProgressStatusInfo}>

              <div className={styles.content_infoProgressStatusInfoTitle}>
                <p>Начинающий</p>
                <p>{userWords?.length}/100</p>
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

export default ProfilePages;
