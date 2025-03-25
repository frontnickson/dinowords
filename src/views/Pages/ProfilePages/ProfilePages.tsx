import React from 'react';




import profileImage from '../../images/profile/6200_8_05.png'
import progressImage from '../../images/profile/27013326_5200_4_03.png'


import styles from './ProfilePages.module.scss'

const ProfilePages: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>

        <div className={styles.content_info}>

          <div className={styles.content_image}>
            <img src={profileImage} alt='profile' className={styles.content_image}/>
            <button className={styles.content_imageButton}>add new image</button>
          </div>

          <div className={styles.content_infoProfile}>
            <h1>Nikita</h1>
            <br />
            <p>Возраст: 28</p>
            <p>Пол: мужской</p>
            <p>Уровень: начинающий</p>
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
                <p>35/100</p>
              </div>

              <div className={styles.content_infoProgressStatusInfoProgress}></div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePages;
