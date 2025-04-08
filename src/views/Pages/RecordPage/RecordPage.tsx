import React from 'react';

import GetRandomImage from '../../components/RecordPageComponents/GetRandomImage/GetRandomImage';

import styles from './RecordPage.module.scss'

const RecordPage: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div>
                    <h1>Угадайте изображение</h1>
                </div>

                <GetRandomImage />

            </div>
        </div>
    );
};

export default RecordPage;