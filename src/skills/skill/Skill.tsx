import React from 'react'
import style from './Skill.module.scss'

type Propstypes = {
  title: string
  icon: string
}

export const Skill = (props: Propstypes) => {
  return (
    <div className={style.skill}>
      <img src={props.icon} alt={''} />

      <h3>{props.title}</h3>
    </div>
  )
}
