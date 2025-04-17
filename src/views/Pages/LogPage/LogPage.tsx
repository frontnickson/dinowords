import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../data/slices/userSlice';
import axios from 'axios';

import styles from './LogPage.module.scss';

const LogPage: React.FC = () => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState("password");
  const [message, setMessage] = useState('');
  const [axiosError, setAxiosError] = useState(false);
  const [missingValue, setMissingValue] = useState(false);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setAxiosError(false)

    if (email === '' && password === '') {
      setMissingValue(true)
    } else {
      setMissingValue(false)

      try {
        const response = await axios.post('https://dinowords.ru/api/login', {email, password})

        if (response.data.user) {
          console.log(response.data.user)
          dispatch(setUser(response.data.user))
          window.location.href = "/profile"
        }

      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setMessage(error.response.data.message)
            setAxiosError(true)
          }
          setEmail('')
          setPassword('')
        }
      }
    }

  }

  return (
      <div className={styles.container}>

        <form className='form'>

          {/*TITLE*/}
          <h1>Войти</h1>

          {axiosError && (
              <p style={{color: "red"}}>{message}</p>
          )}

          {missingValue && (
              <p style={{color: "red"}}>Вы не ввели данные</p>
          )}

          {/*EMAIL*/}
          <input
              type="email"
              placeholder='Почта..'
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />


          {/*SHOW PASSWORD*/}
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Показать пароль</p>
            <input style={{width: "40px"}} type="checkbox" onChange={(e) => {
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
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />

          {/*BUTTON TO SEND DATA*/}
          <div>
            <button type="button" className={styles.btn} onClick={handleLogin}>Войти</button>
          </div>

          {/*LINK IF USER HAVE PROFILE*/}
          <div style={{display: 'flex', flexWrap: "wrap", gap: "5px", alignItems: "center", justifyContent: 'center'}}>
            <p>Нет аккаунта?</p>
            <Link to="/registration"><p style={{color: "#49AF08"}}>Зарегестрируйтесь</p></Link>
          </div>

        </form>

      </div>
  );
}

export default LogPage;