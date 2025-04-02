import React from 'react';
import { Link } from 'react-router-dom';


import image from '../../images/banners/27013355_5200_4_06.png'
import styles from './ErrorComponents.module.scss'

const ErrorComponents: React.FC = () => {

    return (
        <div className={styles.conteiner}>
            <div className={styles.content}>
                <img src={image} alt='image' style={{height: "250px"}}/>
                <h1>Просим прощения за ошибку</h1>
                <p>можете перейти на <Link to="/about"><u>Главную страницу</u></Link></p>
            </div>
        </div>
    );
};

export default ErrorComponents;