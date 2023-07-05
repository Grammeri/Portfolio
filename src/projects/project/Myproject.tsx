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
      {props.projectTitle === t("Currently in progress") && (
        <div className={style.lightning}>
          <FlashOnIcon />
          <span>{t("UnderDevelopment")}</span>
        </div>
      )}
      <img className={style.image} src={props.image} alt={props.projectTitle} />
      <div className={style.content}>
        <div>{props.stack}</div>
        <p className={!showMore ? style.truncate : ""}>
          {showMore
            ? props.projectDescription
            : `${previewDescription}${longDescription ? "..." : ""}`}
        </p>
        {longDescription && (
          <p className={style.moreLess} onClick={toggleShowMore}>
            {showMore ? t("less") : t("more")}
          </p>
        )}
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
    </section>
  );
};
