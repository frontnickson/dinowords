import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <ul className={styles.content_item}>
            <li><h3>Информация:</h3></li>
            <li><a href="https://www.figma.com/proto/FnmlycalLYkAH87adFHKgl/Putov_design_1000words?page-id=3%3A2&node-id=3-281&p=f&t=VoeubmpQtJBK0ZUM-0&scaling=min-zoom&content-scaling=fixed">Презентация</a></li>
            <Link to="/about">
              <li>Об сервисе</li>
            </Link>
            <li><a href="https://github.com/frontnickson">Автор</a></li>
          </ul>
        </div>
        <div>
          <ul className={styles.content_item}>
            <li><h3>Контакты:</h3></li>
            <li>immersion1156@mail.ru</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;