import React, { useState } from "react";
import style from "./MyTest.module.scss";
import { useTranslation } from "react-i18next";
import FlashOnIcon from "@mui/icons-material/FlashOn";

type PropsTypes = {
  projectDescription: string;
  image: string;
  appUrl: string;
  codeUrl: string;
  testTitle: string;
  /* date: string;*/
  stack: string;
  videoUrl?: string;
};

export const MyTest = (props: PropsTypes) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className={style.myTest}>
      <div className={style.imageData}>
        {props.testTitle === t("Angular Homes") && (
          <div
            className={style.lightning}
            style={{
              color: "red",
              marginTop: "-35px",
              position: "absolute",
              marginLeft: "180px",
            }}
          >
            <FlashOnIcon />
            <span>{t("StartedToStudy")}</span>
          </div>
        )}
        <img className={style.image} src={props.image} alt={props.testTitle} />
        <div>
          <div style={{ marginLeft: "140px", color: "white" }}>
            {/*{props.date}*/}
          </div>
          <div style={{ marginLeft: "5px", color: "white" }}>{props.stack}</div>
        </div>
      </div>

      <div className={style.overlay}>
        <div className={style.projectInfo}>
          {showMore && (
            <span className={style.description}>
              {props.projectDescription}
            </span>
          )}
          <div className={style.buttonsContainer}>
            <button className={style.button} onClick={toggleShowMore}>
              {showMore ? t("less") : t("more")}
            </button>
            <button
              className={style.button}
              onClick={() => window.open(props.appUrl, "_blank")}
              disabled={props.appUrl === "#"}
            >
              {props.appUrl === "#" ? t("inProgress") : t("viewProject")}
            </button>
            <button
              className={`${style.button} ${style.codeButton}`}
              onClick={() => window.open(props.codeUrl, "_blank")}
            >
              {t("viewCode")}
            </button>
            {props.videoUrl && (
              <button
                className={`${style.button} ${style.videoButton}`}
                onClick={() => window.open(props.videoUrl, "_blank")}
              >
                {t("viewVideo")}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
