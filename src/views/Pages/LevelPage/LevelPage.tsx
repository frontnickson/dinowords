import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { setLevel, setTranslate } from '../../../data/slices/userSlice';


import styles from './LevelPage.module.scss'

const LevelPage: React.FC = () => {

    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user)

    const handleSetLevel = (level: string) => {
        if (level === "easy" && !user.level.middle && !user.level.hight) {
            dispatch(setLevel(user.level.easy ? "easy-disabled" : "easy"))
        } else if (level === "middle" && !user.level.easy && !user.level.hight) {
            dispatch(setLevel(user.level.middle ? "middle-disabled" : "middle"))
        } else if (level === "hight" && !user.level.middle && !user.level.easy) {
            dispatch(setLevel(user.level.hight ? "hight-disabled" : "hight"))
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.content_title}>
                    <h1>Уровень сложности</h1>
                    <p>Вы начинающий? Или же вы профи в Английском?<React.Fragment><br /></React.Fragment> Выберите себе комфортный уровень сложности</p>
                </div>

                <div className={styles.content_buttons}>

                    <button onClick={() => { handleSetLevel("easy") }} className={user.level.easy ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
                        Из 3-ти слов
                    </button>

                    <button onClick={() => { handleSetLevel("middle") }} className={user.level.middle ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
                        Из 5-ти слов
                    </button>

                    <button onClick={() => { handleSetLevel("hight") }} className={user.level.hight ? styles.content_buttonsActive : styles.content_buttonsDisabled}>
                        Из 8-ти слов
                    </button>

                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <input type='checkbox' style={{ cursor: "pointer" }} onChange={(e) => { dispatch(setTranslate(e.target.checked)) }} checked={user.translate} />
                    <p>С переводом?</p>
                </div>

                <div>
                    {user.level.easy || user.level.hight || user.level.middle ? (
                        <Link to="/practics">
                            <div>
                                <button className='btn'>Далее</button>
                                <button className='btn-mobile'>Далее</button>
                            </div>
                        </Link>
                    ) : (
                        <div>
                            <button className='btn'>Выберите</button>
                            <button className='btn-mobile'>Выберите</button>
                        </div>
                    )}
                </div>

            </div>

        </div >
    );
};

export default LevelPage;