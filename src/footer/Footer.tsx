import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "./../../src/common/styles/Container.module.css"
import {Title} from "common/Components/title/Title";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from '@material-ui/icons/Telegram';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title header={"Dmitry Nikolayev"}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="https://github.com/Grammeri">
                            <GithubIcon style={{color: "orange", fontSize: "85px", margin: "15px"}}/>
                        </a>
                    </div>

                    <div className={style.socialIcon}>
                        <a href="https://t.me/dmitrysnikolayev">
                            <TelegramIcon style={{color: "orange", fontSize: "110px", margin: "15px"}}/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="https://www.linkedin.com/in/dmitry-nikolayev-a34978258/">
                            <LinkedInIcon style={{color: "orange", fontSize: "110px", margin: "15px"}}/>
                        </a>
                    </div>

                </div>
                {/* <span className={style.copyright}>2022 All rights reserved</span>*/}
            </div>

        </div>
    )
}
