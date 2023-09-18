import React from "react";
import { Title } from "common/Components/title/Title";
import { useTranslation } from "react-i18next";
import style from "./aboutMe.module.scss";
import styleContainer from "common/styles/Container.module.css";
import useResponsive from "hooks/useResponsive";
import {AboutMeMobile} from "../../src/aboutMeMobile/AboutMeMobile";
import {AboutMeDeskTop} from "../../src/aboutMeDeskTop/AboutMeDeskTop";

export const AboutMe = () => {
    const { t } = useTranslation();
    const {isMobile} = useResponsive();

    return (
        <div>
            <section id="AboutMe" className={style.abutMeBlock}>
                <div className={style.titleContainer}>
                    <Title header={t("aboutMe")}/>
                </div>
                <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                    {isMobile ? <AboutMeMobile /> : <AboutMeDeskTop />}
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
