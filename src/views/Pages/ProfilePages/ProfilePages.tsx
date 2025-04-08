import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { removeUser } from '../../../data/slices/userSlice';
import axios from 'axios';

import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';

import progressImage from '../../images/profile/27013326_5200_4_03.png'
import profileImage from '../../images/profile/6200_8_05.png'

import styles from './ProfilePages.module.scss'

const ProfilePages: React.FC = () => {

  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.user.token)
  const studiedWords = useSelector((state: RootState) => state.user.studiedWords)
  const user = useSelector((state: RootState) => state.user)

  const userName = useSelector((state: RootState) => state.user.name)

  const handlePushDataUser = async () => {
    try {
      const response = await axios.put('http://localhost:5001/user/full', user, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Данные успешно обновлены");
        dispatch(removeUser())
        window.location.href = "/about"
      } else {
        console.log("Что-то пошло не так. Код ответа:", response.status);
      }

    } catch (error) {
      if(axios.isAxiosError(error)){
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.profile}>

      {token ? (
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
                <p onClick={handlePushDataUser} style={{ cursor: "pointer" }}><u>Выйти из профиля</u></p>
              </div>

            </div>

          </div>

          <div className={styles.content_infoProgress}>

            <div className={styles.content_infoProgressAll}>
              <h1>Достижения</h1>
              <Link to="/progress"><h1 style={{ color: "#A99FFF" }}>ВСЕ</h1></Link>
            </div>

            <div className={styles.content_infoProgressStatus}>

              <div>
                <img src={progressImage} alt='image' />
              </div>

              <div className={styles.content_infoProgressStatusInfo}>
                <div className={styles.content_infoProgressStatusInfoTitle}>
                  <p>Начинающий</p>
                  <p>{studiedWords?.length}/1000</p>
                </div>


                <div style={{ height: "20px", width: "100%", backgroundColor: "grey" }}>
                  <div style={{ height: "20px", width: `${studiedWords?.length}px`, backgroundColor: "red" }}></div>
                </div>

              </div>

            </div>

          </div>

        </div>) : (<ErrorComponents />)}

    </div>
  );
};

export default ProfilePages;
