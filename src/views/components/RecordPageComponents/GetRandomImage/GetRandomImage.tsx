import React, { useEffect, useState } from 'react';
import { words } from '../../../../data/constants/words';
import { WordState } from '../../../../data/slices/userSlice';


import imageStart from '../../../images/banners/27013355_5200_4_06.png'
import Loader from '../../Loader/Loader';

import styles from './GetRandomImage.module.scss'

const GetRandomImage: React.FC = () => {

    const [makeLoader, setMakeLoade] = useState(false)
    const [randomWords, setRandomWords] = useState<WordState[] | undefined>()
    const [randomImage, setRandomImage] = useState<number>(0)


    const handleGetRandomImage = () => {
        const wordsList = []

        for (let i = 0; i < 3; i++) {
            const randomId = Math.floor(Math.random() * words.length)
            const filterWord = words[randomId]

            if (filterWord) {
                wordsList.push(filterWord)
            }
        }

        const randomImg = Math.floor(Math.random() * 3)
        const sortList = wordsList.sort(() => Math.random() - 0.5)
        setRandomWords(sortList)
        setRandomImage(randomImg)

    }

    const handleSetTimeOutImage = () => {
        setMakeLoade(true)
        setTimeout(() => {
            setMakeLoade(false)
            handleGetRandomImage()
        }, 500)
    }

    const handleClickImage = (e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        const targetText = target.innerText;

        const getWord = words.find(word => word.word === targetText)

        if (randomWords && getWord) {
            setRandomWords(prev => prev?.map(item => {
                if (item.word === targetText) {
                    return { ...item, know: true }
                }

                return item;
            }))
        }
    }


    useEffect(() => {
        setMakeLoade(true)
        setTimeout(() => {
            setMakeLoade(false)
            handleGetRandomImage()
        }, 500)
    }, [])

    return (
        <div>
            {makeLoader ? <Loader /> : (
                <div className={styles.random}>
                    <img src={randomWords ? randomWords[randomImage].imageLink : imageStart} alt='image' className={styles.random_image} />
                    <div className={styles.random_words}>
                        {randomWords && randomWords.map(item => (
                            <ul key={item.id}>
                                <li className={item.know ? styles.random_active : styles.random_disabled} onClick={(e) => { handleClickImage(e) }}>{item.word}</li>
                            </ul>
                        ))}
                    </div>
                    <button onClick={() => { handleGetRandomImage(); handleSetTimeOutImage() }} className='btn'>Дальше</button>
                </div>
            )}
        </div>
    );
};

export default GetRandomImage;