import React from "react";
import style from "./Skill.module.scss";

type Propstypes = {
  title: string;
  icon: any;
};

export const Skill = (props: Propstypes) => {
  return (
    <div className={style.skill}>
      <img src={props.icon} />

      <h3>{props.title}</h3>
    </div>
  );
};
