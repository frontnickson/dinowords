import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setMan, setUser, setWoman} from '../../../data/slices/userSlice';
import {RootState} from "../../../data/store/store.ts";
import axios from 'axios';
import AgeComponents from "../../components/AgeComponents/AgeComponents.tsx";
import {initGA, trackSignUp} from "../../../data/analytics/analytics.ts";


import styles from './RegistrationPage.module.scss';

const RegisterPage: React.FC = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // TOKEN
  const token = useSelector((state: RootState) => state.user.token)

  // WRITE DATA ABOUT USER
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TYPE FOR PASSWORD INPUT
  const [typePassword, setTypePassword] = useState('password');

  // PARAMS USER
  const age = useSelector((state: RootState) => state.user.age)
  const man = useSelector((state: RootState) => state.user.man)
  const woman = useSelector((state: RootState) => state.user.woman)

  const [manChecked, setManChecked] = useState<boolean>(false)
  const [womanChecked, setWomanChecked] = useState<boolean>(false)

  const [message, setMessage] = useState<boolean>(false)

  useEffect(() => {
    initGA();
  }, []);

  // REGISTRATION ON THE SERVER
  const handleRegistration = async () => {

    if(name === '' && email === '' && password === '') {

      setMessage(true)

    } else {

      setMessage(false)

      try {
        const res = await axios.post('https://dinowords.ru/api/register', {
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
          console.log("успешно")
          navigate('/profile')

          if(token){
            trackSignUp();
          }

        }
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          if (error.response) {
            alert(error.response.data.message)
          }
        }
      }
    }
  };

  return (
      <div className={styles.container}>

        <form className='form'>

          <h1>Создайте аккаунт</h1>

          {message && (
              <p style={{color: "red"}}>Вы не ввели данные</p>
          )}

          <div>
            <input
                className="input"
                name="name"
                type="text"
                value={name}
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
                required
            />
          </div>

          <div>
            <input
                className="input"
                name="email"
                type={email}
                value={email}
                placeholder="Электронная почта"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Показать пароль</p>
            <input style={{width: "40px"}} type="checkbox" onChange={() => {
              if(typePassword === 'password') {
                setTypePassword('text');
              } else {
                setTypePassword('password');
            }}}/>
          </div>

          <div>
            <input
                className="input"
                name="password"
                type={typePassword}
                value={password}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input style={{position: "absolute", right: "-150px", height: "20px"}} type="checkbox"/>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

            <AgeComponents/>

            <div style={{display: 'flex', alignItems: 'center'}}>
              <label htmlFor="man">Муж.</label>
              <input
                  style={{height: "25px"}}
                  name="man"
                  type="checkbox"
                  onChange={() => {
                    dispatch(setMan(true));
                    setManChecked(true);
                    setWomanChecked(false);
                  }}
                  checked={manChecked}
              />
            </div>

            <div style={{display: 'flex', alignItems: 'center'}}>
              <label htmlFor="woman">Жен.</label>
              <input
                  style={{height: "25px"}}
                  name="woman"
                  type="checkbox"
                  onChange={() => {
                    dispatch(setWoman(true));
                    setWomanChecked(true);
                    setManChecked(false);
                  }}
                  checked={womanChecked}
              />
            </div>
          </div>

          <button style={{margin: "auto"}} className="btn" type="submit" onClick={(e) => {handleRegistration(); e.preventDefault()}}>Регистрация</button>

          <div style={{display: 'flex', gap: "5px", alignItems: "center", justifyContent: 'center'}}>

            <p>Есть аккаунт?</p>
            <Link to="/login"><p style={{color: "#49AF08"}}>Войти</p></Link>

          </div>

        </form>


      </div>
  )

}

export default RegisterPage;
