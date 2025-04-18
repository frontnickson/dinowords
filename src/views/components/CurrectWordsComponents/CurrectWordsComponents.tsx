import React, {useEffect, useState} from 'react'
import {WordState} from "../../../data/slices/userSlice.ts";

interface CurrectWordsComponentsProps {
  currectWord?: WordState;
  handleClickCloseComponent: () => void;
}

import styles from './CurrectWordsComponents.module.scss'

const CurrectWordsComponents: React.FC<CurrectWordsComponentsProps> = ({currectWord, handleClickCloseComponent}) => {

  const [localWord, setLocalWord] = useState<WordState>()
  const [opacity, setOpacity] = useState<number>(0)

  useEffect(() => {
    setLocalWord(currectWord)

    setTimeout(() => {
      setOpacity(1)
    }, 50)
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.content} style={{opacity: opacity}}>

          <div className={styles.content_title}>
            <h1>Правильное слово:</h1>
            <div className={styles.content_titleActive}>
              <h1>{localWord && localWord.word}</h1>
              <p>{localWord && localWord.translate}</p>
            </div>

          </div>

          <img src={localWord && localWord.imageLink} alt="image" className={styles.img}/>
          <button className='btn' onClick={handleClickCloseComponent}>Дальше</button>
        </div>
      </div>
  )

}

export default CurrectWordsComponents

