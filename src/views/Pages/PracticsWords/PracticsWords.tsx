import React, { useState } from 'react';
import { words } from '../../../data/constants/words';

import styles from './PracticsWords.module.scss'

interface Word {
  id: number;
  word: string;
  translate: string;
  know: boolean
}

const PracticsWords: React.FC = () => {

  const [randomWords, setRandomWords] = useState<Word[]>()


  const handleGetRandomWords = () => {

    const wordsList = []

    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * words.length)
      const filterList = words.find(item => item.id === random)
      if (filterList) {
        wordsList.push(filterList)
      }
    }

    setRandomWords(wordsList)

  }

  const handlePushNewWords = (word: string) => {
    const filterWord = randomWords ? randomWords.find(item => item.word === word) : [];
    console.log(filterWord);
        
  }

  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {randomWords ? (
            <div>
              <h1>Составьте предложение</h1>
              <p>Придумайте свое уникальное предложение и запишите его!</p>
            </div>
          ) : (
            <div>
              <h1>Нажмите старт</h1>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap" }}>

          <div className={styles.content_words}>
            {randomWords && randomWords.map(item => (
              <ul key={item.id}>
                <li className={item.know ? styles.content_wordsWordActive : styles.content_wordsWordDisabled}>{item.word}</li>
              </ul>
            ))}
          </div>

          <div className={styles.content_words}>
            {randomWords && randomWords.map(item => (
              <ul key={item.id}>
                <li className={styles.content_wordsTranslate}>{item.translate}</li>
              </ul>
            ))}
          </div>

        </div>

        <form>
          {randomWords ? (
            <textarea className={styles.content_area} onChange={(e) => { handlePushNewWords(e.target.value) }}></textarea>
          ) : ""}
        </form>

        <button className='btn' onClick={handleGetRandomWords}>{randomWords ? "Отправить" : "Старт"}</button>
        <button className='btn-mobile' onClick={handleGetRandomWords}>{randomWords ? "Отправить" : "Старт"}</button>

      </div>

    </div>
  );
};

export default PracticsWords;