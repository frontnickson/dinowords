import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import vk from '../../images/registration-icon/cib_vk.svg'
import google from '../../images/registration-icon/devicon_google.svg'
import styles from './LogPage.module.scss'

const LogPage: React.FC = () => {

    const [text, setText] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState("Просмотреть пароль")
    const [type, setType] = useState("password")

    const handleGetMessage = () => {
        if (email === "" || password === "") {
            setText(true)
        } else {
            setText(false)
        }
    }

    const handleShowPassword = () => {
        if (password !== "") {

            if (showPassword === "Просмотреть пароль") {
                setType("text")
                setShowPassword("Скрыть пароль")
            } else {
                setType("password")
                setShowPassword("Просмотреть пароль")
            }

        }
    }

    return (
        <div className={styles.registration}>

            <div className={styles.content}>

                <div className={styles.content_title} style={{ display: "flex", flexDirection: "column" }}>
                    <h1>Войти в профиль</h1>
                    {text && (<h5 style={{ color: "red" }}>Вы не ввели данные</h5>)}
                </div>

                <form className={styles.content_form}>
                    <div className={styles.content_form_container}>
                        <p>Почта</p>
                        <input type="email" placeholder='Почта..' className={styles.content_form_containerInput} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div className={styles.content_form_container}>
                        <div className={styles.content_form_containerTitle}>
                            <p>Пароль</p>
                            <p className={styles.content_form_containerTitleShow} onClick={handleShowPassword}>{showPassword}</p>
                        </div>
                        <input type={type} placeholder='Пароль..' className={styles.content_form_containerInput} onChange={(e) => { setPassword(e.target.value) }} />
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
                    <button className='btn' onClick={handleGetMessage}>Войти</button>
                    <button className='btn-mobile' onClick={handleGetMessage}>Войти</button>
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