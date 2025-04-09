import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../data/slices/userSlice';

import styles from './LogPage.module.scss';

const LogPage: React.FC = () => {

    const dispatch = useDispatch()
    const nigative = useNavigate()
    const [text, setText] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState("Просмотреть пароль");
    const [type, setType] = useState("password");

    const handleShowPassword = () => {
        if (password !== "") {
            if (showPassword === "Просмотреть пароль") {
                setType("text");
                setShowPassword("Скрыть пароль");
            } else {
                setType("password");
                setShowPassword("Просмотреть пароль");
            }
        }
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email === "" && password === "") {
            setText(true)
        }

        try {
            const response = await axios.post('http://localhost:5001/login', { email, password })

            if (response.data.user) {
                console.log(response);
                dispatch(setUser(response.data.user))
                nigative("/profile")
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrorText("Пользователь не найден")
                setEmail('')
                setPassword('')
                console.error('Login error:', error.response?.data?.message || 'Unknown error')
            }
        }
    }

    return (
        <div className={styles.registration}>

            <div className={styles.content}>

                <div className={styles.content_title} style={{ display: "flex", flexDirection: "column" }}>
                    <h1>Войти в профиль</h1>
                    {text && <h5 style={{ color: "red" }}>Вы не ввели данные</h5>}
                    {errorText}
                </div>

                <form className={styles.content_form}>
                    <div className={styles.content_form_container}>
                        <p>Почта</p>
                        <input
                            type="email"
                            placeholder='Почта..'
                            className={styles.content_form_containerInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.content_form_container}>
                        <div className={styles.content_form_containerTitle}>
                            <p>Пароль</p>
                            <p className={styles.content_form_containerTitleShow} onClick={handleShowPassword}>
                                {showPassword}
                            </p>
                        </div>
                        <input
                            type={type}
                            placeholder='Пароль..'
                            className={styles.content_form_containerInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.content_button}>
                        <button type="button" className='btn' onClick={handleLogin}>Войти</button>
                    </div>

                    <div className={styles.content_footer}>
                        <Link to="/registration">
                            <p>Зарегистрироваться</p>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LogPage;