import React from 'react'
import style from "./Skill.module.scss"

type Propstypes = {
    title:string
    description:string
}

export const Skill = (props:Propstypes) => {
    return (
        <div className={style.skill}>
<div className={style.icon}>Icon here</div> {/*to be taken care of later*/}
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}


