import React, { useState } from "react";
import style from "./MyProject.module.scss";
import { useTranslation } from "react-i18next";
import FlashOnIcon from "@mui/icons-material/FlashOn";

type PropsTypes = {
  projectDescription: string;
  image: string;
  appUrl: string;
  codeUrl: string;
  projectTitle: string;
  stack: string;
  videoUrl?: string;
};

export const MyProject = (props: PropsTypes) => {
  const { t } = useTranslation();

  const imageSize = "100px";

  // Calculate word limit
  const wordLimit = 20;

  // Split description into words
  const descriptionWords = props.projectDescription.split(" ");

  // Check if description exceeds word limit
  const longDescription = descriptionWords.length > wordLimit;

  // Create preview (first 'wordLimit' words of description) and hidden (the rest of the description) parts
  const previewDescription = descriptionWords.slice(0, wordLimit).join(" ");
  const hiddenDescription = descriptionWords.slice(wordLimit).join(" ");

  // State to manage whether to show more or less
  const [showMore, setShowMore] = useState(false);

  // Function to toggle 'showMore' state
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section className={style.myProject}>
      <div className={style.imageData}>
        {props.projectTitle === t("Currently in progress") && (
          <div className={style.lightning}>
            <FlashOnIcon />
            <span>{t("UnderDevelopment")}</span>
          </div>
        )}
        <img
          className={style.image}
          src={props.image}
          alt={props.projectTitle}
          style={{ width: imageSize, height: imageSize }}
        />
        <div>
          <div style={{ marginLeft: "140px", color: "white" }}></div>
          <div style={{ marginLeft: "5px", color: "white" }}>
            <p>{props.stack}</p>
            <span className={!showMore ? style.truncate : ""}>
              {showMore
                ? props.projectDescription
                : `${previewDescription}${longDescription ? "..." : ""}`}
            </span>
            {longDescription && (
              <span className={style.moreLess} onClick={toggleShowMore}>
                {showMore ? t("less") : t("more")}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={style.overlay}>
        <div className={style.projectInfo}>
          <div className={style.buttonsContainer}>
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
