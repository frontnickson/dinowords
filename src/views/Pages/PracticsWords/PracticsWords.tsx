import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {RootState} from '../../../data/store/store';
import GetRandomWords from '../../components/GetRandomWords/GetRandomWords';
import {WordState} from '../../../data/slices/userSlice';

import styles from './PracticsWords.module.scss'

const PracticsWords: React.FC = () => {

  // USER LEVEL
  const userLevel = useSelector((state: RootState) => state.user.level)   // userLevel - { easy: false, middle: false, higth: false }

  // USER LEVEL LOGIC FOR RANDOM WORDS /str-58/
  const [level] = useState(userLevel.easy ? 2 : userLevel.middle ? 4 : userLevel.hight ? 6 : 6)

  // THIS WORD OBJECT - [ { id: 1, word: name, translate: имя, know: boolean }...
  const words = useSelector((state: RootState) => state.words)

  const [randomWords, setRandomWords] = useState<WordState[]>([])

  const [text, setText] = useState('')

  // GET RANDOM WORDS AND PUSH, setRandomWords /str-20/
  const handleGetRandomWords = (n: number) => {

    if (!words || words.words.length === 0) {
      console.error('Words not available');
      return;
    }

    const wordsList = []

    for (let i: number = 0; i < n; i++) {
      const random: number = Math.floor(Math.random() * words.words.length)
      const randomWords: WordState = words.words[random]
      wordsList.push(randomWords)
    }

    setRandomWords(wordsList)
    setText('')
  }

  useEffect(() => {
    handleGetRandomWords(level)
  }, [level])

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <h1>Составьте предложение</h1>
            <p>Придумайте свое уникальное предложение и запишите его!</p>
          </div>

          <GetRandomWords randomWords={randomWords} text={text}/>

          {text === "" ? <p style={{marginBottom: "20px"}}>Введите текст</p> : ""}

          <textarea className={styles.content_area} onChange={(e) => {
            setText(e.target.value)
          }} placeholder='Введите текст...' value={text}></textarea>

          <Link to="/successeful">
            <button onClick={() => {
              handleGetRandomWords(level)
            }} className='btn'>
              Отправить
            </button>
          </Link>

        </div>

      </div>
  );
}

export default PracticsWords;