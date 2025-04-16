import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../../data/slices/userSlice.ts";

import closeImage from '../../images/close.svg'


import styles from './MobileMenuComponents.module.scss'
import {RootState} from "../../../data/store/store.ts";

type AppProps = {
  menu: boolean;
  closeMenu: () => void;
}

const MobileMenuComponents: React.FC<AppProps> = ({menu, closeMenu}) => {

  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.user.token)

  const [optionMenu, setOptionMenu] = useState<boolean>(menu)

  useEffect(() => {
    setOptionMenu(menu);
  }, [menu]);

  return (
      <>
        {optionMenu && (
            <ul className={styles.container}>
              <li className={styles.container_list}>
                <img onClick={() => closeMenu()} src={closeImage} alt="close" className={styles.container_listClose}/>
                <Link to="/about" onClick={() => closeMenu()}>О сервисе</Link>
                <Link to="/words" onClick={() => closeMenu()}>Таблица слов</Link>
                <Link to="/progress" onClick={() => closeMenu()}>Изученные слова</Link>
                <Link to="/profile" onClick={() => closeMenu()}>Профиль</Link>
                <Link to="/quest"><button className={styles.container_listBtn} onClick={() => closeMenu()}>Начать практику</button></Link>
                {token && (
                    <Link to="/about"><p style={{fontSize: "15px"}} onClick={() => {
                      dispatch(removeUser());
                      setOptionMenu(false);
                    }}><u>Выйти</u></p></Link>
                )}
              </li>
            </ul>
        )}
      </>
  );
};

export default MobileMenuComponents;