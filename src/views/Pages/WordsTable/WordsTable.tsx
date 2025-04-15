import React, {useState} from 'react';
import styles from './WordsTable.module.scss'
import {useSelector} from 'react-redux';
import {RootState} from '../../../data/store/store';

const WordsTable: React.FC = () => {

    // GET ALL LOCAL WORDS
    const userWords = useSelector((state: RootState) => state.words.words)

    // LIMIT WORDS ON THE PAGE
    const [limitWords, setLimitWords] = useState(15)

    // SEARCH
    const [value, setValue] = useState('')

    // FILTER SEARCH WORDS
    const filterListLimit = userWords.filter(item => {
        if (value !== "") {
            return item.word.toLowerCase().includes(value.toLowerCase()) ||
                item.translate.toLowerCase().includes(value.toLowerCase())
        } else {
            return item
        }
    }).slice(0, limitWords)

    // TO GET MORE WORDS IF CLICK BUTTON
    const handleMoreWords = () => {
        setLimitWords((e) => {
            return e + 15
        })
    }

    return (
        <div className={styles.words}>
            <div className={styles.content}>

                <div className={styles.content_search}>
                    <input type='text' placeholder="Найти слово..." className={styles.content_searchInput}
                           onChange={(e) => {
                               setValue(e.target.value)
                           }}/>
                </div>

                <div className={styles.content_words}>

                    {filterListLimit && filterListLimit.map(item => (
                        <ul className={styles.content_wordsItem} key={item.id}>
                            <li className={styles.content_wordsList}>
                                <p className={styles.content_wordsListElement}>{item.id}</p>
                                <h3 className={styles.content_wordsListElement}>{item.word}</h3>
                                <p className={styles.content_wordsListElement}>{item.translate}</p>
                            </li>
                        </ul>
                    ))}

                </div>

                <div className={styles.content_button}>
                    {value === "" && (
                        <button className='btn' onClick={handleMoreWords}>Показать больше</button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default WordsTable;