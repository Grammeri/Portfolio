import React, { useState } from "react";
import { Title } from "common/Components/title/Title";
import { useTranslation } from "react-i18next";
import style from "./aboutMe.module.scss";

export const AboutMe = (props: any) => {
  const { t } = useTranslation();
  const [isTextVisible, setIsTextVisible] = useState(false);

  const showText = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsTextVisible(true);
  };

  const hideText = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsTextVisible(false);
  };

  return (
    <div>
      <section id="AboutMe" className={style.abutMeBlock}>
        <div className={style.aboutMeTitle}>
          <Title header={t("aboutMe")} />
        </div>
        <div className={style.rectanglesContainer}>
          <div
            className={style.rectangle}
            style={{
              marginTop: "0px",
              width: "700px",
              minHeight: "370px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
              overflow: "auto",
            }}
          >
            <h3>{t("asDeveloper")}</h3>
            <h4>{t("InfoAboutMe1")}</h4>
            {isTextVisible ? (
              <>
                <div>{t("InfoAboutMe2")}</div>
                <br />
                <div>{t("InfoAboutMe3")}</div>
                <br />
                <a href="#" onClick={hideText}>
                  Less
                </a>
              </>
            ) : (
              <a href="#" onClick={showText}>
                More of my stories
              </a>
            )}
          </div>
          <div
            style={{
              marginTop: "0px",
              width: "700px",
              height: "370px",
              border: "1px solid black",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <h3>{t("aboutMeSkills")}</h3>
            <div>{t("mySkills1")}</div>
            <div>{t("mySkills2")}</div>
            <div>{t("mySkills3")}</div>
            <div>{t("mySkills4")}</div>
            <div>{t("mySkills5")}</div>
            <div>{t("mySkills6")}</div>
            <div>{t("mySkills7")}</div>
            <div>{t("mySkills8")}</div>
            <div>{t("mySkills9")}</div>
            <div>{t("mySkills10")}</div>
            <div>{t("mySkills11")}</div>
          </div>
          <div
            style={{
              marginTop: "0px",
              width: "700px",
              height: "370px",
              border: "1px solid black",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <h3>{t("asPerson")}</h3>
            <div>{t("Personal")}</div>
          </div>
          <div
            style={{
              marginTop: "0px",
              width: "700px",
              height: "370px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <h3>{t("aboutMeGoals")}</h3>
            {t("goals")}
          </div>
        </div>
      </section>
    </div>
  );
};
