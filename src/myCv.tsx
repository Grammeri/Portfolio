import React from "react";
import myCVen from "./assets/cv/myCV_en.png";
import myCVru from "./assets/cv/myCV_ru.png";
import style from "./myCv.module.css";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const MyCv = () => {
  const { t, i18n } = useTranslation();

  const cvDownloadLink =
    i18n.language === "ru"
      ? "https://drive.google.com/file/d/1IDxfUDWHDtF1kAEmlpORUb9IlNor9oi7/view?usp=drive_link"
      : "https://drive.google.com/file/d/1d9AgnfM4c9Vxnoi5a-_R04A_oFyKFdiW/view?usp=drive_link";

  const handleDownload = (event: any) => {
    event.preventDefault();
    window.open(cvDownloadLink, "_blank");
  };

  const cvImage = i18n.language === "ru" ? myCVru : myCVen;

  return (
    <div className={style.cvContainer}>
      <div id="myUpdatedCV" className={style.myCv}>
        <img src={cvImage} alt="My CV" />
        <div className={style.downloadContainerDesktop}>
          <DownloadLink />
        </div>
      </div>
      <div className={style.downloadContainerMobile}>
        <DownloadLink />
      </div>
    </div>
  );

  function DownloadLink() {
    return (
      <a
        href={cvDownloadLink}
        download="My_CV.pdf"
        onClick={handleDownload}
        className={style.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4>{t("downloadMyCv")}</h4>
        <BsDownload className={style.downloadIcon} />
      </a>
    );
  }
};
