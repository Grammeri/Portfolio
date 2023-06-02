// MyCV.tsx
import React from 'react';
import myCVen from "./assets/cv/CV_wo_Photo_US.png";
import myCVru from "./assets/cv/myCV_ru.png";
import style from "./myCv.module.css";
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export const MyCv = () => {
    const { t, i18n } = useTranslation();

    // Choose the correct download link based on the language
    const cvDownloadLink = i18n.language === 'ru'
        ? 'https://drive.google.com/file/d/19dSZGZlbKFGJ1d05FcHgjsaunvbOV319/view?usp=drive_link'
        : 'https://drive.google.com/file/d/1G0f2CQkvxMhNEvjw9D0aKAmIv0MBcJ3q/view?usp=share_link';

    const handleDownload = (event:any) => {
        event.preventDefault();
        window.open(cvDownloadLink, '_blank');
    };

    // Choose the correct image based on the language
    const cvImage = i18n.language === 'ru' ? myCVru : myCVen;

    return (
        <div className={style.cvContainer}>
            <div id="myUpdatedCV" className={style.myCv}>
                <img src={cvImage} alt="My CV" />
                <div className={style.downloadContainer}>
                    <a
                        href={cvDownloadLink}
                        download="My_CV.pdf"
                        onClick={(event) => handleDownload(event)}
                        className={style.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span><h4>{t('downloadMyCv')}</h4></span>
                        <BsDownload className={style.downloadIcon} />
                    </a>


                </div>
            </div>
        </div>
    );
};
