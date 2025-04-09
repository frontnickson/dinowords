import React, {useState} from "react";
import styles from "../../../Pages/AboutPage/AboutPage.module.scss";

const AboutTextCom: React.FC = () => {

    const [marginBottom] = useState(20);

    return (
        <>
            <h1 style={{marginBottom:marginBottom, fontSize:55}} className={styles.content_h1}>Добро пожаловать <React.Fragment><br/></React.Fragment>в Dinowords!</h1>

            <p style={{marginBottom:marginBottom}} className={styles.content_p}>Это сервис, который поможет вам прокачать ваш
                английский! <React.Fragment><br/></React.Fragment>💪 Самое главное в учебе — это ПРАКТИКА. Можно учить
                бесконечно теорию, <React.Fragment><br/></React.Fragment>но без практики вы не освоите английский. 📚</p>

            <p style={{marginBottom:marginBottom}} className={styles.content_p}>Цель сервиса — научить вас думать на
                английском. <React.Fragment><br/></React.Fragment>🧠 Вы будете придумывать предложения, заставляя свой
                мозг<React.Fragment><br/></React.Fragment> работать на 100%. Все, что вам нужно — это просто
                практиковать! 🔄</p>

            <p style={{marginBottom:marginBottom}} className={styles.contente_p}>В практике вам поможет персональный
                Dinoteacher. <React.Fragment><br/></React.Fragment>🦖 Он проверит вашу письменную речь, подправит ошибки
                и подскажет, как лучше. Все, что вас отделяет от успеха<React.Fragment><br/></React.Fragment> — это
                нажать на кнопку "Начать практику"! 🚀</p>

        </>
    );
};

export default AboutTextCom;