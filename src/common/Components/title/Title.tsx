import React from "react";
import style from "./Title.module.scss";

export type TitleProps = {
  header: string;
  alternativeColor?: string;
};

export const Title = (props: TitleProps) => {
  return (
    <div className={`${style.title} ${props.alternativeColor}`}>
      <h2 style={{ marginTop: "50px" }}>{props.header}</h2>
    </div>
  );
};
