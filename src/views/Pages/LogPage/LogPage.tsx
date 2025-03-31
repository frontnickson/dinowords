import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import vk from '../../images/registration-icon/cib_vk.svg';
import google from '../../images/registration-icon/devicon_google.svg';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../data/slices/userSlice';




import styles from './LogPage.module.scss';

const LogPage: React.FC = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const [text, setText] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState("Просмотреть пароль");
    const [type, setType] = useState("password");

    const handleGetMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setText(true);
            return;
        }
        setText(false);

        try {
            const response = await fetch('http://localhost:5001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Ошибка входа');
            }

            dispatch(setUser(data.user))

            // Перенаправляем на главную страницу или профиль
            navigate('/');
        } catch (err) {
            console.log(err);
            
        }
    };

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

    return (
        <div className={styles.registration}>

            <div className={styles.content}>

                <div className={styles.content_title} style={{ display: "flex", flexDirection: "column" }}>
                    <h1>Войти в профиль</h1>
                    {text && <h5 style={{ color: "red" }}>Вы не ввели данные</h5>}
                </div>

                <form className={styles.content_form} onSubmit={handleGetMessage}>
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

                    <div className={styles.content_social}>
                        <p>Авторизуйтесь с помощью сервисов</p>
                    </div>

                    <div className={styles.content_icons}>
                        <img src={vk} alt='vk' />
                        <img src={google} alt='google' />
                    </div>

                    <div className={styles.content_button}>
                        <button type="submit" className='btn'>Войти</button>
                        <button type="submit" className='btn-mobile'>Войти</button>
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