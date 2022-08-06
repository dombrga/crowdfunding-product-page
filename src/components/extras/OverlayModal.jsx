import style from './OverlayModal.module.scss'

function OverlayModal({ children }) {
  return (
    <div className={style.overlay}>
      {children}
    </div>
  )
}

export default OverlayModal