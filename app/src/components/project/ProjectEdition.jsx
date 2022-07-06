import { useState } from 'react'
import ProjectLayout from './ProjectLayout.jsx'
import style from './ProjectEdition.module.scss'

function ProjectEdition({ project, setProjects }) {
  const [projectData, setProjectData] = useState(1)
  const [count, setCount] = useState(1)
  // console.log('project', project)

  function handleClick(project) {
    console.log('cliking')
    if(project.amountLeft === 0) return
    project.amountLeft = project.amountLeft - 1
    
    setProjects(prev => prev.map(p => {
      if(p.id === project.id) return project
      else return p
    }))
  }
  return (
    <ProjectLayout
      isBlurred={project.amountLeft=== 0 ? true: false}
    >
      {/* <button onClick={() => setCount(prev => prev+1)}>asd</button>
      <p>{count}</p> */}
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
          <button 
            className={'btn-click-move btn-hover-darken'} 
            type="button"
            disabled={project.amountLeft=== 0 ? true: false}
            onClick={() => handleClick(project)}
          >
            Select Reward
          </button>
        </div>
      </div>
    </ProjectLayout>
  )
}

export default ProjectEdition