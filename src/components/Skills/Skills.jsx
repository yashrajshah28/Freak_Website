import React from 'react'
import "./Skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import OtherSkills from './OtherSkills'
import Language from './Language'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <OtherSkills />
        <Language />
      </div>
    </section>
  )
}

export default Skills
