// Nav.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Nav.module.scss';

export function Nav() {
    const [activeLink, setActiveLink] = useState('');
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const handleLinkClick = (event) => {
        setActiveLink(event.target.textContent);
    };

    return (
        <div className={style.nav}>
            <div className={style.links}>
                <a href="#Main" style={{ color: activeLink === t('home') ? 'white' : 'black' }} onClick={handleLinkClick}>
                    {t('home')}
                </a>
                <a href="#Skills" style={{ color: activeLink === t('skills') ? 'white' : 'black' }} onClick={handleLinkClick}>
                    {t('skills')}
                </a>
                <a href="#MyProjects" style={{ color: activeLink === t('projects') ? 'white' : 'black' }} onClick={handleLinkClick}>
                    {t('projects')}
                </a>
                <a href="#myUpdatedCV" style={{ color: activeLink === t('cv') ? 'white' : 'black' }} onClick={handleLinkClick}>
                    {t('cv')}
                </a>
                <a href="#Contacts" style={{ color: activeLink === t('contacts') ? 'white' : 'black' }} onClick={handleLinkClick}>
                    {t('contacts')}
                </a>
            </div>
            <div className={style.language}>
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
{/*                <div>{t("text")}</div>
                <div>{t("hello")}</div>*/}
            </div>
        </div>
    );
}
