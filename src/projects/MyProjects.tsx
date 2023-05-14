import React, { useState } from 'react';
import style from './MyProjects.module.scss';
import { MyProject } from './project/Myproject';
import styleContainer from '../common/styles/Container.module.css';
import { Title } from '../common/Components/title/Title';
import socialNetWorkImg from './../assets/image/SocialNetwork.jpg';
import todoImg from './../assets/image/Todolist.jpg';
import startUpImg from "./../assets/image/StartUp.jpg";
import flashCardsImg from "./../assets/image/FlashCards.jpg";

export const MyProjects = () => {
    const projects = [
        {
            title: "Todolist",
            image: todoImg,
            appUrl: "https://grammeri.github.io/Todolist/",
            codeUrl: "https://github.com/grammeri/Todolist"
        },
        {
            title: "Social Network",
            image: socialNetWorkImg,
            appUrl: "https://grammeri.github.io/Samurai_23/",
            codeUrl: "https://github.com/grammeri/Samurai_23"
        },
        {
            title: "Start Up",
            image: startUpImg,
            appUrl: "https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/",
            codeUrl: "https://github.com/Dmitry-Klyuev/silevans"
        },
        {
            title: "FlashCards",
            image: flashCardsImg,
            appUrl: "https://grammeri.github.io/flashcards",
            codeUrl: "https://github.com/Grammeri/flashcards"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const openApp = (appUrl) => {
        window.open(appUrl, '_blank');
    };

    const openCode = (codeUrl) => {
        window.open(codeUrl, '_blank');
    };

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div id="MyProjects" className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <Title header={"My Projects"} />
                <div className={style.projects}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={style.projectItem}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <MyProject style={{ backgroundImage: `url(${project.image})` }} projectTitle={project.title} />
                            {activeIndex === index && (
                                <div className={style.buttonsContainer}>
                                    <button className={style.appButton} onClick={() => openApp(project.appUrl)}>View Project</button>
                                    <button className={style.codeButton} onClick={() => openCode(project.codeUrl)}>View Code</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
