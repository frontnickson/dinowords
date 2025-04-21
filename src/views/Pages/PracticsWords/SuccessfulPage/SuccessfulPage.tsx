import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import fireImage from '../../../images/big-fire.svg'

import styles from './SuccessfulPage.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../../../data/store/store.ts";

const SuccessfulPage: React.FC = () => {

  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.user.token)
  const [opactiy, setOpacity] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }, [])

  return (
      <div className={styles.container}>
        <div className={styles.content} style={{opacity: opactiy, transition: "0.3s"}}>

          {token && (<h1>Супер!</h1>)}

          {!token && (
              <div style={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", width:"100%"}}>
                <h1>Что бы узнать результаты</h1>
                <div style={{display: "flex", gap: "5px"}}>
                  <Link to="/registration"><p><u>Зарегестрируйтесь</u></p></Link>
                  <p>или</p>
                  <Link to="/login"><p><u>Авторизуйтесь</u></p></Link>
                </div>
              </div>
          )}

          <img src={fireImage} alt='fire'/>

          <button className='btn' onClick={() => {
            navigate(-1)
          }}>Далее
          </button>

        </div>
      </div>
  );
};

export default SuccessfulPage;
