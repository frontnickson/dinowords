import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LevelPage.module.scss'

const LevelPage: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.content_title}>
                    <h1>Уровень сложности</h1>
                    <p>Вы начинающий? Или же вы профи в Английском?<React.Fragment><br /></React.Fragment> Выберите себе комфортный уровень сложности</p>
                </div>

                <div className={styles.content_buttons}>
                    <Link to="/practics">
                        <button className='btn-element'>Из 3-ех слов</button>
                    </Link>
                    <Link to="/practics">
                        <button className='btn-element'>Из 5-ех слов</button>
                    </Link>
                    <Link to="/practics">
                        <button className='btn-element'>Из 8-ех слов</button>
                    </Link>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <input type='checkbox' style={{ cursor: "pointer" }} />
                    <p>С переводом?</p>
                </div>

            </div>

        </div>
    );
};

export default LevelPage;