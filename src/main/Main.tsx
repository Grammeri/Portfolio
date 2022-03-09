import React from 'react'
import style from "./Main.module.css"
import styleContainer from "./../common/styles/Container.module.css"

export const Main = () => {
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
                   <h3>My Photo here</h3>
                </div>
            </div>
        </div>
    )
}

