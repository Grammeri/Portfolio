import React from 'react'
import style from "./Nav.module.scss"


export function Nav() {
    return (
        <div className={style.nav}>
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
            <a href="#myUpdatedCV">CV</a>
            <a href="#Contacts">Contacts</a>
        </div>
    )
}

