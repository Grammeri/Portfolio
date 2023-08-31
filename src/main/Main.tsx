import React, {useState} from "react";
import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css";
import myPhoto from "../assets/image/new-photo.jpg";
import {MyPhoto} from "./myPhoto/MyPhoto";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal";
import {Canvas} from "@react-three/fiber";
import {Tilt} from "react-tilt";
import {RotatingBox} from "main/3d-components/RotatingBox";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Vector3} from 'three';

export const Main = () => {
    const {t} = useTranslation();

    const dimaPhoto = {
        backgroundImage: `url(${myPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        height: "100%",
        borderRadius: "20px",
    };

    const cvDownloadLink =
        i18n.language === "ru"
            ? "https://drive.google.com/file/d/1IDxfUDWHDtF1kAEmlpORUb9IlNor9oi7/view?usp=drive_link"
            : "https://drive.google.com/file/d/1d9AgnfM4c9Vxnoi5a-_R04A_oFyKFdiW/view?usp=drive_link";

    const handleDownload = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.open(cvDownloadLink, "_blank");
    };

    const [canvasSize, setCanvasSize] = useState({
        width: window.innerWidth > 480 ? 800 : 400,
        height: window.innerWidth > 480 ? 800 : 400
    });

    const isMobile = window.innerWidth <= 480;

    const cameraConfig = isMobile
        ? {
            position: new Vector3(0, 0, 100),
            fov: 70,
            near: 0.1,
            far: 3000,
        }
        : {
            position: new Vector3(0, 0, 150),
            fov: 90,
            near: 0.1,
            far: 1000,
        };


    return (
        <div className={style.container}>
            <div id="Main">
                <section id="Main" className={style.greetingCvPhoto}>
                    <Fade>
                        <div className={styleContainer.container}>
                            <div className={style.greeting}>
                                <div className={style.gretingFirstSecondLine}>
                                    <h3>{t("greeting")}</h3>
                                    <h1>{t("name")}</h1>
                                </div>
                                <h1>{t("role")}</h1>
                                <span className={style.typingEffectText}>
                  <ReactTypingEffect text={[t("typingText")]} speed={20}/>
                </span>
                                <div>
                                    <a
                                        href={cvDownloadLink}
                                        download="My_CV.pdf"
                                        onClick={handleDownload}
                                        className={style.downloadLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("downloadMyCv")}
                                    </a>
                                </div>
                            </div>
                            <Tilt options={{}}>
                                <div className={style.photoWrapper}>
                                    <div className={style.photo}>
                                        <MyPhoto style={dimaPhoto}/>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </Fade>
                </section>
                <section className={style.rotatingCubes}>
                    <div className={styleContainer.container}>
                        <Canvas
                            camera={cameraConfig}
                            style={{
                                width: `${canvasSize.width}px`,
                                height: `${canvasSize.height}px`,
                                marginBottom: "-30%",
                            }}
                        >
                            <ambientLight/>
                            <pointLight position={[10, 10, 150]}/>
                            <RotatingBox/>
                        </Canvas>
                    </div>
                </section>
            </div>
        </div>
    );
};
