import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../data/slices/userSlice';
import axios from 'axios';

import styles from './LogPage.module.scss';

const LogPage: React.FC = () => {

  const dispatch = useDispatch()

  // GET DATA ABOUT USER,
  // AND SEND DATA ON SERVER

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState("password");

  // SHOW MESSAGE IF USER,
  // DON'T WRITE DATA

  const [message, setMessage] = useState('');
  const [axiosError, setAxiosError] = useState(false);
  const [missingValue, setMissingValue] = useState(false);

  // FUNCTION TO SEND DATA,
  // ON THE SERVER

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setAxiosError(false)

    if (email === '' && password === '') {
      setMissingValue(true)
    } else {

      setMissingValue(false)

      try {

        // THIS WE NEED EMAIL AND PASSWORD,
        // TO SEND DATA ON THE SERVER
        const response = await axios.post('http://localhost:5001/login', {email, password})


        if (response.data.user) {
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
              <p>{message}</p>
          )}

          {missingValue && (
              <p style={{color: "red"}}>Вы не ввели данные</p>
          )}

          {/*EMAIL*/}
          <input
              type="email"
              placeholder='Почта..'
              className='inputForm'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />


          {/*SHOW PASSWORD*/}
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
              required
          />

          {/*BUTTON TO SEND DATA*/}
          <div>
            <button type="button" className={styles.btn} onClick={handleLogin}>Войти</button>
          </div>

          {/*LINK IF USER HAVE PROFILE*/}
          <div style={{display: 'flex', gap: "5px", alignItems: "center", justifyContent: 'center'}}>
            <p>Нету профиля?</p>
            <Link to="/registration"><p style={{color: "#49AF08"}}>Зарегестрируйтесь</p></Link>
          </div>

        </form>

      </div>
  );
}

export default LogPage;