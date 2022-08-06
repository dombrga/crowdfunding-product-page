function CyanButton({ btnText, clickHandler, disabled }) {

  return (
    <button className='btn btn-hover-darken btn-click-move' type='button'
      onClick={clickHandler}
      disabled={disabled}
    >
      {btnText}
    </button>
  )
}

export default CyanButton