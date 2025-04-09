import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../data/store/store.ts";
import {Link} from "react-router-dom";

const AboutBtnCom: React.FC = () => {

    const token = useSelector((state: RootState) => state.user.token)
    const [nameBtn] = useState(() => {

        if(token){
            return <Link to="/quest"><button className='btn'>Начать практику</button></Link>
        } else {
            return <Link to="/registration"><button className='btn'>Регистрация</button></Link>
        }
    })

    return (
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
            {nameBtn}
            <p style={{color: "gray"}}><Link to="/login">Авторизируйтесь</Link></p>
        </div>
    );
};

export default AboutBtnCom;