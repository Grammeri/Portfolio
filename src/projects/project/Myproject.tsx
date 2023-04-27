import React from 'react'
import style from "./MyProject.module.scss"


type PropsTypes = {
    projectTitle: string
    projectDescription: string
    style:any
}

export const MyProject = (props: PropsTypes) => {
    return (
        <div className={style.myProject}>
            <div className={style.image} style={props.style}>
{/*<a className={style.myProjectBtn}>Check it out</a>*/}
            </div>
{/*            <div className={style.myprojectInfo}>
                <h3 className={style.projectTitle}>{props.projectTitle}</h3>
                <span className={style.description}>{props.projectDescription}</span>
            </div>*/}
        </div>
    )
}