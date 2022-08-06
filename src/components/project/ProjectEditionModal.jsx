import ProjectLayout from "./ProjectLayout"
import style from './ProjectEditionModal.module.scss'
import { useState } from "react"
import CyanButton from "../extras/CyanButton"

function ProjectEditionModal({ projects, setProjects, setIsSubmitted, backed, totalBackers }) {
  const [pledgeAmount, setPledgeAmount] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState()
  const [isNoRewardSelected, setIsNoRewardSelected] = useState(false)

  // for when changing radio
  function handleRadioChange(e, id) {
    setIsNoRewardSelected(false)
    setSelectedProjectId(id)

    // set default pledge price in the number input field
    const _pledgeAmount = projects.filter(project => project.id === id)[0]
    setPledgeAmount(_pledgeAmount.price)
  }

  // submitting a pledge
  function handleContinue() {
    // update pledge amount and total backers
    totalBackers.setTotalBackers(prev => prev + 1)
    backed.setBacked(prev => prev + pledgeAmount)
    
    // subract from amount left
    setProjects(prev => {
      return prev.map(project => {
        if(project.id === selectedProjectId) {
          project.amountLeft -= 1
          return project
        } 
        else return project
      })
    })

    // show modal completed
    setIsSubmitted(true)
  }
  
  // submit pledge with no reward
  function handleContinueNoReward() {
    // update pledge amount and total backers
    totalBackers.setTotalBackers(prev => prev + 1)
    backed.setBacked(prev => prev + pledgeAmount)

    // show modal completed
    setIsSubmitted(true)
  }

  // no reward change
  function handNoRewardRadioChange() {
    setIsNoRewardSelected(prev => !prev)
  }
  


  return (
    <div >
      <ProjectLayout>
        <article className={style["project-container"]}>
          <div className={style['radio-container']}>
            <input 
              className={style["radio-mr"]} 
              type="radio" 
              name="projects" 
              id='no-pledge'
              
              onChange={(e) => handNoRewardRadioChange(e)}
            />
            <label htmlFor="no-pledge">
              <p className={style.projectName}>Pledge with no reward</p>
            </label>
          </div>

          <p className={style.desc}>
          Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
          </p>

          {isNoRewardSelected && 
            <div className={style['pledge-container']}>
              <hr />
              <p>Enter your pledge</p>
              <div className={style['pledge__input-container']}>
                <div className={style['input-wrapper']}>
                  <input 
                    type="number" 
                    value={pledgeAmount} 
                    onChange={(e) => setPledgeAmount(e.target.value)}
                  />
                </div>
                <CyanButton btnText={'Continue'} clickHandler={handleContinueNoReward} />
              </div>
            </div>
          }
        </article>
      </ProjectLayout>


      {projects.map(project => 
        <ProjectLayout
        isBlurred={project.amountLeft === 0 ? true: false}
         key={project.id} isSelected={selectedProjectId === project.id}>
          <article className={style["project-container"]}>
            <div className={style['radio-container']}>
              <input 
                className={style["radio-mr"]} 
                type="radio" 
                name="projects" 
                id={project.idText} 
                disabled={project.amountLeft === 0}
                checked={selectedProjectId === project.id}
                onChange={(e) => handleRadioChange(e, project.id)}
              />
              <label htmlFor={project.idText}>
                <p className={style.projectName}>{project.name}</p>
                <p className={style.projectPrice}>Pledge ${project.price} or more</p>
              </label>
            </div>

            <p className={style.desc}>{project.text}</p>
            <p className={style.amountLeft}>
              <span>{project.amountLeft}</span>      
              <span>left</span>
            </p>


            {/* pledge amount container, apperas when radio is selected */}
            {selectedProjectId === project.id && 
              <div className={style['pledge-container']}>
                <hr />
                <p>Enter your pledge</p>
                <div className={style['pledge__input-container']}>
                  <div className={style['input-wrapper']}>
                    <input 
                      type="number" 
                      value={pledgeAmount} 
                      onChange={(e) => setPledgeAmount(e.target.value)}
                    />
                  </div>
                  <CyanButton btnText={'Continue'} clickHandler={handleContinue} />
                </div>
              </div>
            }
          </article>
        </ProjectLayout>  
      )}
    
    </div>
  )
}

export default ProjectEditionModal