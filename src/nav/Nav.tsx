import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Nav.module.scss";
import ruFlag from "../assets/image/RussianFlag.jpg";
import gbFlag from "../assets/image/BritishFlag.jpg";

export function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  /*  const cvDownloadLink =
    i18n.language === "ru"
      ? "https://drive.google.com/file/d/1IDxfUDWHDtF1kAEmlpORUb9IlNor9oi7/view?usp=drive_link"
      : "https://drive.google.com/file/d/1d9AgnfM4c9Vxnoi5a-_R04A_oFyKFdiW/view?usp=drive_link";*/

  /*  const handleDownload = (event: any) => {
    event.preventDefault();
    window.open(cvDownloadLink, "_blank");
  };*/

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
        {/*<a
          href="#Skills"
          className={activeLink === t("skills") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("skills")}
        </a>*/}
        <a
          href="#MyProjects"
          className={activeLink === t("projects") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("projects")}</u>
        </a>
        {/*        <a
          href="#MyTests"
          className={activeLink === t("tests") ? style.active : ""}
          onClick={handleLinkClick}
        >
          <u>{t("tests")}</u>
        </a>*/}
        {/*<a
          href="#myUpdatedCV"
          className={activeLink === t("cv") ? style.active : ""}
          onClick={handleLinkClick}
        >
          {t("cv")}
        </a>*/}
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
        {/*        <a
          href={cvDownloadLink}
          download="My_CV.pdf"
          onClick={handleDownload}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>{t("downloadMyCv")}</u>
        </a>*/}
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
