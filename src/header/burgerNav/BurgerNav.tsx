import React from "react";
import { useTranslation } from "react-i18next";
import style from "./BurgerNav.module.scss";
import { FlagIcon } from "react-flag-kit";

export function BurgerNav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={style.burgerNav}>
      <a href="#Main">{t("Home")}</a>
      <a href="#Skills">{t("Skills")}</a>
      <a href="#MyProjects">{t("Projects")}</a>
      <a href="#Contacts">{t("Contacts")}</a>
      <div onClick={() => changeLanguage("en")}>
        <FlagIcon code="GB" size={64} />
      </div>
      <div onClick={() => changeLanguage("ru")}>
        <FlagIcon code="RU" size={64} />
      </div>
      <div>{t("text")}</div>
      <div>{t("hello")}</div>
    </div>
  );
}
