import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.css"
import {Title} from "../common/Components/title/Title";

export const Footer = () => {
    return(
        <div className = {style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title header={"Dmitry Nikolayev"}/>
                <div className = {style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2022 All rights reserved</span>
            </div>

        </div>
    )
}