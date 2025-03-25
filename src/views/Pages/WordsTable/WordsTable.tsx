import React, { useState } from 'react';
import { words } from '../../../data/constants/words';

import styles from './WordsTable.module.scss'

const WordsTable: React.FC = () => {

  const [limitWords, setLimitWords] = useState(15)
  const [value, setValue] = useState('')

  const filterListLimit = words.filter(item => {
    if (value !== "") {
      return item.word.toLowerCase().includes(value.toLowerCase()) ||
        item.translate.toLowerCase().includes(value.toLowerCase())
    } else {
      return item
    }
  }).slice(0, limitWords)

  const handleMoreWords = () => {
    setLimitWords((e) => { return e + 15 })
  }

  return (
    <div className={styles.words}>
      <div className={styles.content}>

        <div className={styles.content_search}>
          <input type='text' placeholder="Найти слово..." className={styles.content_searchInput} onChange={(e) => { setValue(e.target.value) }} />
        </div>

        <div className={styles.content_words}>
          {filterListLimit && filterListLimit.map(item => (
            <ul className={styles.content_wordsItem}>
              <li className={styles.content_wordsList}>
                <p className={styles.content_wordsListElement}>{item.id}</p>
                <h3 className={styles.content_wordsListElement}>{item.word}</h3>
                <p className={styles.content_wordsListElement}>{item.translate}</p>
              </li>
            </ul>
          ))}
        </div>

        <div className={styles.content_button}>
          <button className='btn' onClick={handleMoreWords}>Показать больше</button>
        </div>

      </div>
    </div>
  );
};

export default WordsTable;