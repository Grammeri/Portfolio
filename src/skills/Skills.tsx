/*
import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";
import { Title } from "common/Components/title/Title";
import reactIcon from "../assets/icons/React.jpg";
import reduxIcon from "../assets/icons/Redux.jpg";
import javaScript from "../assets/icons/JavaScript.jpg";
import typeScript from "../assets/icons/TypeScript.jpg";
import http from "../assets/icons/Http.jpg";
import restFullAPI from "../assets/icons/RestFullAPI.jpg";
import axios from "../assets/icons/Axios.jpg";
import htlm from "../assets/icons/Html.jpg";
import css from "../assets/icons/Css.jpg";
import gitHub from "../assets/icons/GitHub.jpg";
import postMan from "../assets/icons/PostMan.jpg";
import materialUI from "../assets/icons/MaterialUI.jpg";
import java from "../assets/icons/Java.jpg";
import sql from "../assets/icons/Sql.jpg";
import javalin from "../assets/icons/Javalin.jpg";
import Fade, { FadeProps } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  const fadeProps: FadeProps = {
    direction: "up", // Use "direction" instead of "top"
  };

  return (
    <div id="Skills" className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title header={t("skills")} />
        <div className={style.skills}>
          <Fade {...fadeProps}>
            <Skill title={"React"} icon={reactIcon} />
            <Skill title={"Redux"} icon={reduxIcon} />
            <Skill title={"JavaScript"} icon={javaScript} />
            <Skill title={"TypeScript"} icon={typeScript} />
            <Skill title={"HTTP"} icon={http} />
            <Skill title={"RestAPI"} icon={restFullAPI} />
            <Skill title={"Axios"} icon={axios} />
            <Skill title={"HTML"} icon={htlm} />
            <Skill title={"CSS"} icon={css} />
            <Skill title={"GitHub"} icon={gitHub} />
            <Skill title={"Postman"} icon={postMan} />
            <Skill title={"Material UI"} icon={materialUI} />
            <Skill title={"Java"} icon={java} />
            <Skill title={"SQL"} icon={sql} />
            <Skill title={"Javalin"} icon={javalin} />
          </Fade>
        </div>
      </div>
    </div>
  );
};
*/
