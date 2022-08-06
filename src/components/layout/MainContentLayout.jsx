import style from './MainContentLayout.module.scss'

function MainContentLayout({ children }) {
  return (
    <div className={style.bordered__primary}>
      {children}
    </div>
  )
}

export default MainContentLayout