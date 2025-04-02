import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pushNewWord } from '../../../data/slices/userSlice';
import { RootState } from '../../../data/store/store';
import axios from 'axios';

interface Word {
  id: number;
  word: string;
  translate: string;
  know: boolean
}

import styles from './PracticsWords.module.scss'
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';

const PracticsWords: React.FC = () => {

  const dispatch = useDispatch()

  // token
  const token = useSelector((state: RootState) => state.user.token)

  // studied words in local State meneger
  const studiedWords = useSelector((state: RootState) => state.user.studiedWords)

  // All words in local state manager
  const allWords = useSelector((state: RootState) => state.words)

  // Bolean checkbox for translate word (look content)
  const userTranslate = useSelector((state: RootState) => state.user.translate)

  // tree part level: 2-words/4-words/5-words and easy/middle/higth
  const userLevel = useSelector((state: RootState) => state.user.level)

  // text from input
  const [text, setText] = useState('')

  // random words from handleGetRandomWords, generete 3 numbers from all words length
  const [randomWords, setRandomWords] = useState<Word[]>()

  const handleGetRandomWords = () => {
    const wordsList = []

    if (userLevel.easy === true) {
      for (let i = 0; i < 2; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)


        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.middle === true) {
      for (let i = 0; i < 4; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.hight === true) {
      for (let i = 0; i < 6; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    }

    setRandomWords(wordsList)
  }

  const handlePushNewWords = () => {
    const splitText = text.trim().split(/\s+/).filter(w => w.length > 0);

    splitText.forEach(word => {
      const foundWord = allWords.words.find(item => item.word === word)

      if (foundWord) {
        dispatch(pushNewWord(foundWord))
      }
    })

  };

  const clearText = () => { setText('') }

  useEffect(() => {

    const pushStudiedWords = async () => {
      if (studiedWords.length > 0) {
        try {
          await axios.post('http://localhost:5001/user/words',
            studiedWords,
            {
              headers: { 'Authorization': `Bearer ${token}` }
            }
          );
        } catch (error) {
          console.error("Ошибка при отправке слов:", error);
        }
      }
    };

    pushStudiedWords();


    const getWords = async () => {
      if (studiedWords.length > 0) {
        try {
          const responce = await axios.get('http://localhost:5001/user/words',
            {
              headers: { 'Authorization': `Bearer ${token}` }
            }
          );
          console.log(responce.data);
        } catch (error) {
          console.error("Ошибка при отправке слов:", error);
        }
      }
    };

    getWords();

  }, [studiedWords, token]);


  useEffect(() => {
    const wordsList = []

    if (userLevel.easy === true) {
      for (let i = 0; i < 2; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)


        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.middle === true) {
      for (let i = 0; i < 4; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.hight === true) {
      for (let i = 0; i < 6; i++) {

        const random = Math.floor(Math.random() * allWords.words.length)
        const filterList = allWords.words.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    }

    setRandomWords(wordsList)
  }, [allWords.words, userLevel.easy,  userLevel.hight, userLevel.middle])

  return (
    <div className={styles.container}>

      {token ? (<div className={styles.content}>

        {/* Title */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h1>Составьте предложение</h1>
              <p>Придумайте свое уникальное предложение и запишите его!</p>
            </div>
          </div>

          {/* Words */}
          <div className={styles.content_words}>
            {randomWords && randomWords.map(item => (
              <ul key={item.id}>
                <li className={studiedWords.some(studyWord => studyWord.word === item.word) ? styles.content_wordsWordActive : styles.content_wordsWordDisabled}>
                  <h3>{item.word}</h3>
                  {userTranslate && (
                    <p>({item.translate})</p>
                  )}
                </li>
              </ul>
            ))}
          </div>

          {/* Error Message */}
          {text === "" ? <p style={{ marginBottom: "20px", color: "red" }}>Введите текст</p> : ""}

          {/* Text area */}
          <form>
            <textarea className={styles.content_area} onChange={(e) => { setText(e.target.value); handlePushNewWords() }} placeholder='Введите текст...' value={text}></textarea>
          </form>

        </div>

        {/* Buttons */}
        {randomWords ? (
          <Link to="/successeful">
            <button className='btn' onClick={() => { handleGetRandomWords(); clearText() }}>{randomWords ? "Отправить" : "Старт"}</button>
            <button className='btn-mobile' onClick={() => { handleGetRandomWords(); clearText() }}>{randomWords ? "Отправить" : "Старт"}</button>
          </Link>
        ) : (
          <div>
            <button className='btn' onClick={() => { handleGetRandomWords(); clearText() }}>{randomWords ? "Отправить" : "Старт"}</button>
            <button className='btn-mobile' onClick={() => { handleGetRandomWords(); clearText() }}>{randomWords ? "Отправить" : "Старт"}</button>
          </div>
        )}

      </div>) : (<ErrorComponents />)}

    </div>
  );
}

export default PracticsWords;