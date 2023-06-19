import React, { useState } from "react";
import style from "./MyProject.module.scss";
import { useTranslation } from "react-i18next";

type PropsTypes = {
  projectDescription: string;
  image: string;
  appUrl: string;
  codeUrl: string;
  projectTitle: string;
  date: string;
  stack: string;
  videoUrl?: string;
};

export const MyProject = (props: PropsTypes) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const imageSize = "100px";

  return (
    <div className={style.myProject}>
      <div className={style.imageData}>
        <img
          className={style.image}
          src={props.image}
          alt={props.projectTitle}
          style={{ width: imageSize, height: imageSize }}
        />
        <div>
          <div style={{ marginLeft: "140px", color: "white" }}>
            {props.date}
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
    </div>
  );
};
