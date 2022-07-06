import style from './TheMenu.module.scss'
import OverlayModal from '../extras/OverlayModal.jsx'

function TheMenu() {
  return (
    <OverlayModal>
      <div className={style.menu}>
        <a href='#'>About</a>
        <hr />
        <a href='#'>Discover</a>
        <hr />
        <a href='#'>Get Started</a>
      </div>
    </OverlayModal>
    // <div className={style.overlay}>
    //   <div className={style.menu}>
    //     <a>About</a>
    //     <hr />
    //     <a>Discover</a>
    //     <hr />
    //     <a>Get Started</a>
    //   </div>
    // </div>
  )
}

export default TheMenu