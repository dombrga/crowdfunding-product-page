import style from './ProgressBar.module.scss'

function ProgressBar() {
  const progressBar = {
    backgroundColor: 'rgb(230, 227, 227)',
    width: '100%',
    borderRadius: '1rem',
    marginTop: '2rem',
  }

  const currentBar = {
    width: `calc((56/80)*100%)`,
    height: '15px',
    backgroundColor: 'hsl(176, 50%, 47%)',
    borderRadius: '1rem'
  }

  return (
    <div style={progressBar}>
      <div style={currentBar}
        
      ></div>
    </div>
  )
}

export default ProgressBar