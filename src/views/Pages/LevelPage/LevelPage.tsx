import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './LevelPage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { setLevel } from '../../../data/slices/userSlice';

const LevelPage: React.FC = () => {

    const dispatch = useDispatch()

    const user = useSelector((state: RootState) => state.user)
    console.log(user);


    const [useBtn, setUseBtn] = useState(false)

    const handleChoose = () => {
        if (!useBtn) {
            setUseBtn(true)
        } else {
            setUseBtn(false)
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

                    <button onClick={(e) => {
                        const button = e.target as HTMLButtonElement;
                        button.classList.toggle(`${styles.content_buttonsActive}`);
                        if (user.level.easy === false) {
                            dispatch(setLevel("easy"))
                        } else if (user.level.easy === true) {
                            dispatch(setLevel("easy-disabled"))

                        }
                    }} className={styles.content_buttonsDisabled}>
                        Из 3-ех слов
                    </button>

                    <button onClick={(e) => {
                        const button = e.target as HTMLButtonElement;
                        button.classList.toggle(`${styles.content_buttonsActive}`);
                        if (user.level.easy === false) {
                            dispatch(setLevel("middle"))
                        } else if (user.level.easy === true) {
                            dispatch(setLevel("middle-disabled"))

                        }
                    }} className={styles.content_buttonsDisabled}>
                        Из 5-ех слов
                    </button>

                    <button onClick={(e) => {
                        const button = e.target as HTMLButtonElement;
                        button.classList.toggle(`${styles.content_buttonsActive}`);
                        if (user.level.easy === false) {
                            dispatch(setLevel("hight"))
                        } else if (user.level.easy === true) {
                            dispatch(setLevel("higth-disabled"))

                        }
                    }} className={styles.content_buttonsDisabled}>
                        Из 8-ех слов
                    </button>

                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <input type='checkbox' style={{ cursor: "pointer" }} onChange={(e) => { console.log(e.target.value) }} />
                    <p>С переводом?</p>
                </div>

                <div>
                    {useBtn ? (
                        <Link to="/level">
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