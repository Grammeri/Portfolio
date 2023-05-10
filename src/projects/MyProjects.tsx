import React from 'react'
import style from './MyProjects.module.scss'
import {MyProject} from './project/Myproject';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/Components/title/Title';
import socialNetWorkImg from './../assets/image/SocialNetwork.jpg';
import todoImg from './../assets/image/Todolist.jpg';
import startUpImg from "./../assets/image/StartUp.jpg"
import flashCardsImg from "./../assets/image/FlashCards.jpg"


export const MyProjects = () => {

    const jumpToToDo = () => {
        const todoUrl = 'https://grammeri.github.io/Todolist/';
        window.open(todoUrl, '_blank');
    };

    const jumpToSocialNetwork = () => {
        const todoUrl = 'https://grammeri.github.io/Samurai_23/';
        window.open(todoUrl, '_blank');
    };

    const jumpToStartUp = () => {
        const todoUrl = 'https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/';
        window.open(todoUrl, '_blank');
    };
    const jumpToFlashCards = () => {
        const todoUrl = 'https://flashcards-bzwnji4ny-horobryh22.vercel.app/packs';
        window.open(todoUrl, '_blank');
    };

    const social = {
        backgroundImage: `url(${socialNetWorkImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };

    const startUp = {
        backgroundImage: `url(${startUpImg})`,
    };

    const flashCards = {
        backgroundImage: `url(${flashCardsImg})`,
    };

    return (
        <div id="MyProjects" className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.myProjectsContainer}`}>
                <Title header={"My Projects"}/>
                <div className={style.projects}>

                    <div onClick={jumpToToDo}>
                        <MyProject style={todolist} projectTitle={"Todolist"}/>
                    </div>

                    <div onClick={jumpToSocialNetwork}>
                        <MyProject style={social} projectTitle={"Social Network"}/>
                    </div>

                    <div onClick={jumpToStartUp}>
                        <MyProject style={startUp} projectTitle={"Start Up"}/>
                    </div>
                    <div onClick={jumpToFlashCards}>
                        <MyProject style={flashCards} projectTitle={"FlashCards"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

