import style from './ProjectLayout.module.scss'

function ProjectLayout({ children, isBlurred }) {
  return (
    <article className={style.bordered__project + ` ${isBlurred ? style.blurred:''}`}>
      {children}
    </article>
  )
}

export default ProjectLayout