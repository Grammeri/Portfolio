import React, { useCallback } from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/image/4Dima.jpg';
import { MyPhoto } from './myPhoto/MyPhoto';
import Particles from "react-particles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal"
import { Tilt } from 'react-tilt'

/*
const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {min: 1, max: 5},
        },
    },
    detectRetina: true,
}
*/

export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

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
            {/*<Particles
                className={style}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                params={particlesOptions}
                options={{ fullScreen: { enable: false } }}
            />*/}
            <Fade>
                <div className={styleContainer.container}>

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
