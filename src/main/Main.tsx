import React from 'react'
import style from "./Main.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import myPoto from "../assets/image/4Dima.jpg";
import {MyPhoto} from "./myPhoto/MyPhoto";

export const Main = () => {

    const dimaPhoto = {
        backgroundImage: `url(${myPoto})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi there!</span>
                    <h1>I am Dmitry Nikolayev</h1>
                    <h3>Front End React Developer</h3>
                    <p className={style.smallFontSize}>Junior</p>
                </div>
                <div className={style.photo}>
                    <MyPhoto style={dimaPhoto} />
                </div>
            </div>
        </div>
    )
}

