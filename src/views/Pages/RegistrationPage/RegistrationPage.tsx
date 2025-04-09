import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setMan, setUser, setWoman} from '../../../data/slices/userSlice';

import styles from './RegistrationPage.module.scss';
import AgeComponents from "../../components/AgeComponents/AgeComponents.tsx";
import {RootState} from "../../../data/store/store.ts";

const RegisterPage: React.FC = () => {

    const dispatch = useDispatch()
    const age = useSelector((state: RootState) => state.user.age)
    const man = useSelector((state: RootState) => state.user.man)
    const woman = useSelector((state: RootState) => state.user.woman)

    const nigative = useNavigate()
    const [text, setText] = useState(false);
    const [textError, setTextError] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            const res = await axios.post('http://localhost:5001/register', {email, password, name, age, man, woman});

            if (res.data.token) {
                const newUser = {
                    email: email,
                    token: res.data.token,
                    id: res.data.user.id,
                    name: name,
                    age: age,
                    man: man,
                    woman: woman,
                    image: "",
                    studiedWords: [],
                    studiedImage: [],
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

                <div className={styles.content_title} style={{display: "flex", flexDirection: "column"}}>
                    <h1>Регистрация</h1>
                    {text && <h5 style={{color: "red"}}>Вы не ввели все данные</h5>}
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
                        <p>Возраст</p>
                        <AgeComponents/>
                    </div>

                    <div className={styles.content_form_container}>
                        <p>Пол:</p>
                        <div style={{display: "flex"}}>
                            <div>
                                <p>Мужчина</p>
                                <input type="checkbox" onChange={() => {
                                    dispatch(setMan(true))
                                }}/>
                            </div>
                            <div>
                                <p>Женщина</p>
                                <input type="checkbox" onChange={() => {
                                    dispatch(setWoman(true))
                                }}/>
                            </div>
                        </div>
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

                    <div className={styles.content_button}>
                        <button type="button" className='btn' onClick={handleRegistration}>Регистрация</button>
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