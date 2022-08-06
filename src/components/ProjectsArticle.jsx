import { useState, useEffect } from 'react'
import style from './ProjectsArticle.module.scss'
// import data from '../data/data.json'
import ProjectEdition from './project/ProjectEdition.jsx'
import ProjectModal from './project/ProjectModal'
import ProjectModalCompleted from './project/ProjectModalCompleted'


const article = `article__main article__pt ${style['projects-article']}`

function ProjectsArticle({ projects, setProjects, backed, totalBackers, isProjectModalOpen, handleProjectModal, setBacked, setTotalBackers }) {
  // const [projects, setProjects] = useState(projects)

  const [isSubmitted, setIsSubmitted] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(true)

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
      {/* main page project details */}
      {projects.map(project => 
        <ProjectEdition 
          key={project.id}
          projects={projects}
          project={project}
          setProjects={setProjects}
          setBacked={setBacked}
          setTotalBackers={setTotalBackers}
        />)
      }

      {/* BACK THIS PROJECT modal */}
      {isProjectModalOpen && 
        (isSubmitted ? 
          <ProjectModalCompleted
            handleProjectModal={handleProjectModal}
            setIsSubmitted={setIsSubmitted}
          />
          : 
          <ProjectModal
            projects={projects}
            setProjects={setProjects}
            backed={backed}
            totalBackers={totalBackers}
            isProjectModalOpen={isProjectModalOpen}
            handleProjectModal={handleProjectModal}
            setIsSubmitted={setIsSubmitted}
          />
        )
      }
      
    </article>
  )
}

export default ProjectsArticle