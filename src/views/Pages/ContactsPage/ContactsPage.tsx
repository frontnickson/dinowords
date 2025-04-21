import React, {useEffect} from 'react'

import styles from './ContactsPage.module.scss'
import axios from "axios";
import {analyzeText} from "../../../data/api/api.ts";

const ContactsPage: React.FC = () => {

  useEffect(() => {
    const checkText = async () => {
      try {
        const responce = await axios.get(analyzeText)

        if (responce) {
          console.log(responce)
        }
      } catch (error) {
        console.log(error)
      }
    }

    checkText()
  }, []);

  return (
      <div className={styles.container}>

        <div className={styles.content}>

          <h1>Контакты</h1>

          <div className={styles.content_info}>
            <a href="mailto:helpdinowords@yandex.ru">helpdinowords@yandex.ru</a>
          </div>
        </div>

      </div>
  )
}

export default ContactsPage;