import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/image/4Dima.jpg';
import { MyPhoto } from './myPhoto/MyPhoto';
import Particles from "react-particles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal";
import { Tilt } from 'react-tilt';

export const Main = () => {
    const particlesInit = async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    };

    const particlesLoaded = async (container: Container | undefined) => {
        await console.log(container);
    };

    const dimaPhoto = {
        backgroundImage: `url(${myPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
    };

    return (
        <div id="Main" className={style.mainBlock}>
            <Particles
                className={style.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
            />

            <Fade>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.greeting}>
                        <h>Hi there!</h>
                        <h1>I am Dmitry Nikolayev</h1>
                        <h1>Frontend React Developer</h1>
                        <ReactTypingEffect
                            text={"Frontend React Developer " + "from Houston, Texas"}
                        />
                    </div>

                    <Tilt options={{}}>
                        <div className={style.photo}>
                            <MyPhoto style={dimaPhoto} />
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};
