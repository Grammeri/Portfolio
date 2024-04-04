import React from 'react'
import Header from '../src/header/Header'
import { MyProjects } from 'projects/MyProjects'
import { Contacts } from 'projects/project/contacts/Contacts'
import { Footer } from 'footer/Footer'
import { Main } from 'main/Main'
import { AboutMe } from 'aboutMe/aboutMe'
import './reset.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/*<Skills />*/}
      <AboutMe />
      <MyProjects />
      {/*<MyTests />*/}
      {/*<MyCv />*/}
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
