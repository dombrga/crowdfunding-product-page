import style from './ProjectModalOverlay.module.scss'

function ProjectModalOverlay({ children }) {
  return (
    <div className={style.overlay}>
      {children}
    </div>
  )
}

export default ProjectModalOverlay