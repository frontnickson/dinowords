import React from 'react';
import dinoImage from '../../images/banners/6200_8_05.png'
import AboutTextCom from "../../components/AboutPageCom/AboutTextCom/AboutTextCom.tsx";
import AboutBtnCom from "../../components/AboutPageCom/AboutBtnCom/AboutBtnCom.tsx";
import styles from './AboutPage.module.scss'

const AboutPage: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.content}>

                {/*Desktop container*/}
                <div className={styles.content_desk}>
                    <img src={dinoImage} alt='dino' className={styles.content_image} style={{height: 450, width: 450}}/>
                    <div>
                        <AboutTextCom/>
                        <AboutBtnCom/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutPage;