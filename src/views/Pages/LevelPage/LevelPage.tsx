import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../data/store/store';
import {setLevel, setTranslate} from '../../../data/slices/userSlice';


import styles from './LevelPage.module.scss'

const LevelPage: React.FC = () => {

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  // SET LEVEL IN STATE
  const handleSetLevel = (level: string) => {
    console.log(level)
    dispatch(setLevel(level))
  }

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          {/*TITLE*/}

          <div className={styles.content_title}>
            <h1>Выберите уровень сложности</h1>
          </div>

          {/*BUTTONS LEVEL*/}

          <div className={styles.content_buttons}>

            <button onClick={() => {
              handleSetLevel("easy")
            }} className={user.level.easy ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
              Из 2-ух слов
            </button>

            <button onClick={() => {
              handleSetLevel("middle")
            }} className={user.level.middle ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
              Из 4-ти слов
            </button>

            <button onClick={() => {
              handleSetLevel("hight")
            }} className={user.level.hight ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
              Из 6-ти слов
            </button>

          </div>

          <div style={{display: "flex", gap: "10px"}}>
            <input type='checkbox' style={{cursor: "pointer"}} onChange={(e) => {
              dispatch(setTranslate(e.target.checked))
            }} checked={user.translate}/>
            <p>С переводом?</p>
          </div>

          <div>
            {user.level.easy || user.level.hight || user.level.middle ? (
                <Link to="/practics">
                  <div>
                    <button className='btn'>Далее</button>
                  </div>
                </Link>
            ) : (
                <div>
                  <button className='btn'>Выберите</button>
                </div>
            )}
          </div>

        </div>

      </div>
  );
};

export default LevelPage;