import ProjectModalOverlay from "./ProjectModalOverlay"
import style from './ProjectModalCompleted.module.scss'
import CyanButton from "../extras/CyanButton"


function ProjectModalCompleted({ handleProjectModal, setIsSubmitted }) {

  function handleClick() {
    handleProjectModal(prev => !prev)
    setIsSubmitted(prev => false)
  }

  return (
    <ProjectModalOverlay>
      <div className={style.container}>
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
        <h1>Thank you for your support!</h1>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get 
          an email once our campaign is completed.
        </p>
        {/* <button onClick={handleClick} type="button">Got it!</button> */}
        <CyanButton btnText={'Got it!'} clickHandler={handleClick} />
      </div>
    </ProjectModalOverlay>
  )
}

export default ProjectModalCompleted