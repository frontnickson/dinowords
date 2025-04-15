import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../data/store/store';
import image1 from '../../images/progress/27013326_5200_4_03.png'
import image2 from '../../images/progress/b0b464c4-bcc3-448e-ae38-e410cee4a226.png'

import styles from './ProgressPages.module.scss'
import RegisterPage from "../RegistrationPage/RegistrationPage.tsx";

const ProgressPages: React.FC = () => {

    const userWords = useSelector((state: RootState) => state.user.studiedWords)
    const userWordsIamge = useSelector((state: RootState) => state.user.studiedImage)
    const token = useSelector((state: RootState) => state.user.token)

    const [statusStudiedWords] = useState(() => {
        if (userWords.length < 20) {
            return "Начинающий"
        } else if (userWords.length < 50) {
            return "Уверенный"
        } else if (userWords.length === 100) {
            return "Профессионал"
        }
    })

    return (
        <>
            {token ? (
                <div className={styles.progress}>
                    <div className={styles.content}>

                        <h1>Достижения</h1>

                        <div>
                            <div className={styles.content_progress}>

                                <img src={image1} alt='words' className={styles.content_progressImage}/>

                                <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "20px"}}>

                                    <div className={styles.content_progressTitle}>
                                        <div>
                                            <h2>{statusStudiedWords}</h2>
                                            <p style={{opacity: "50%"}}>Написали слов</p>
                                        </div>
                                        <h2>{userWords.length > 0 ? userWords.length : "0"}/100</h2>
                                    </div>

                                    <div style={{height: "20px", width: "100%", backgroundColor: "grey"}}>
                                        <div style={{
                                            height: "20px",
                                            width: `${userWords.length}px`,
                                            backgroundColor: "red"
                                        }}></div>
                                    </div>

                                </div>

                            </div>

                            <div className={styles.content_progress}>

                                <img src={image2} alt='words' className={styles.content_progressImage}/>

                                <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "20px"}}>

                                    <div className={styles.content_progressTitle}>
                                        <div>
                                            <h2>{statusStudiedWords}</h2>
                                            <p style={{opacity: "50%"}}>Угадали картинок</p>
                                        </div>
                                        <h2>{userWordsIamge.length > 0 ? userWordsIamge.length : "0"}/100</h2>
                                    </div>

                                    <div style={{height: "20px", width: "100%", backgroundColor: "grey"}}>
                                        <div style={{
                                            height: "20px",
                                            width: `${userWordsIamge.length}px`,
                                            backgroundColor: "red"
                                        }}></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <RegisterPage/>
            )}
        </>
    );
};

export default ProgressPages;