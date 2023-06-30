import React from "react";
import style from "./MyProjects.module.scss";
import { MyProject } from "./project/Myproject";
import styleContainer from "../common/styles/Container.module.css";
import { Title } from "../common/Components/title/Title";
import { useTranslation } from "react-i18next";
import { projectsList } from "./projectsList";

export const MyProjects = () => {
  const { t } = useTranslation();
  const projects = projectsList(t);

  return (
    <section id="MyProjects" className={style.myProjectsBlock}>
      <div
        className={`${styleContainer.container} ${style.myProjectsContainer}`}
      >
        <Title header={t("myProjects")} />
        <div className={style.projects}>
          <div className={style.projectsInner}>
            {projects.map((project, index) => (
              <div key={index} className={`${style.projectItem} projectItem`}>
                <MyProject
                  projectTitle={project.title}
                  image={project.image}
                  projectDescription={project.description}
                  appUrl={project.appUrl}
                  codeUrl={project.codeUrl}
                  // date={project.date}
                  stack={project.stack}
                  videoUrl={project.videoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
