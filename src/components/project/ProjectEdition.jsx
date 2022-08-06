import { useState } from 'react'
import ProjectLayout from './ProjectLayout.jsx'
import style from './ProjectEdition.module.scss'

import CyanButton from '../extras/CyanButton.jsx'

function ProjectEdition({ project, setProjects, setBacked, setTotalBackers}) {
  const [projectData, setProjectData] = useState(1)
  const [count, setCount] = useState(1)

  
  function handleClick(project) {
    if(project.amountLeft === 0) return
    project.amountLeft = project.amountLeft - 1

    setBacked(prev => prev + project.price)
    setTotalBackers(prev => prev + 1)
    
    setProjects(prev => prev.map(p => {
      if(p.id === project.id) return project
      else return p
    }))
  }


  return (
    <ProjectLayout
      isBlurred={project.amountLeft=== 0 ? true: false}
    >
      <div className={style.project}>
        <div className={style.project__title}>
          <h3>{project.name}</h3>
          <div className={style.pledge}>Pledge ${project.price} or more</div>
        </div>
        <div className={style.project__text + ' secondary-text'}>
          {project.text}
        </div>
        <div className={style.project__actions}>
          <div className={style.project__amount_left}>
            <span className={style.amount}>{project.amountLeft}</span>
            <span className={style.left + ' secondary-text'}>left</span>
          </div>
          <CyanButton 
            btnText={'Select Reward'} 
            clickHandler={() => handleClick(project)} 
            disabled={project.amountLeft=== 0 ? true: false}
          />
        </div>
      </div>
    </ProjectLayout>
  )
}

export default ProjectEdition