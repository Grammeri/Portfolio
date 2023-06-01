// BurgerNav.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from "./BurgerNav.module.scss";

export function BurgerNav() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={style.burgerNav}>
            <a href="#Main">{t("Home")}</a>
            <a href="#Skills">{t("Skills")}</a>
            <a href="#MyProjects">{t("Projects")}</a>
            <a href="#Contacts">{t("Contacts")}</a>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <div>{t("text")}</div>
            <div>{t("hello")}</div>
        </div>
    )
}
