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
import whatsUp from "./../assets/image/whatsUp.png"
import { useTranslation } from 'react-i18next';

export const MyProjects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: "Todolist",
            description: t("todolistDescription"),
            image: todoImg,
            appUrl: "https://grammeri.github.io/Todolist/",
            codeUrl: "https://github.com/grammeri/Todolist"
        },
        {
            title: "Social Network",
            description: t("socialNetworkDescription"),
            image: socialNetWorkImg,
            appUrl: "https://grammeri.github.io/Samurai_23/",
            codeUrl: "https://github.com/grammeri/Samurai_23"
        },
        {
            title: "Start Up",
            description: t("startUpDescription"),
            image: startUpImg,
            appUrl: "https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/",
            codeUrl: "https://github.com/Dmitry-Klyuev/silevans"
        },
        {
            title: "FlashCards",
            description: t("flashCardsDescription"),
            image: flashCardsImg,
            appUrl: "https://grammeri.github.io/flashcards",
            codeUrl: "https://github.com/Grammeri/flashcards"
        },
        {
            title: "TestAssignment",
            description: t("testAssignmentDescription"),
            image: interviewImag,
            appUrl: "https://grammeri.github.io/TestAssignment/",
            codeUrl: "https://github.com/Grammeri/TestAssignment"
        },
        {
            title: "Test WhatsUp",
            description: t("testWhatsUpDescription"),
            image: whatsUp,
            appUrl: "https://grammeri.github.io/mockWhatsupTest",
            codeUrl: "https://https://github.com/Grammeri/mockWhatsupTest/"
        },
        {
            title: "Currently in progress",
            description: t("currentlyInProgressDescription"),
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
                <Title header={t("myProjects")} />
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
                                            onClick={() => project.title !== t("currentlyInProgress") && openApp(project.appUrl)}
                                            disabled={project.title === t("currentlyInProgress")}
                                        >
                                            {project.title === t("currentlyInProgress") ? t("inProgress") : t("viewProject")}
                                        </button>
                                        <button className={style.codeButton} onClick={() => openCode(project.codeUrl)}>{t("viewCode")}</button>
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
