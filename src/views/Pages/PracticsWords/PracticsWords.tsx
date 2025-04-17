import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../data/store/store';
import GetRandomWords from '../../components/GetRandomWords/GetRandomWords';
import {WordState} from '../../../data/slices/userSlice';
import {useNavigate} from "react-router-dom";



import styles from './PracticsWords.module.scss'


const PracticsWords: React.FC = () => {

  const navigate = useNavigate()

  const userLevel = useSelector((state: RootState) => state.user.level);
  const words = useSelector((state: RootState) => state.words);
  const [level] = useState(userLevel.easy ? 2 : userLevel.middle ? 4 : userLevel.hight ? 6 : 6);
  const [randomWords, setRandomWords] = useState<WordState[]>([]);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const currectWords = randomWords.filter(words => text.includes(words.word))

  const handleCheckWords = () => {
    if(currectWords.length === level){
      navigate('/successeful')
    } else {
      setMessage('Введите все слова')
    }
  }

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
    handleGetRandomWords(level);
  }, [level])

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <h1>Составьте предложение</h1>
            <p>Придумайте свое уникальное предложение и запишите его!</p>
          </div>

          <GetRandomWords randomWords={randomWords} text={text}/>

          <p style={{color: "red"}}>{message}</p>

          <textarea
              className={styles.content_area}
              onChange={(e) => {
                setText(e.target.value)
              }}
              placeholder='Введите текст...'
              value={text}>
          </textarea>

          <button
              className='btn'
              onClick={handleCheckWords}>
            Отправить
          </button>

        </div>

      </div>
  );
}

export default PracticsWords;