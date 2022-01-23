import React from 'react'
import style from "./MyProjects.module.css"
import {MyProject} from "./project/Myproject";
import styleContainer from "../common/styles/Container.module.css";


export const MyProjects = () => {
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <MyProject projectTitle={"Todolist"}
                               projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>


                    <MyProject projectTitle={"Social Network"}
                               projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                               " Assumenda, autem itaque neque obcaecati quod repellendus reprehenderit sunt unde!" +
                               " Commodi hic minus reiciendis tempore temporibus? Consectetur eveniet maiores molestias non pariatur."}/>

                </div>
            </div>
        </div>
    )
}

