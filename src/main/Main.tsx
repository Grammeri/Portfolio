import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/image/4Dima.jpg';
import {MyPhoto} from './myPhoto/MyPhoto';
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal";
import {Tilt} from 'react-tilt';

export const Main = () => {

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
                        <h3>Hi there!</h3>
                        <h1>I am Dmitry</h1>
                        <h1>Frontend Developer (React)</h1>
                        <span className={style.typingEffectText}>
                           <ReactTypingEffect
                               text={["<p>I like what I do</p>"]}
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
