import style from './ProjectModal.module.scss'
import ProjectModalOverlay from './ProjectModalOverlay'
import ProjectEditionModal from './ProjectEditionModal'
import { useState } from 'react'



function ProjectModal({ projects, setProjects, isProjectModalOpen, handleProjectModal, setIsSubmitted, backed, totalBackers }) {

  return (
    <ProjectModalOverlay>
      <div className={style.container}>
        <div className={style.flex}>
          <h2 className='back'>Back this project</h2>
          <button type='button'
            onClick={() => handleProjectModal()}
          >
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
          </button>
        </div>
        <p className={style.desc}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>

        <div>
          <ProjectEditionModal
            backed={backed}
            totalBackers={totalBackers}
            projects={projects}
            setProjects={setProjects}
            setIsSubmitted={setIsSubmitted}
          />
        </div>
      </div>
    </ProjectModalOverlay>
  )
}

export default ProjectModal