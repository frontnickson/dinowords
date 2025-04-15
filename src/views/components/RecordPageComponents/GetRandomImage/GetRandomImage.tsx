import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {words} from '../../../../data/constants/words';
import {pushNewImage, WordState} from '../../../../data/slices/userSlice';
import imageStart from '../../../images/banners/27013355_5200_4_06.png'
import Loader from '../../Loader/Loader';
import {RootState} from "../../../../data/store/store.ts";

import styles from './GetRandomImage.module.scss'

const GetRandomImage: React.FC = () => {

  const dispatch = useDispatch();

  // LOCAL WORDS
  const studiedWords = useSelector((state: RootState) => state.user.studiedImage);
  const [makeLoader, setMakeLoader] = useState(false)
  const [randomWords, setRandomWords] = useState<WordState[] | undefined>()
  const [randomImage, setRandomImage] = useState<number>(0)

  // IF USER CLICK NOT CURRENT WORD,
  // SHOW CURRENT WORD AND SHOW NEEXT,
  // RANDOM WORDS

  const handleSetTimeOutImage = () => {
    setMakeLoader(true)
    setTimeout(() => {
      setMakeLoader(false)
      handleGetRandomImage()
    }, 500)
  }

  // TO GET 3 RANDOM WORDS

  const handleGetRandomImage = () => {
    const wordsList = []

    for (let i = 0; i < 3; i++) {
      const randomId = Math.floor(Math.random() * words.length)
      const filterWord = words[randomId]

      if (filterWord) {
        wordsList.push(filterWord)
      }
    }

    const sortList = wordsList.sort(() => Math.random() - 0.5)
    const randomImage = Math.floor(Math.random() * 3)
    setRandomImage(randomImage)
    setRandomWords(sortList)
  }

  const handleClickImage = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const targetText = target.innerText;

    const currectElement = randomWords && randomWords[randomImage]

    if (currectElement) {
      setRandomWords((prev) => prev && prev.map(word => {
        if (targetText === currectElement.word) {
          if (word.word === targetText) {
            return {...word, know: true}
          }
        }
        return word;
      }))
    }

    if (targetText === currectElement?.word) {
      dispatch(pushNewImage(currectElement))
    } else {
      alert(`Правильное слово: ${currectElement?.word}, Перевод: ${currectElement?.translate}`);
      handleSetTimeOutImage()
    }

  }

  useEffect(() => {
    // START WORK LOADER
    setMakeLoader(true)

    // AFTER 0.5s START GET RANDOM IMAGE FUNCTION
    setTimeout(() => {
      setMakeLoader(false)
      handleGetRandomImage()
    }, 500)

  }, [])

  return (
      <div>
        {makeLoader ?
            <Loader/> :
            (
                <div className={styles.random}>

                  <p>Вы узнали: {studiedWords.length} картинок</p>
                  <img src={randomWords ? randomWords[randomImage].imageLink : imageStart} alt='image'
                       className={styles.random_image}/>

                  <div className={styles.random_words}>

                    {randomWords && randomWords.map(item => (
                        <ul key={item.id}>
                          <li className={item.know ? styles.random_active : styles.random_disabled}
                              onClick={(e) => {
                                handleClickImage(e)
                              }}>{item.word}</li>
                        </ul>
                    ))}

                  </div>

                  <button onClick={() => {
                    handleGetRandomImage();
                    handleSetTimeOutImage()
                    window.location.href="/successeful"
                  }} className='btn'>Дальше
                  </button>
                </div>
            )}
      </div>
  );
};

export default GetRandomImage;