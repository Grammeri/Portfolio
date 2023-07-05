import React, { useState } from "react";
import style from "./MyProjects.module.scss";
import { MyProject } from "./project/Myproject";
import styleContainer from "../common/styles/Container.module.css";
import { Title } from "../common/Components/title/Title";
import { useTranslation } from "react-i18next";
import { projectsList } from "./projectsList";
import { MyTests } from "test/MyTests";

export const MyProjects = () => {
  const { t } = useTranslation();
  const projects = projectsList(t);
  const [showTests, setShowTests] = useState(false);

  const handleShowTests = (event: any) => {
    event.preventDefault();
    setShowTests(!showTests);
  };

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
                  stack={project.stack}
                  videoUrl={project.videoUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={style.moreProjects}>
          <a href="#" onClick={handleShowTests}>
            {showTests ? t("LessProjects") : t("MoreProjects")}
          </a>
        </div>
        {showTests && <MyTests />}
      </div>
    </section>
  );
};
