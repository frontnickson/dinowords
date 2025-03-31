import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import vk from '../../images/registration-icon/cib_vk.svg';
import google from '../../images/registration-icon/devicon_google.svg';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../../data/slices/userSlice';



import styles from './RegistrationPage.module.scss';

const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState("Просмотреть пароль");
    const [type, setType] = useState("password");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password || !name) {
            setText(true);
            return;
        }
        setText(false);

        try {
            const response = await fetch('http://localhost:5001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Ошибка регистрации');
            }

            // Create full user object
            const newUser = {
                email: email,
                token: data.token,
                id: data.userId || 0,
                name: name,
                image: "",
                studiedWords: [],
                level: {
                    easy: false,
                    middle: false,
                    hight: false
                },
                stressTime: 0,
                translate: false
            };

            // Save user data
            dispatch(setUser(newUser));

            // Перенаправляем на главную страницу
            navigate('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка при регистрации');
        }
    };

    const handleShowPassword = () => {
        if (password) {
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
                    <h1>Регистрация</h1>
                    {text && <h5 style={{ color: "red" }}>Вы не ввели все данные</h5>}
                    {error && <h5 style={{ color: "red" }}>{error}</h5>}
                </div>

                <form className={styles.content_form} onSubmit={handleRegister}>
                    <div className={styles.content_form_container}>
                        <p>Имя</p>
                        <input
                            type="text"
                            placeholder='Ваше имя..'
                            className={styles.content_form_containerInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.content_form_container}>
                        <p>Почта</p>
                        <input
                            type="email"
                            placeholder='Почта..'
                            className={styles.content_form_containerInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            required
                        />
                    </div>

                    <div className={styles.content_social}>
                        <p>Зарегистрируйтесь с помощью сервисов</p>
                    </div>

                    <div className={styles.content_icons}>
                        <img src={vk} alt='vk' />
                        <img src={google} alt='google' />
                    </div>

                    <div className={styles.content_button}>
                        <button type="submit" className='btn'>Зарегистрироваться</button>
                        <button type="submit" className='btn-mobile'>Зарегистрироваться</button>
                    </div>

                    <div className={styles.content_footer}>
                        <Link to="/login">
                            <p>Уже есть аккаунт? Войти</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;