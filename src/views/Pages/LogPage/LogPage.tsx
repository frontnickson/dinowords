import React from 'react';
import { Link } from 'react-router-dom';


import vk from '../../images/registration-icon/cib_vk.svg'
import google from '../../images/registration-icon/devicon_google.svg'
import styles from './LogPage.module.scss'

const LogPage: React.FC = () => {

    return (
        <div className={styles.registration}>

            <div className={styles.content}>

                <div className={styles.content_title}>
                    <h1>Войти в профиль</h1>
                </div>

                <form className={styles.content_form}>
                    <div className={styles.content_form_container}>
                        <p>Логин</p>
                        <input type="login" placeholder='Логин...' className={styles.content_form_containerInput} />
                    </div>

                    <div className={styles.content_form_container}>
                        <div className={styles.content_form_containerTitle}>
                            <p>Пароль</p>
                            <p>Просмотреть пароль</p>
                        </div>
                        <input type="password" placeholder='Пароль...' className={styles.content_form_containerInput} />
                    </div>
                </form>

                <div className={styles.content_social}>
                    <p>Авторизуйтесь с помощью сервисов</p>
                </div>

                <div className={styles.content_icons}>
                    <img src={vk} alt='vk' />
                    <img src={google} alt='google' />
                </div>

                <div className={styles.content_button}>
                    <button className='btn-mobile'>Войти</button>
                </div>

                <div className={styles.content_footer}>
                    <Link to="/registration">
                        <p>Регистрация</p>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default LogPage;