import React from 'react';
import './App.css';
import Header from "../src/header/Header";
import {MyProjects} from "../src/projects/MyProjects";
import {Contacts} from "../src/projects/project/contacts/Contacts";
import {Skills} from "../src/skills/Skills";
import {Footer} from "../src/footer/Footer";
import {Main} from "../src/main/Main";





function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
