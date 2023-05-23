import React, { useState } from 'react';
import style from './MyProjects.module.scss';
import { MyProject } from './project/Myproject';
import styleContainer from '../common/styles/Container.module.css';
import { Title } from '../common/Components/title/Title';
import socialNetWorkImg from './../assets/image/SocialNetwork.jpg';
import todoImg from './../assets/image/Todolist.jpg';
import startUpImg from "./../assets/image/StartUp.jpg";
import flashCardsImg from "./../assets/image/FlashCards.jpg";
import interviewImag from "./../assets/image/interviewImag.webp";
import instagram from "./../assets/image/instagram.png"

export const MyProjects = () => {
    const projects = [
        {
            title: "Todolist",
            description: "This is a todolist hosted on a shared server. Please be prepared to see unorganized or " +
                "outdated todo lists, as it is accessible to multiple users. Feel free to delete existing tasks and" +
                " create new ones to check the functionality. You should be able to delete, create, and sort tasks as" +
                " 'all', 'completed', and 'active'.",
            image: todoImg,
            appUrl: "https://grammeri.github.io/Todolist/",
            codeUrl: "https://github.com/grammeri/Todolist"
        },
        {
            title: "Social Network",
            description: "This is a social network project implemented using class components",
            image: socialNetWorkImg,
            appUrl: "https://grammeri.github.io/Samurai_23/",
            codeUrl: "https://github.com/grammeri/Samurai_23"
        },
        {
            title: "Start Up",
            description: "This is a start up project",
            image: startUpImg,
            appUrl: "https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/",
            codeUrl: "https://github.com/Dmitry-Klyuev/silevans"
        },
        {
            title: "FlashCards",
            description: "Flashcards for online training, using the quesion-answer system with the ability to create/" +
                "delete your own card decks. The project is publically accessible",
            image: flashCardsImg,
            appUrl: "https://grammeri.github.io/flashcards",
            codeUrl: "https://github.com/Grammeri/flashcards"
        },
        {
            title: "TestAssignment",
            description: "It is a test assignment performed using Redux-Saga, all details can be found in readme file both in Rus and Eng",
            image: interviewImag,
            appUrl: "https://grammeri.github.io/TestAssignment/",
            codeUrl: "https://github.com/Grammeri/TestAssignment"
        },
        {
            title: "Currently in progress",
            description: "This is an Inctagram project. Project stack: Next.js/Redux Tool Kit/RTK Querry",
            image: instagram,
            appUrl: "#",
            codeUrl: "https://github.com/Crash2022/Inctagram"
        },
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
                                <div className={style.projectOverlay}>
                                    <div>{project.description}</div>
                                    <div className={style.buttonsContainer}>
                                        <button
                                            className={style.appButton}
                                            onClick={() => project.title !== "Currently in progress" && openApp(project.appUrl)}
                                            disabled={project.title === "Currently in progress"}
                                        >
                                            {project.title === "Currently in progress" ? "In Progress" : "View Project"}
                                        </button>
                                        <button className={style.codeButton} onClick={() => openCode(project.codeUrl)}>View Code</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
