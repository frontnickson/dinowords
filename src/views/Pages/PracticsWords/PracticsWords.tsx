import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents';
import GetRandomWords from '../../components/GetRandomWords/GetRandomWords';
import { WordState } from '../../../data/slices/userSlice';


import styles from './PracticsWords.module.scss'

const PracticsWords: React.FC = () => {

  const token = useSelector((state: RootState) => state.user.token)
  const userLevel = useSelector((state: RootState) => state.user.level)   // userLevel - { easy: false, middle: false, higth:false }
  const words = useSelector((state: RootState) => state.words) // words - [ { id: 1, word: name, translate: имя, know: boolean }... ]
  const [level] = useState(userLevel.easy ? 2 : userLevel.middle ? 4 : userLevel.hight ? 6 : 6)
  const [randomWords, setRandomWords] = useState<WordState[]>([])
  const [text, setText] = useState('')

  const handleGetRandomWords = (n: number) => {
    const wordsList = []

    for (let i = 0; i < n; i++) {
      const random = Math.floor(Math.random() * words.length)
      const randomWords = words[random]
      wordsList.push(randomWords)
    }

    setRandomWords(wordsList)
  }

  useEffect(() => { handleGetRandomWords(level) }, [level])

  return (
    <div className={styles.container}>

      {token ? (
        <div className={styles.content}>
          <div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h1>Составьте предложение</h1>
              <p>Придумайте свое уникальное предложение и запишите его!</p>
            </div>

            <GetRandomWords randomWords={randomWords} text={text} />

            {text === "" ? <p style={{ marginBottom: "20px", color: "red" }}>Введите текст</p> : ""}

            <textarea className={styles.content_area} onChange={(e) => { setText(e.target.value) }} placeholder='Введите текст...' value={text}></textarea>

          </div>

          <button onClick={() => { setText(''); handleGetRandomWords(level) }}>Отправить</button>

        </div>
      ) : (
        <ErrorComponents />
      )}

    </div>
  );
}

export default PracticsWords;