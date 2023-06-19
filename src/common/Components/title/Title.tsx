import React from "react";
import style from "./Title.module.scss";

type TitleProps = {
  header: string;
};
export const Title = (props: TitleProps) => {
  return (
    <div className={style.title}>
      <h2 style={{ marginTop: "50px" }}>{props.header}</h2>
    </div>
  );
};
