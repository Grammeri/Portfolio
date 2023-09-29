import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Nav.module.scss";
import ruFlag from "../assets/image/RussianFlag.jpg";
import gbFlag from "../assets/image/BritishFlag.jpg";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className={style.nav}>
      <button
        className={style.hamburgerButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`${style.links} ${isMenuOpen ? style.open : ""}`}>
        <a
          href="#Main"
          className={activeLink === t("home") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("home")}
        </a>
        <a
          href="#AboutMe"
          className={activeLink === t("aboutMe") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("aboutMe")}
        </a>
        <a
          href="#MyProjects"
          className={activeLink === t("projects") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("projects")}
        </a>
        <a
          href="#Contacts"
          className={activeLink === t("contacts") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("contacts")}
        </a>
        <a
          href="#Code"
          className={activeLink === t("portfolioCode") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("portfolioCode")}
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
