import React from "react";
import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css";
import myPhoto from "../assets/image/4Dima.jpg";
import { MyPhoto } from "./myPhoto/MyPhoto";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-awesome-reveal";
import { Canvas } from "@react-three/fiber";
import { Tilt } from "react-tilt";
import { RotatingBox } from "main/3d-components/RotatingBox";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { BsDownload } from "react-icons/bs";

export const Main = () => {
  const { t } = useTranslation();

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

  // CV download link based on selected language
  const cvDownloadLink =
    i18n.language === "ru"
      ? "https://drive.google.com/file/d/1IDxfUDWHDtF1kAEmlpORUb9IlNor9oi7/view?usp=drive_link"
      : "https://drive.google.com/file/d/1d9AgnfM4c9Vxnoi5a-_R04A_oFyKFdiW/view?usp=drive_link";

  const handleDownload = (event: any) => {
    // <-- Function to handle download click event
    event.preventDefault();
    window.open(cvDownloadLink, "_blank");
  };

  return (
    <div className={style.container}>
      <div id="Main" className={style.mainBlock}>
        <Fade>
          <div className={`${styleContainer.container} ${style.mainContainer}`}>
            <div className={style.upperPart}>
              <div className={style.greeting}>
                <div className={style.hi}>
                  <h1>{t("greeting")}</h1>

                  <h1>{t("name")}</h1>
                </div>
                <h1>{t("role")}</h1>
                <span className={style.typingEffectText}>
                  <ReactTypingEffect text={[t("typingText")]} />
                </span>
                <div>
                  <a // <-- Moved this below the moving text
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
                    <MyPhoto style={dimaPhoto} />
                  </div>
                </div>
              </Tilt>
            </div>
            <div className={style.lowerPart}>
              <Canvas
                camera={{
                  position: [0, 0, 150],
                  fov: 90,
                  near: 0.1,
                  far: 3000,
                }}
                style={{ width: "800px", height: "800px" }}
              >
                <ambientLight />
                <pointLight position={[10, 10, 150]} />
                <RotatingBox />
              </Canvas>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
