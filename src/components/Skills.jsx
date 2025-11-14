import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='py-20 align-element' id='skill'>
      <SectionTitle title="tech stack"/>
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill)=>{
          return <SkillsCard key={skill.id} {...skill}/>
        })}
      </div>
    </div>
  )
}

export default Skills