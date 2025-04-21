import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Footer.module.scss'

const Footer: React.FC = () => {

  return (
      <footer className={styles.footer}>
        <div className={styles.content}>

          <div className={styles.content_block}>
            <h3>Навигация:</h3>
            <Link to="/about">О сервисе</Link>
            <Link to="/words">Таблица слов</Link>
            <Link to="/progress">Изученные слова</Link>
            <Link to="/profile">Профиль</Link>
          </div>

          <div className={styles.content_block}>
            <h3>Информация:</h3>
            <p>
              <a href="https://www.figma.com/proto/FnmlycalLYkAH87adFHKgl/Putov_design_1000words?page-id=3%3A2&node-id=3-281&p=f&t=VoeubmpQtJBK0ZUM-0&scaling=min-zoom&content-scaling=fixed">Презентация</a>
            </p>

          </div>

          <div className={styles.content_block}>
            <h3>Обратная связь:</h3>
            <Link to="/contacts">Контакты</Link>
            <Link to="/feedback">Написать нам</Link>
          </div>

        </div>
      </footer>
  );
};

export default Footer;