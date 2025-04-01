import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pushNewWord } from '../../../data/slices/userSlice';
import { RootState } from '../../../data/store/store';
interface Word {
  id: number;
  word: string;
  translate: string;
  know: boolean
}

import styles from './PracticsWords.module.scss'
import axios from 'axios';

const PracticsWords: React.FC = () => {

  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.user.token)
  const studiedWords = useSelector((state: RootState) => state.user.studiedWords)
  const allWords = useSelector((state: RootState) => state.words.words)
  const userTranslate = useSelector((state: RootState) => state.user.translate)
  const userLevel = useSelector((state: RootState) => state.user.level)
  const [text, setText] = useState('')
  const [randomWords, setRandomWords] = useState<Word[]>()

  const handleGetRandomWords = () => {

    const wordsList = []

    if (userLevel.easy === true) {
      for (let i = 0; i < 2; i++) {

        const random = Math.floor(Math.random() * allWords.length)
        const filterList = allWords.find(item => item.id === random)


        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.middle === true) {
      for (let i = 0; i < 4; i++) {

        const random = Math.floor(Math.random() * allWords.length)
        const filterList = allWords.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    } else if (userLevel.hight === true) {
      for (let i = 0; i < 6; i++) {

        const random = Math.floor(Math.random() * allWords.length)
        const filterList = allWords.find(item => item.id === random)

        if (filterList) {
          wordsList.push(filterList)
        }
      }
    }

    setRandomWords(wordsList)

  }

  const handlePushNewWords = () => {
    const splitText = text.trim().split(/\s+/).filter(w => w !== "");
    splitText.forEach(word => {
      const foundWord = allWords.find(item => item.word === word)

      if (foundWord) {
        dispatch(pushNewWord(foundWord))
      }
    })
  };

  // Должно быть:
  useEffect(() => {

    const pushStudiedWords = async () => {
      if (studiedWords.length > 0) { // Проверяем, есть ли слова для отправки
        try {
          const response = await axios.post(
            'http://localhost:5001/user/words', // Правильный URL
            studiedWords,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          );
          console.log('Слова успешно отправлены:', response.data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error('Ошибка при отправке слов:', error.response?.data?.message);
          }
        }
      }
    };
    pushStudiedWords();

  }, [studiedWords, token]);

  useEffect(() => { handleGetRandomWords() }, [])

  const clearText = () => { setText('') }

  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div>

          {/* Title */}
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

          {text === "" ? <p style={{ marginBottom: "20px", color: "red" }}>Введите текст</p> : ""}

          <form>
            <textarea className={styles.content_area} onChange={(e) => { setText(e.target.value); handlePushNewWords() }} placeholder='Введите текст...' value={text}></textarea>
          </form>

        </div>

        {randomWords ? (
          <Link to="/successeful">
            <button className='btn' onClick={() => { handleGetRandomWords(); clearText() }} disabled={text === ""}>{randomWords ? "Отправить" : "Старт"}</button>
            <button className='btn-mobile' onClick={() => { handleGetRandomWords(); clearText() }} disabled={text === ""}>{randomWords ? "Отправить" : "Старт"}</button>
          </Link>
        ) : (
          <div>
            <button className='btn' onClick={() => { handleGetRandomWords(); clearText() }} disabled={text === ""}>{randomWords ? "Отправить" : "Старт"}</button>
            <button className='btn-mobile' onClick={() => { handleGetRandomWords(); clearText() }} disabled={text === ""}>{randomWords ? "Отправить" : "Старт"}</button>
          </div>
        )}

      </div>

    </div>
  );
}

export default PracticsWords;