import React from 'react';

import styles from './LevelPage.module.scss'

const LevelPage: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.content}>

                <div>
                    <h1>Уровень сложности</h1>
                    <p>Вы начинающий? Или же вы профи в Английском?<React.Fragment><br /></React.Fragment> Выберите себе комфортный уровень сложности</p>
                </div>

                <div>
                    <button>Из 3-ех слов</button>
                    <button>Из 5-ех слов</button>
                    <button>Из 8-ех слов</button>
                </div>

                <div>
                    <input type='checkbox' />
                    <p>С переводом?</p>
                </div>
            </div>

        </div>
    );
};

export default LevelPage;