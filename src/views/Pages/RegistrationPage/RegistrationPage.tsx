import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';



import vk from '../../images/registration-icon/cib_vk.svg';
import google from '../../images/registration-icon/devicon_google.svg';

import styles from './RegistrationPage.module.scss';
import { setUser } from '../../../data/slices/userSlice';

const RegisterPage: React.FC = () => {

    const dispatch = useDispatch()
    const nigative = useNavigate()

    const [text, setText] = useState(false);
    const [textError, setTextError] = useState('')


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState("Просмотреть пароль");
    const [type, setType] = useState("password");


    const handleRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTextError('');
        
        if (email === "" || password === "" || name === "") {
            setText(true);
            return;
        }
        setText(false);
    
        try {
            const res = await axios.post('http://localhost:5001/register', { email, password, name });
            
            if (res.data.token) {
                const newUser = {
                    email: email,
                    token: res.data.token,
                    id: res.data.user.id,
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
    
                dispatch(setUser(newUser));
                nigative("/profile");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setTextError(error.response?.data?.message || 'Произошла ошибка при регистрации');
            }
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
                    {textError}
                </div>

                <form className={styles.content_form}>
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
                        <button type="button" className='btn' onClick={handleRegistration}>Регистрация</button>
                        <button type="button" className='btn-mobile' onClick={handleRegistration}>Регистрация</button>
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