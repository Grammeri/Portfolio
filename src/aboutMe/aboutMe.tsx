import React, {useState} from "react";
import {Title} from "common/Components/title/Title";
import {useTranslation} from "react-i18next";
import style from "./aboutMe.module.scss";
import styleContainer from "common/styles/Container.module.css";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import useResponsive from "hooks/useResponsive";
import { Pagination } from 'swiper/modules';

export const AboutMe = () => {
    const {t} = useTranslation();
    const [isTextVisible, setIsTextVisible] = useState(false);
    const {isMobile} = useResponsive();

    const showText = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsTextVisible(true);
    };

    const hideText = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsTextVisible(false);
    };


    return (
        <div>
            <section id="AboutMe" className={style.abutMeBlock}>
                <div className={style.titleContainer}>
                    <Title header={t("aboutMe")}/>
                </div>
                <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                    {isMobile ? (
                        <Swiper className={style.swiperPagination}
                                pagination={true}
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                touchRatio={1}
                        >
                            <SwiperSlide>
                                <div className={style.rectangle}
                                     style={{marginTop: 0, width: "300px", height: "400px", padding: "10px", backgroundColor: "white", overflow: "auto"}}>
                                    <h3>{t("asDeveloper")}</h3>
                                    <div className={style.textJustified}>
                                        <span>{t("InfoAboutMe1")}</span>
                                        <span style={{fontWeight: "bold"}}>{t("InfoAboutMe2")}</span>
                                        <span>{t("InfoAboutMe3")}</span>
                                        {isTextVisible ? (
                                            <>
                                                <p>{t("InfoAboutMe4")}</p>
                                                <p>{t("InfoAboutMe5")}</p>
                                                <p>{t("InfoAboutMe6")}</p>
                                                <div>
                                                    <a href="#" onClick={hideText}>
                                                        {t("Less")}
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <div>
                                                <a href="#" onClick={showText}>
                                                    {t("More of my stories")}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    style={{marginTop: "0px", width: "300px", height: "auto", padding: "10px", color: "black", backgroundColor: "white"}}>
                                    <h3>{t("aboutMeSkills")}</h3>
                                    <span>{t("mySkills1")}</span>
                                    <span style={{fontWeight: "bold"}}>{t("mySkills2")}</span>
                                    <div>{t("mySkills3")}</div>
                                    <div>{t("mySkills4")}</div>
                                    <div>{t("mySkills5")}</div>
                                    <div>{t("mySkills6")}</div>
                                    <div>{t("mySkills7")}</div>
                                    <div>{t("mySkills8")}</div>
                                    <div>{t("mySkills9")}</div>
                                    <div>{t("mySkills10")}</div>
                                    <div>{t("mySkills11")}</div>
                                    <div>{t("mySkills12")}</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    style={{marginTop: "0px", width: "300px", height: "400px", padding: "10px", color: "black", backgroundColor: "white"}}>
                                    <h3>{t("asPerson")}</h3>
                                    <div>{t("Personal")}</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    style={{marginTop: "0px", width: "300px", height: "400px", padding: "10px", color: "black", backgroundColor: "white"}}>
                                    <h3>{t("aboutMeGoals")}</h3>
                                    {t("goals")}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <div className={style.rectanglesContainer}>
                            <div className={style.rectangle}
                                 style={{marginTop: "0px", width: "400px", height: "400px", padding: "10px", backgroundColor: "white", overflow: "auto"}}>
                                <h3>{t("asDeveloper")}</h3>
                                <div className={style.textJustified}>
                                    <span>{t("InfoAboutMe1")}</span>
                                    <span style={{fontWeight: "bold"}}>{t("InfoAboutMe2")}</span>
                                    <span>{t("InfoAboutMe3")}</span>
                                    {isTextVisible ? (
                                        <>
                                            <p>{t("InfoAboutMe4")}</p>
                                            <p>{t("InfoAboutMe5")}</p>
                                            <p>{t("InfoAboutMe6")}</p>
                                            <div>
                                                <a href="#" onClick={hideText}>
                                                    {t("Less")}
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <div>
                                            <a href="#" onClick={showText}>
                                                {t("More of my stories")}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                style={{marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "white", backgroundColor: "black"}}>
                                <h3>{t("aboutMeSkills")}</h3>
                                <span>{t("mySkills1")}</span>
                                <span style={{fontWeight: "bold"}}>{t("mySkills2")}</span>
                                <div>{t("mySkills3")}</div>
                                <div>{t("mySkills4")}</div>
                                <div>{t("mySkills5")}</div>
                                <div>{t("mySkills6")}</div>
                                <div>{t("mySkills7")}</div>
                                <div>{t("mySkills8")}</div>
                                <div>{t("mySkills9")}</div>
                                <div>{t("mySkills10")}</div>
                                <div>{t("mySkills11")}</div>
                                <div>{t("mySkills12")}</div>
                            </div>
                            <div
                                style={{marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "white", backgroundColor: "black"}}>
                                <h3>{t("asPerson")}</h3>
                                <div>{t("Personal")}</div>
                            </div>
                            <div
                                style={{marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "black", backgroundColor: "white"}}>
                                <h3>{t("aboutMeGoals")}</h3>
                                {t("goals")}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
