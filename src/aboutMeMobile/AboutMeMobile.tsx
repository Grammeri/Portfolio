import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./AboutMeMobile.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const AboutMeMobile = React.memo(() => {
    console.log("AboutMeMobile rendered");
    const { t } = useTranslation();
    const [isTextVisible, setIsTextVisible] = useState(false);

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
        <Swiper className={style.swiperPagination}
                pagination={true}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                touchRatio={2}
                resistanceRatio={0}>
            <SwiperSlide>
                <div className={`${style.rectangle} ${style.contentMarginBottom}`}
                     style={{ marginTop: 0, width: "300px", height: "700px", padding: "25px", backgroundColor: "white", overflow: "auto" }}>
                    <h3>{t("asDeveloper")}</h3>
                    <div className={style.textJustified}>
                        <span>{t("InfoAboutMe1")}</span>
                        <span style={{ fontWeight: "bold" }}>{t("InfoAboutMe2")}</span>
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
                <div style={{ marginTop: "0px", width: "300px", height: "700px", padding: "10px", color: "black", backgroundColor: "white" }}>
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
                <div style={{ marginTop: "0px", width: "300px", height: "700px", padding: "10px", color: "black", backgroundColor: "white" }}>
                    <h3>{t("asPerson")}</h3>
                    <div>{t("Personal")}</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ marginTop: "0px", width: "300px", height: "700px", padding: "10px", color: "black", backgroundColor: "white" }}>
                    <h3>{t("aboutMeGoals")}</h3>
                    {t("goals")}
                </div>
            </SwiperSlide>
        </Swiper>
    );
});
