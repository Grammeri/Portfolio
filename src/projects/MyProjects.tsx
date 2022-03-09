import React from 'react'
import style from './MyProjects.module.css'
import {MyProject} from './project/Myproject';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/Components/title/Title';
import todoImg from './../assets/image/SocialNetwork.jpg';
import socialNetWork from './../assets/image/Todolist.jpg';


export const MyProjects = () => {
    const social = {
        backgroundImage: `url(${socialNetWork})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <Title header={"My Projects"}/>
                <div className={style.projects}>
                    <MyProject style={social} projectTitle={"Todolist"}
                               projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>


                    <MyProject style={todolist} projectTitle={"Social Network"}
                               projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                               " Assumenda, autem itaque neque obcaecati quod repellendus reprehenderit sunt unde!" +
                               " Commodi hic minus reiciendis tempore temporibus? Consectetur eveniet maiores molestias non pariatur."}/>

                </div>
            </div>
        </div>
    )
}

