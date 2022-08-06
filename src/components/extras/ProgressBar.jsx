import style from './ProgressBar.module.scss'


const totalToBack = 1e5
function ProgressBar({ backed }) {
  const progressBar = {
    backgroundColor: 'rgb(230, 227, 227)',
    width: '100%',
    borderRadius: '1rem',
    marginTop: '2rem',
  }

  const currentBar = {
    width: `${backed/totalToBack < 1 ? (backed/totalToBack)*100: 100}%`,
    // width: `calc((56/80)*100%)`,
    height: '15px',
    backgroundColor: 'hsl(176, 50%, 47%)',
    borderRadius: '1rem'
  }

  return (
    <div style={progressBar}>
      {/* <h1>{(backed/totalToBack)*100}</h1> */}
      <div style={currentBar}
        
      ></div>
    </div>
  )
}

export default ProgressBar