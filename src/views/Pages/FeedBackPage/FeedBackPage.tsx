import React, {useState} from 'react'

import styles from './FeedBackPage.module.scss'

const FeedBackPage: React.FC = () => {

  const [name] = useState('')
  const [email] = useState('')
  const [text, setText] = useState('')

  const [message, setMessage] = useState('')

  const handleCheckText = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const includesValue = [
      '@mail.ru',
      '@gmail.com',
      '@yandex.ru',
      '@yahoo.com',
      '@outlook.com',
      '@icloud.com',
      '@bk.ru',
      '@list.ru',
      '@inbox.ru',
      '@rambler.ru',
      '@hotmail.com'
    ];

    const currectEmail = includesValue.some(item => email.includes(item));

    if (!currectEmail) {
      setMessage('Введите корректную почту')
      return;
    }

    if (name === '' && email === '') {
      setMessage('Введите данные')
    } else if (text === '') {
      setMessage('Введите сообщение')
    } else {
      setMessage('')
    }
  }

  return (
      <div className={styles.container}>

        <div className={styles.content}>
          <h1>Напишите нам!</h1>

          <p style={{color: "red"}}>{message}</p>

          <form className="form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="6190176d-9412-4da4-ab4b-f227c4c43381"/>
            <input placeholder="Ваше имя" className="input" type="text" name="name"/>
            <input placeholder="Электронная почта" className="input" type="email" name="email"/>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>

            <textarea name="message"
                      placeholder="Текст сообщения..."
                      className="textarea"
                      onChange={(e) => setText(e.target.value)}
                      required
            ></textarea>

            <button type="submit" className="btn" style={{margin: "auto"}} onClick={handleCheckText}>Отправить</button>

          </form>

        </div>

      </div>
  )
}

export default FeedBackPage;