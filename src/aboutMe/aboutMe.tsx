import React, { useState } from "react";
import { Title } from "common/Components/title/Title";
import { useTranslation } from "react-i18next";
import style from "./aboutMe.module.scss";
import styleContainer from "common/styles/Container.module.css";

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
        <div className={style.titleContainer}>
          <Title header={t("aboutMe")} />
        </div>
        <div
          className={`${styleContainer.container} ${style.myProjectsContainer}`}
        >
          <div className={style.rectanglesContainer}>
            <div
              className={style.rectangle}
              style={{
                marginTop: "0px",
                width: "500px",
                minHeight: "500px",
                padding: "10px",
                backgroundColor: "white",
                overflow: "auto",
              }}
            >
              <h3>{t("asDeveloper")}</h3>
              <div className={style.textJustified}>
                <span>{t("InfoAboutMe1")}</span>
                <span style={{ fontWeight: "bold" }}>{t("InfoAboutMe2")}</span>
                <span>{t("InfoAboutMe3")}</span>
                {isTextVisible ? (
                  <>
                    <p>{t("InfoAboutMe4")}</p>
                    <p>{t("InfoAboutMe5")}</p>
                    <p>{t("InfoAboutMe6")}</p>

                    <div>
                      <a href="#" onClick={hideText}>
                        {t("Less")}
                      </a>
                    </div>
                  </>
                ) : (
                  <div>
                    <a href="#" onClick={showText}>
                      {t("More of my stories")}
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                marginTop: "0px",
                width: "500px",
                height: "500px",
                padding: "10px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <h3>{t("aboutMeSkills")}</h3>
              <span>{t("mySkills1")}</span>
              <span style={{ fontWeight: "bold" }}>{t("mySkills2")}</span>
              <div>{t("mySkills3")}</div>
              <div>{t("mySkills4")}</div>
              <div>{t("mySkills5")}</div>
              <div>{t("mySkills6")}</div>
              <div>{t("mySkills7")}</div>
              <div>{t("mySkills8")}</div>
              <div>{t("mySkills9")}</div>
              <div>{t("mySkills10")}</div>
              <div>{t("mySkills11")}</div>
              <div>{t("mySkills12")}</div>
            </div>
            <div
              style={{
                marginTop: "0px",
                width: "500px",
                height: "500px",
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
                width: "500px",
                height: "500px",
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <h3>{t("aboutMeGoals")}</h3>
              {t("goals")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
