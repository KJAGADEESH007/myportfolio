import React from 'react'
import Content from '../Component/Content'
import Background from '../Component/Background'
import Aboutme from '../Component/Aboutme'
import Skills from '../Component/Skills'
import Projects from '../Component/Projects'
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div> <Background></Background>
    <Content></Content>
    <Aboutme></Aboutme>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  )
}

export default Home