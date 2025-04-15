import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setMan, setUser, setWoman} from '../../../data/slices/userSlice';
import {RootState} from "../../../data/store/store.ts";
import axios from 'axios';
import AgeComponents from "../../components/AgeComponents/AgeComponents.tsx";

import styles from './RegistrationPage.module.scss';

const RegisterPage: React.FC = () => {

  const dispatch = useDispatch()

  // WRITE DATA ABOUT USER
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const age = useSelector((state: RootState) => state.user.age)
  const man = useSelector((state: RootState) => state.user.man)
  const woman = useSelector((state: RootState) => state.user.woman)
  const [manActive, setManActive] = useState<boolean>(false)
  const [womanActive, setWomanActive] = useState<boolean>(false)

  // MESSAGE IF USER ACTIVE ON SERVER
  const [message, setMessage] = useState('');

  // MESSAGE IF USER NOT WRITE DATA
  const [missingValue, setMissingValue] = useState(false);

  // SHOW PASSWORD IF CHECKBOX ACTIVE
  const [type, setType] = useState("password");

  // REGISTRATION ON THE SERVER
  const handleRegistration = async () => {

    if (name === '' || password === '' || email === '' || !manActive || !womanActive) {
      setMissingValue(true)
    } else {

      // SEND FORM ON SERVER
      try {
        const res = await axios.post('http://localhost:5001/register', {
          email,
          password,
          name,
          age,
          man,
          woman
        });

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
          window.location.href = "/profile"
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {

          if (error.response) {
            setMessage(error.response.data.message);
          } else {
            setMessage('')
          }

          setName('');
          setEmail('');
          setPassword('');
        }
      }
    }
  };

  return (
      <div className={styles.container}>

        <form className='form'>

          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>

            {/*TITLE*/}

            <h1>Регистрация</h1>

            {missingValue && (<p>Вы не ввели данные</p>)}

            <p style={{color: "red"}}>{message}</p>

            {/*NAME*/}

            <input
                type="text"
                placeholder='Ваше имя..'
                className='inputForm'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                required
            />

            {/*AGE/MAN/WOMAN*/}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem"
            }}>

              {/*SELECT AGE*/}
              <AgeComponents/>

              {/*SELECT MALE MAN*/}
              <div style={{display: "flex", alignItems: "center", gap: '10px'}}>

                <p>Муж.</p>

                <input
                    type="checkbox"
                    onChange={() => {
                      dispatch(setMan(true));
                      setManActive(true)
                    }}
                />

              </div>

              {/*SELECT MALE WOMAN*/}

              <div style={{display: "flex", alignItems: "center", gap: '10px'}}>

                <p>Жен.</p>

                <input type="checkbox" onChange={() => {
                  dispatch(setWoman(true))
                  setWomanActive(true)
                }}
                />

              </div>

            </div>

            {/*EMAIL/PASSWORD*/}

            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>

              <input
                  type="email"
                  placeholder='Почта..'
                  className='inputForm'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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

              <input
                  type={type}
                  placeholder='Пароль..'
                  className='inputForm'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>

            {/*BUTTON*/}

            <div style={{margin: "auto", marginTop: '10px'}}>
              <button className="btn" onClick={() => {
                handleRegistration();
              }}>
                Регистрация
              </button>
            </div>

            {/*LOGIN*/}
            <div style={{display: 'flex', gap: "5px", alignItems: "center", justifyContent: 'center'}}>
              <p>Есть профиль?</p>
              <Link to="/login"><p style={{color: "#49AF08"}}>Войти</p></Link>
            </div>

          </div>

        </form>

      </div>
  )

}

export default RegisterPage;