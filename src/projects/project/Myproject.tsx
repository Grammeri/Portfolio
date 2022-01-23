import React from 'react'
import style from "./MyProject.module.css"


type PropsTypes = {
    projectTitle: string
    projectDescription: string
}

export const MyProject = (props: PropsTypes) => {
    return (
        <div className={style.myProject}>
            <div className={style.myProjectBtn}>
                <button>Push the button and enjoy my project!
                </button>
            </div>
            <h3>{props.projectTitle}</h3>
            <span className={style.description}>{props.projectDescription}</span>
        </div>
    )
}