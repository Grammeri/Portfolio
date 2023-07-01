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
        </div>
      </section>
    </div>
  );
};
