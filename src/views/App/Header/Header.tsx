import React, { useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../images/logo.svg'
import burgerMenu from '../../images/burger-menu.svg'
import wordsIcon from '../../images/words-icon.svg'
import progressIcon from '../../images/progress-icon.svg'
import profileIcon from '../../images/profile-icon.svg'
import fireIcon from '../../images/fire-icon.svg'
import MobileMenuComponents from "../../components/mobileMenuComponents/mobileMenuComponents.tsx";


import styles from './Header.module.scss'

const Header: React.FC = () => {

  const [menu, setMenu] = useState<boolean>(false)
  const closeMenu = () => setMenu(false);

  const navLinks   = [
    {to: '/about', icon: fireIcon, text: 'О сервисе', alt: 'about'},
    {to: '/words', icon: wordsIcon, text: 'Таблица слов', alt: 'words'},
    {to: '/progress', icon: progressIcon, text: 'Изученные слова', alt: 'progress'},
    {to: '/profile', icon: profileIcon, text: 'Профиль', alt: 'profile'},
  ];

  return (
      <header className={styles.header}>

        <div className={styles.content}>

          <Link to="/about" style={{display: "flex", alignItems: "center"}}>
            <img src={logo} alt='logo' className={styles.content_logo}/>
          </Link>

          <div className={styles.content_con}>

            <nav className={styles.content_conNav}>
              <ul className={styles.content_conList}>
                {navLinks.map(({to, icon, text, alt}) => (
                    <NavLink key={to} to={to}>
                      <li>
                        <p className={styles.content_conListItem}>
                          <img src={icon} alt={alt}/>
                          {text}
                        </p>
                      </li>
                    </NavLink>
                ))}
              </ul>
            </nav>

            <button className={styles.content_conButton}>Начать практику</button>

            <img className={styles.content_burger} src={burgerMenu} alt='menu' onClick={() => {
              setMenu(true);
            }}/>

          </div>

          {menu && (
              <MobileMenuComponents menu={menu} closeMenu={closeMenu}/>
          )}

        </div>
      </header>
  );
};

export default Header;