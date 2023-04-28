import React from 'react';
import myCV from "./assets/cv/CV_wo_Photo_US.png"
import style from "./myCv.module.css"

export const MyCv = () => {
    return (
        <div id={"myUpdatedCV"} className={style.myCv}>
                <img src={myCV} alt="My CV"/>
        </div>

    );
};

