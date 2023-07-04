import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Nav.module.scss";
import ruFlag from "../assets/image/RussianFlag.jpg";
import gbFlag from "../assets/image/BritishFlag.jpg";

export function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const linkText = event.currentTarget.textContent || "";
    setActiveLink(linkText);

    if (linkText === t("portfolioCode")) {
      window.open("https://github.com/Grammeri/Portfolio", "_blank");
    }
  };

  return (
    <div className={style.nav}>
      <div className={style.links}>
        <a
          href="#Main"
          className={activeLink === t("home") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("home")}</u>
        </a>
        <a
          href="#AboutMe"
          className={activeLink === t("aboutMe") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("aboutMe")}</u>
        </a>
        <a
          href="#MyProjects"
          className={activeLink === t("projects") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("projects")}</u>
        </a>
        <a
          href="#Contacts"
          className={activeLink === t("contacts") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("contacts")}</u>
        </a>
        <a
          href="#Code"
          className={activeLink === t("portfolioCode") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("portfolioCode")}</u>
        </a>
      </div>
      <div className={style.flags}>
        <div className={style.flag}>
          <div onClick={() => changeLanguage("en")}>
            <img
              src={gbFlag}
              alt="UK Flag"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
          <span
            className={
              currentLanguage === "en"
                ? style.languageLabel
                : style.languageLabelHidden
            }
          >
            Eng
          </span>
        </div>
        <div className={style.flag}>
          <div onClick={() => changeLanguage("ru")}>
            <img
              src={ruFlag}
              alt="RU Flag"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
          <span
            className={
              currentLanguage === "ru"
                ? style.languageLabel
                : style.languageLabelHidden
            }
          >
            Rus
          </span>
        </div>
      </div>
    </div>
  );
}
