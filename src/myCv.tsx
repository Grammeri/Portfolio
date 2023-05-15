import React from 'react';
import myCV from "./assets/cv/CV_wo_Photo_US.png";
import style from "./myCv.module.css";
import { BsDownload } from 'react-icons/bs';

export const MyCv = () => {
    const handleDownload = () => {
        window.open('https://drive.google.com/uc?export=download&id=1W4AFSFKswj3ZgCXmxRDkPKyvCmiWHcj_', '_blank');
    };

    return (
        <div className={style.cvContainer}>
            <div id="myUpdatedCV" className={style.myCv}>
                <img src={myCV} alt="My CV" />
                <div className={style.downloadContainer}>
                    <a
                        href="https://drive.google.com/file/d/1PNxQXSnMdS-pfdt2FuwOY5b_jChqK3_y/view?usp=sharing"
                        download="My_CV.pdf"
                        onClick={handleDownload}
                        className={style.downloadLink}
                    >
                        <span><h4>Download my CV</h4></span>
                        <BsDownload className={style.downloadIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
};
