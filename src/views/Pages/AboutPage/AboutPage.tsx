import React from 'react';
import {Link} from "react-router-dom";
import dinoImage from '../../images/banners/6200_8_05.png'

import styles from './AboutPage.module.scss'

const AboutPage: React.FC = () => {

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <img src={dinoImage} alt='dino' className={styles.content_imagetop}/>

          <div className={styles.content_title}>

            <h1 className={styles.content_h1}>Добро пожаловать <br/>в Dinowords!</h1>
            <p>Это сервис, который поможет вам прокачать ваш английский! <br/>💪 Самое главное в учебе — это ПРАКТИКА. <br/>Можно учить бесконечно теорию, но без практики вы не освоите английский. 📚</p>
            <button className={styles.btn}><Link to="/quest">Начать</Link></button>

          </div>

          <img style={{width: "650px"}} src={dinoImage} alt='dino' className={styles.content_image}/>

        </div>

      </div>
  );
};

export default AboutPage;