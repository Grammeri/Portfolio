import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import style from "./AboutMeDeskTop.module.scss";
import styleContainer from "common/styles/Container.module.css";

export const AboutMeDeskTop = () => {
    const { t } = useTranslation();
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const ref = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isWaterFilled, setIsWaterFilled] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [displayedCredoText, setDisplayedCredoText] = useState("");

    const russianAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    const chooseAlphabet = (char: string) => {
        if (russianAlphabet.includes(char)) return russianAlphabet;
        if (englishAlphabet.includes(char)) return englishAlphabet;
        return '';
    };


    const showText = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        console.log('showText was clicked');
        event.preventDefault();
        event.stopPropagation();
        setIsTextVisible(true);
    };

    const hideText = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsTextVisible(false);
    };

    const isInView = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return rect.top <= windowHeight && rect.bottom >= 0;
    };

    const handleScroll = () => {
        const visible = isInView(ref.current);
        setIsInViewport(visible);

        if (visible && !isWaterFilled) {
            setStartAnimation(true);
            setTimeout(() => {
                setIsWaterFilled(true);
            }, 2000);
        } else if (!visible) {
            setIsWaterFilled(false);
            setStartAnimation(false);
            setDisplayText(false);
        }
    };

    useEffect(() => {
        if (isWaterFilled) {
            setTimeout(() => {
                setDisplayText(true);
            }, 2000);
        } else {
            setDisplayText(false);
        }
    }, [isWaterFilled]);

    useEffect(() => {
        if (displayText) {
            let fullText = t("myCredo");
            for (let i = 0; i <= fullText.length; i++) {
                setTimeout(() => {
                    setDisplayedCredoText(fullText.substr(0, i));
                }, i * 100);
            }
        }
    }, [displayText, t]);

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (displayText) {
            const fullText = t("myCredo");
            const totalDuration = 3000;
            const intervalDuration = 50;
            let animationProgress = 0;
            let charStopTimes = Array(fullText.length).fill(0).map((_, i) =>
                (i + 1) * (totalDuration / fullText.length)
            );

            const interval = setInterval(() => {
                let animatedText = '';

                for (let i = 0; i < fullText.length; i++) {
                    const currentChar = fullText[i];
                    const currentAlphabet = chooseAlphabet(currentChar);

                    if (currentAlphabet && animationProgress < charStopTimes[i]) {
                        animatedText += currentAlphabet[Math.floor(Math.random() * currentAlphabet.length)];
                    } else {
                        animatedText += currentChar;
                    }
                }

                setDisplayedCredoText(animatedText);
                animationProgress += intervalDuration;

                if (animationProgress > totalDuration) {
                    clearInterval(interval);
                }
            }, intervalDuration);

            return () => clearInterval(interval);
        }
    }, [displayText, t]);


    return (
        <div>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <div className={style.rectanglesContainer}>
                    <div className={style.rectangle}
                         style={{ marginTop: "0px", width: "400px", height: "400px", padding: "10px", backgroundColor: "white", overflow: "auto" }}>
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

                    <div style={{ boxSizing: "border-box", marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "white", backgroundColor: "black", overflow: "auto" }}>
                        <h3>{t("aboutMeSkills")}</h3>
                        <span>{t("mySkills1")}</span>
                        <span style={{ fontWeight: "bold" }}>{t("mySkills2")}</span>
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
                    <div ref={ref} style={{ marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "white", backgroundColor: "black", position: "relative" }}>
                        <h3>{t("asPerson")}</h3>
                        <div>{t("Personal")}</div>
                        <div className={`${startAnimation ? style.waterAnimation : style.removeWaterAnimation} ${style.roundedBottom}`}></div>
                        {displayText && (
                            <h1 className={style.credoText}>
                                {displayedCredoText}
                            </h1>
                        )}
                    </div>
                    <div style={{ marginTop: "0px", width: "400px", height: "400px", padding: "10px", color: "black", backgroundColor: "white" }}>
                        <h3>{t("aboutMeGoals")}</h3>
                        {t("goals")}
                    </div>
                </div>
            </div>
        </div>
    );
};
