import style from './Statistics.module.scss'
import ProgressBar from './extras/ProgressBar'

const articleClass = `article__main article__pt ${style.stat__article}`
const statDiv = `${style.stat__div}` 
const titleClass = `${style.stat__title}`
const subtitleClass = `${style.stat__subtitle} secondary-text`

function Statistics({ backed, totalBackers }) {

  return (
    <article className={articleClass}>
      <div className={statDiv}>
        <div>
          <p className={titleClass}>${backed}</p>
          <p className={subtitleClass}>of $100,000 backed</p>
        </div>
        <hr className='stat__hr' />
        <div>
          <p className={titleClass}>{totalBackers}</p>
          <p className={subtitleClass}>total backers</p>
        </div>
        <hr className='stat__hr' />
        <div>
          <p className={titleClass}>56</p>
          <p className={subtitleClass}>days left</p>
        </div>
      </div>
      <ProgressBar backed={backed} />
    </article>
  )
}

export default Statistics