import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';

import logo from '../../images/logo.svg'
import burgerMenu from '../../images/burger-menu.svg'
import wordsIcon from '../../images/words-icon.svg'
import progressIcon from '../../images/progress-icon.svg'
import profileIcon from '../../images/profile-icon.svg'
import closeIcon from '../../images/close.svg'
import fireIcon from '../../images/fire-icon.svg'


import styles from './Header.module.scss'

const Header: React.FC = () => {

  const [menu, setMenu] = useState<boolean>(false)
  const [opactiy, setOpactiy] = useState({ opacity: 0 })
  const user = useSelector((state: RootState) => state.user.email)

  const handleClick = () => {
    setOpactiy({ opacity: 0 });

    setTimeout(() => {
      setOpactiy({ opacity: 1 });
    }, 100);
  };

  const handleClose = () => {
    setOpactiy({ opacity: 1 });

    setTimeout(() => {
      setOpactiy({ opacity: 0 })
    }, 100)

    setTimeout(() => {
      setMenu(false)
    }, 200)
  }

  return (
    <header className={styles.header}>
      {/* {user ? (
        <div className={styles.content}>
          <Link to="/about" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt='logo' className={styles.content_logo} />
          </Link>

          <div className={styles.content_con}>

            <nav className={styles.content_conNav}>
              <ul className={styles.content_conList}>

                <NavLink to="/about">
                  <li><p className={styles.content_conListItem}><img src={fireIcon} alt='words' />О сервисе</p></li>
                </NavLink>

                <NavLink to="/words">
                  <li><p className={styles.content_conListItem}><img src={wordsIcon} alt='words' />Таблица слов</p></li>
                </NavLink>

                <NavLink to="/progress">
                  <li><p className={styles.content_conListItem}><img src={progressIcon} alt='progress' />Изученные слова</p></li>
                </NavLink>

                <NavLink to="/profile">
                  <li><p className={styles.content_conListItem}><img src={profileIcon} alt='prfile' />Профиль</p></li>
                </NavLink>

              </ul>
            </nav>

            <Link to="/quest">
              <button className='btn'>Начать практику</button>
            </Link>

            <img className={styles.content_burger} src={burgerMenu} alt='menu' onClick={() => { setMenu(true); handleClick() }} />

          </div>

          {menu && (
            <div className={styles.content_menu} style={opactiy}>

              <button className={styles.content_menuClose} onClick={() => { handleClose() }}><img src={closeIcon} alt='close' /></button>

              <ul className={styles.content_menuList}>

                <Link to="/about" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={fireIcon} alt='words' />О сервисе</p></li>
                </Link>

                <Link to="/words" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={wordsIcon} alt='words' />Таблица слов</p></li>
                </Link>

                <Link to="/progress" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={progressIcon} alt='words' />Изученные слова</p></li>
                </Link>

                <Link to="/profile" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={profileIcon} alt='words' style={{ height: "30px" }} />Профиль</p></li>
                </Link>

              </ul>
              <Link to="/quest" onClick={() => { setMenu(false) }}>
                <button className='btn-mobile'>Начать практику</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.content}>
          <Link to="/about" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt='logo' className={styles.content_logo} />
          </Link>

          {menu && (
            <div className={styles.content_menu} style={opactiy}>

              <button className={styles.content_menuClose} onClick={() => { handleClose() }}><img src={closeIcon} alt='close' /></button>

              <ul className={styles.content_menuList}>

                <Link to="/about" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={fireIcon} alt='words' />О сервисе</p></li>
                </Link>

                <Link to="/words" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={wordsIcon} alt='words' />Таблица слов</p></li>
                </Link>

                <Link to="/progress" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={progressIcon} alt='words' />Изученные слова</p></li>
                </Link>

                <Link to="/profile" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={profileIcon} alt='words' style={{ height: "30px" }} />Профиль</p></li>
                </Link>

              </ul>
              <Link to="/quest" onClick={() => { setMenu(false) }}>
                <button className='btn-mobile'>Начать практику</button>
              </Link>
            </div>
          )}
        </div>
      )} */}

<div className={styles.content}>
          <Link to="/about" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt='logo' className={styles.content_logo} />
          </Link>

          <div className={styles.content_con}>

            <nav className={styles.content_conNav}>
              <ul className={styles.content_conList}>

                <NavLink to="/about">
                  <li><p className={styles.content_conListItem}><img src={fireIcon} alt='words' />О сервисе</p></li>
                </NavLink>

                <NavLink to="/words">
                  <li><p className={styles.content_conListItem}><img src={wordsIcon} alt='words' />Таблица слов</p></li>
                </NavLink>

                <NavLink to="/progress">
                  <li><p className={styles.content_conListItem}><img src={progressIcon} alt='progress' />Изученные слова</p></li>
                </NavLink>

                <NavLink to="/profile">
                  <li><p className={styles.content_conListItem}><img src={profileIcon} alt='prfile' />Профиль</p></li>
                </NavLink>

              </ul>
            </nav>

            <Link to="/quest">
              <button className='btn'>Начать практику</button>
            </Link>

            <img className={styles.content_burger} src={burgerMenu} alt='menu' onClick={() => { setMenu(true); handleClick() }} />

          </div>

          {menu && (
            <div className={styles.content_menu} style={opactiy}>

              <button className={styles.content_menuClose} onClick={() => { handleClose() }}><img src={closeIcon} alt='close' /></button>

              <ul className={styles.content_menuList}>

                <Link to="/about" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={fireIcon} alt='words' />О сервисе</p></li>
                </Link>

                <Link to="/words" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={wordsIcon} alt='words' />Таблица слов</p></li>
                </Link>

                <Link to="/progress" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={progressIcon} alt='words' />Изученные слова</p></li>
                </Link>

                <Link to="/profile" onClick={() => { setMenu(false) }}>
                  <li><p style={{ display: "flex", alignItems: "center", fontSize: "30px" }}><img src={profileIcon} alt='words' style={{ height: "30px" }} />Профиль</p></li>
                </Link>

              </ul>
              <Link to="/quest" onClick={() => { setMenu(false) }}>
                <button className='btn-mobile'>Начать практику</button>
              </Link>
            </div>
          )}
        </div>
    </header>
  );
};

export default Header;