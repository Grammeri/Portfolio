import React from 'react'
import style from "./BurgerNav.module.scss"


export function BurgerNav() {
    return (
        <div className={style.burgerNav}>
            <a href="#Main">Home</a>
            <a href="#Skills">Skills</a>
{/*            <Link
                //activeClass={style.active}
                to="MyProjects"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >Projects</Link>*/}
            <a  href="#MyProjects">Projects</a>
            <a href="#Contacts">Contacts</a>
        </div>
    )
}

