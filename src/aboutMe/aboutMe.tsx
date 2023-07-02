import React from "react";
import { Title } from "common/Components/title/Title";
import { useTranslation } from "react-i18next";
import style from "./aboutMe.module.scss";

export const AboutMe = (props: any) => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="AboutMe" className={style.abutMeBlock}>
        <div className={style.aboutMeContainer}>
          <Title header={t("aboutMe")} />
          <div
            style={{
              marginTop: "25px",
              width: "500px",
              height: "350px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            {t("InfoAboutMe")}
          </div>
          <div
            style={{
              marginTop: "25px",
              width: "500px",
              height: "350px",
              border: "1px solid black",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            {t("mySkills")}
          </div>
          <div
            style={{
              marginTop: "25px",
              width: "500px",
              height: "350px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            {t("Personal")}
          </div>
          <div
            style={{
              marginTop: "25px",
              width: "500px",
              height: "350px",
              border: "1px solid black",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            {t("myGoal")}
          </div>
        </div>
      </section>
    </div>
  );
};
