// Main.tsx
import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/image/4Dima.jpg';
import {MyPhoto} from './myPhoto/MyPhoto';
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal";
import {Tilt} from 'react-tilt';
import { useTranslation } from 'react-i18next'; // import the hook

export const Main = () => {

    const { t } = useTranslation(); // use the hook

    const dimaPhoto = {
        backgroundImage: `url(${myPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius:"20px"
    };

    return (
        <div id="Main" className={style.mainBlock}>

            <Fade>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.greeting}>
                        <h3>{t('greeting')}</h3>
                        <h1>{t('name')}</h1>
                        <h1>{t('role')}</h1>
                        <span className={style.typingEffectText}>
                           <ReactTypingEffect
                               text={[t('typingText')]}
                           />
                       </span>
                    </div>

                    <Tilt options={{}}>
                        <div className={style.photoWrapper}>
                            <div className={style.photo}>
                                <MyPhoto style={dimaPhoto} />
                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};
