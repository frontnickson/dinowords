import React from 'react';
import {Link} from "react-router-dom";
import dinoImage from '../../images/banners/6200_8_05.png'
import {useSelector} from "react-redux";
import {RootState} from "../../../data/store/store.ts";

import styles from './AboutPage.module.scss'

const AboutPage: React.FC = () => {

  // TOKEN FOR BUTTON, IF USER HAVE TOKEN,
  // BUTTON TEXT EDIT
  const token = useSelector((state: RootState) => state.user.token)

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <img src={dinoImage} alt='dino' className={styles.content_imagetop}/>

          <div className={styles.content_title}>

            <h1 className={styles.content_h1}>Добро пожаловать <br/>в Dinowords!</h1>

            <p>Это сервис, который поможет вам прокачать ваш английский! <br/>Самое главное в учебе — это
              ПРАКТИКА. Можно учить бесконечно теорию, <br/>но без практики вы не освоите английский.</p>

            {token ? (
                <Link to="/quest"><button className={styles.btn}>Начать</button></Link>
            ) : (
                <Link to="/registration"><button className={styles.btn}>Регистрация</button></Link>
            )}

          </div>

          <img style={{width: "650px"}} src={dinoImage} alt='dino' className={styles.content_image}/>

        </div>

      </div>
  );
};

export default AboutPage;