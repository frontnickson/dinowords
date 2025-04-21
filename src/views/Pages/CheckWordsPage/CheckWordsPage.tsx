import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../../data/store/store.ts";
import {analyzeText, suggestText} from "../../../data/api/api.ts";
import axios from "axios";
import {Link} from "react-router-dom";
import SuccessfulPage from "../PracticsWords/SuccessfulPage/SuccessfulPage.tsx";

type BadTextItem = {
  id: string;
  offset: number;
  length: number;
  bad: string;
  better: string[];
  type: string;
  description: {
    en: string;
  };
};

import styles from './CheckWordsPage.module.scss'
import Loader from "../../components/Loader/Loader.tsx";

const CheckWordsPage: React.FC = () => {

  const wordsFromPracticsPage = useSelector((state: RootState) => state.words.wordsText)
  const [editText, setEditText] = useState<string>('')
  const [badText, setBadText] = useState<BadTextItem[]>([])

  const [activeLoader, setActiveLoader] = useState<boolean>(false)

  useEffect(() => {

    const checkTextApi = async () => {
      try {
        // Считываем ошибки
        const responceAnalyzeText = await axios.get(analyzeText + wordsFromPracticsPage)

        // доработка текста
        const responceSuggestText = await axios.get(suggestText + wordsFromPracticsPage)
        if (responceSuggestText && responceAnalyzeText) {
          setBadText(responceAnalyzeText.data.response.grammar.errors)
          setEditText(responceSuggestText.data.response.corrected)
          setActiveLoader(true)
        }

      } catch (error) {
        console.log(error)
      }
    }
    checkTextApi()
  }, [])

  return (
      <>
        {activeLoader ? (
            <div className={styles.container}>
              {badText.length > 0 ? (
                  <div className={styles.content}>
                    <h1>Финальный текст:</h1>
                    <h3 className={styles.content_finish}>{editText}</h3>
                    <h1>Ошибки:</h1>

                    <div className={styles.content_con}>
                      {badText && badText.map(item => (
                          <ul key={item.id}>
                            <li className={styles.content_conList}>
                              <p className={styles.content_conListDesc}>{item.description.en.includes("Did you mean") && "Вы имели ввиду:"}</p>
                              <p className={styles.content_conListDesc}>{item.description.en.includes("Incorrect punctuation.") && "Неправильная пунктуация:"}</p>
                              <p className={styles.content_conListDesc}>{item.description.en.includes("article") && "Используйте артикль:"}</p>
                              <p className={styles.content_conListDesc}>{item.description.en.includes("Possible spelling mistake") && "Возможная орфографическая ошибка:"}</p>
                              <h3 className={styles.content_conListBad}>{item.bad}</h3>
                            </li>
                          </ul>
                      ))}
                    </div>

                    <Link to="/practics">
                      <button className="btn" style={{margin: "auto"}}>Дальше</button>
                    </Link>
                  </div>
              ) : (
                  <SuccessfulPage/>
              )}
            </div>
        ) : (
            <Loader/>
        )}
      </>
  )
}

export default CheckWordsPage;