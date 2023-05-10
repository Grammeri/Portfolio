import React, { useState } from 'react';
import style from './Nav.module.scss';

export function Nav() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (event) => {
        setActiveLink(event.target.textContent);
    };

    return (
        <div className={style.nav}>
            <a href="#Main" style={{ color: activeLink === 'Home' ? 'white' : 'black' }} onClick={handleLinkClick}>
                Home
            </a>
            <a href="#Skills" style={{ color: activeLink === 'Skills' ? 'white' : 'black' }} onClick={handleLinkClick}>
                Skills
            </a>
            <a href="#MyProjects" style={{ color: activeLink === 'Projects' ? 'white' : 'black' }} onClick={handleLinkClick}>
                Projects
            </a>
            <a href="#myUpdatedCV" style={{ color: activeLink === 'CV' ? 'white' : 'black' }} onClick={handleLinkClick}>
                CV
            </a>
            <a href="#Contacts" style={{ color: activeLink === 'Contacts' ? 'white' : 'black' }} onClick={handleLinkClick}>
                Contacts
            </a>
        </div>
    );
}
