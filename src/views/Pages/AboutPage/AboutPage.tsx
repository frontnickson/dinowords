import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../../data/store/store';
import { useSelector } from 'react-redux';



import dinoImage from '../../images/banners/6200_8_05.png'

import styles from './AboutPage.module.scss'

const AboutPage: React.FC = () => {

    const user = useSelector((state: RootState) => state.user.email)

    return (
        <div className={styles.title}>
            <div className={styles.content}>
                <div className={styles.content_desktop}>
                    <div className={styles.content_article}>
                        <h1 className={styles.content_h1}>Добро пожаловать <React.Fragment><br /></React.Fragment>в Dinowords!</h1>
                        <p className={styles.content_p}>Это сервис, который поможет вам прокачать ваш английский! <React.Fragment><br /></React.Fragment>💪 Самое главное в учебе — это ПРАКТИКА. Можно учить бесконечно теорию, <React.Fragment><br /></React.Fragment>но без практики вы не освоите английский. 📚</p>
                        <p className={styles.content_p}>Цель сервиса — научить вас думать на английском. <React.Fragment><br /></React.Fragment>🧠 Вы будете придумывать предложения, заставляя свой мозг<React.Fragment><br /></React.Fragment> работать на 100%. Все, что вам нужно — это просто практиковать! 🔄</p>
                        <p className={styles.contente_p}>В практике вам поможет персональный Dinoteacher. <React.Fragment><br /></React.Fragment>🦖 Он проверит вашу письменную речь, подправит ошибки и подскажет, как лучше. Все, что вас отделяет от успеха<React.Fragment><br /></React.Fragment> — это нажать на кнопку "Начать практику"! 🚀</p>
                        {user ? (
                            <Link to="/quest">
                                <button className='btn-big'>Начать практику</button>
                            </Link>
                        ) : (
                            <Link to="/registration">
                                <button className='btn-big'>Регистрация</button>
                            </Link>
                        )}
                    </div>

                    <div>
                        <img src={dinoImage} alt='dino' className={styles.content_image} />
                    </div>
                </div>
                <div className={styles.content_mobile}>
                    <div>
                        <img src={dinoImage} alt='dino' className={styles.content_mobileImage} />
                    </div>
                    <div>
                        <h1 className={styles.content_h1}>Добро пожаловать <React.Fragment><br /></React.Fragment>в Dinowords!</h1>
                        <p className={styles.content_p}>Это сервис, который поможет вам прокачать ваш английский! 💪 Самое главное в учебе — это ПРАКТИКА. Можно учить бесконечно теорию, но без практики вы не освоите английский. 📚</p>
                        <p className={styles.content_p}>Цель сервиса — научить вас думать на английском. 🧠 Вы будете придумывать предложения, заставляя свой мозг работать на 100%. Все, что вам нужно — это просто практиковать! 🔄</p>
                        <p className={styles.content_p}>В практике вам поможет персональный Dinoteacher. 🦖 Он проверит вашу письменную речь, подправит ошибки и подскажет, как лучше. Все, что вас отделяет от успеха, — это нажать на кнопку "Начать тренировку"! 🚀</p>
                        <Link to="/pracitcs">
                            <button className='btn-big'>Начать практику</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;