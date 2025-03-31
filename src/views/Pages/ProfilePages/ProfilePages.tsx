import React, { useState } from 'react';

import progressImage from '../../images/profile/27013326_5200_4_03.png'

import profileImage from '../../images/profile/6200_8_05.png'
import styles from './ProfilePages.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { removeUser, setImage } from '../../../data/slices/userSlice';

const ProfilePages: React.FC = () => {

  const dispatch = useDispatch()
  const image = useSelector((state: RootState) => state.user.image)
  const userWords = useSelector((state: RootState) => state.user.studiedWords)
  const user = useSelector((state: RootState) => state.user.studiedWords)
  const userName = useSelector((state: RootState) => state.user.name)

  const [progress] = useState(user.length)


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      dispatch(setImage(url))
    }
  };

  const exitProfile = () => {
    dispatch(removeUser())
    window.location.href = "/about"
  }

  return (
    <div className={styles.profile}>

      <div className={styles.content}>

        <div className={styles.content_info}>

          <div className={styles.content_image}>

            {image ? <img src={image} alt="Profile" style={{ height: "365px", width: "365px", borderRadius: "48px" }} /> : <img src={profileImage} />}
            <input type="file" accept="image/*" onChange={handleImageChange} />
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
                <p>{userWords.length}/100</p>
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
