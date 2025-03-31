import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import fireImage from '../../../images/big-fire.svg'

import styles from './SuccessfulPage.module.scss'

const SuccessfulPage: React.FC = () => {

    const [opactiy, setOpacity] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1)
        }, 100)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.content} style={{opacity: opactiy, transition: "0.3s"}}>
                <h1>Супер!</h1>
                <img src={fireImage} alt='fire' />
                <Link to="/practics">
                    <button className='btn'>Далее</button>
                </Link>
                <Link to="/practics">
                    <button className='btn-mobile'>Далее</button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessfulPage;