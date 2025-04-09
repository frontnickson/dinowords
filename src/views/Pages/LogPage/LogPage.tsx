import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../data/slices/userSlice';

import styles from './LogPage.module.scss';

const LogPage: React.FC = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("password");

    // if missing value in form
    const [missingValue, setMissingValue] = useState(false);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (email === '' && password === '') {
            setMissingValue(true)
        } else {

            try {
                const response = await axios.post('http://localhost:5001/login', {email, password})

                if (response.data.user) {
                    dispatch(setUser(response.data.user))
                    window.location.href = "/profile"
                }

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setEmail('')
                    setPassword('')
                    console.error('Login error:', error.response?.data?.message || 'Unknown error')
                }
            }
        }

    }

    return (
        <div className={styles.container}>

            <form className='form'>

                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>

                    {/*TITLE*/}
                    <h1 style={{marginBottom: "15px"}}>Войти</h1>
                    {missingValue && (
                        <p style={{marginBottom: "15px", color: "red"}}>Вы не ввели данные</p>
                    )}

                    {/*EMAIL*/}
                    <input
                        type="email"
                        placeholder='Почта..'
                        className='inputForm'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>Показать пароль</p>
                        <input type="checkbox" onChange={(e) => {
                            if (e.target.checked) {
                                setType("text")
                            } else {
                                setType("password")
                            }
                        }}/>
                    </div>

                    {/*PASSWORD*/}
                    <input
                        type={type}
                        placeholder='Пароль..'
                        className='inputForm'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className={styles.content_button}>
                        <button type="button" className='btn' onClick={handleLogin}>Войти</button>
                    </div>

                    <div>
                        <p>Нету профиля? <Link to="/registration">Зарегестрируйтесь!</Link></p>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default LogPage;