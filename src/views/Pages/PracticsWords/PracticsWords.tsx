import React from 'react';

import styles from './PracticsWords.module.scss'

const PracticsWords: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1>Составьте предложение</h1>
          <p>Придумайте свое уникальное предложение и запишите его!</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap" }}>

          <div className={styles.content_words}>
            <p className={styles.content_wordsWord}>family</p>
            <p className={styles.content_wordsWord}>love</p>
            <p className={styles.content_wordsWord}>dogs</p>
          </div>

          <div className={styles.content_words}>
            <p className={styles.content_wordsTranslate}>Семья</p>
            <p className={styles.content_wordsTranslate}>Любовь</p>
            <p className={styles.content_wordsTranslate}>Собаки</p>
          </div>

        </div>

        <form>
          <textarea className={styles.content_area}></textarea>
        </form>

        <button className='btn'>Отправить</button>
        <button className='btn-mobile'>Отправить</button>

      </div>

    </div>
  );
};

export default PracticsWords;