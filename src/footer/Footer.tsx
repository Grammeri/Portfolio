import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "./../../src/common/styles/Container.module.css";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <div className={style.footerContent}>
          <div className={style.footerText}>{t("portfolioStack")}</div>
          <div className={style.footerText}>{t("adoptedForSmartphones")}</div>
          <div className={style.socialIcons}>
            <div className={style.socialIcon}>
              <a href="https://github.com/Grammeri">
                <GithubIcon style={{ color: "black", fontSize: "33px" }} />
              </a>
            </div>
            <div className={style.socialIcon}>
              <a href="https://t.me/dmitrysnikolayev">
                <TelegramIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className={style.socialIcon}>
              <a href="https://www.linkedin.com/in/dmitry-nikolayev-a34978258/">
                <LinkedInIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className={style.socialIcon}>
              <a href="mailto:reacttsxgrammer@gmail.com">
                <AlternateEmailIcon
                  style={{ color: "black", fontSize: "40px" }}
                />
              </a>
            </div>
          </div>
          <div className={style.footerText}>{t("copyRight")}</div>
        </div>
      </div>
    </div>
  );
};
