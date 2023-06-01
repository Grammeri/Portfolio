import React from 'react';
import './App.css';
import Header from "../src/header/Header";
import {MyProjects} from "../src/projects/MyProjects";
import {Contacts} from "../src/projects/project/contacts/Contacts";
import {Skills} from "../src/skills/Skills";
import {Footer} from "../src/footer/Footer";
import {Main} from "../src/main/Main";
import {MyCv} from "myCv";
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <MyCv/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
