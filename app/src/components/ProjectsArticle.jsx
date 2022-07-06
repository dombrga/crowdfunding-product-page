import { useState, useEffect } from 'react'
import style from './ProjectsArticle.module.scss'
import data from '../data/data.json'
import ProjectEdition from './project/ProjectEdition.jsx'
import ProjectModal from './project/ProjectModal'

const article = `article__main article__pt ${style.projects}`

function ProjectsArticle({ }) {
  const [projects, setProjects] = useState(data)
  // console.log('projects', projects)
  

  return (
    <article className={article}>
      <h2>About this project</h2>
      <p className='secondary-text'>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      </p>
      <p className='secondary-text'>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
      {/* <ProjectEdition /> */}
      {projects.map(project => 
        <ProjectEdition 
          key={project.id}
          project={project}
          setProjects={setProjects}
        />)
      }
      {/* <ProjectModal /> */}
    </article>
  )
}

export default ProjectsArticle