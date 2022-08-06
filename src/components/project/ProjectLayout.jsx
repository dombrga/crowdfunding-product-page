import style from './ProjectLayout.module.scss'

function ProjectLayout({ children, isBlurred, isSelected }) {
  const articleClass = style.bordered__project + ` ${isBlurred ? 'blurred':''} ` + `${isSelected? style['radio-selected']: ''}`

  return (
    <article className={articleClass}>
      {children}
    </article>
  )
}

export default ProjectLayout