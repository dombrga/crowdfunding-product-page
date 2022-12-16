import './MainComponent.scss'
import { useEffect, useState } from 'react'
import data from '../data/data.json'

import MainContentLayout from './layout/MainContentLayout.jsx'
import Statistics from './Statistics.jsx'
import ProjectsArticle from './ProjectsArticle'
import CyanButton from './extras/CyanButton'

function MainComponent({ }) {
  const [projects, setProjects] = useState(data.projects)
  const [backed, setBacked] = useState(data.backed)
  const [totalBackers, setTotalBackers] = useState(data.totalBackers)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  
  function handleProjectModal() {
    const body = document.querySelector('body')
    body.classList.toggle('noscroll')
    setIsProjectModalOpen(prev => !prev)
  }

  function handleBookmark() {
    setIsBookmarked(prev => !prev)
  }

  // console.log('main component rerendered!')

  return (
    <main>
      <MainContentLayout>
        <article className='article__main first'>
          <svg className='logo__mastercraft' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fillRule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
          <h1 className='main__title'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='main__desc secondary-text'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className='main__actions'>
            <CyanButton btnText={'Back this project'} clickHandler={handleProjectModal} />
            <div className={'bookmark-container' + (isBookmarked ? ' bookmarked':'')}>
              <button onClick={handleBookmark}>
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                <div>{isBookmarked ? ' Bookmarked':'Bookmark'}</div>
              </button>
            </div>
          </div>
        </article>
      </MainContentLayout>

      <MainContentLayout>
        <Statistics
          backed={backed}
          totalBackers={totalBackers}
        />
      </MainContentLayout>

      <MainContentLayout>
        <ProjectsArticle
          projects={projects}
          setProjects={setProjects}
          setBacked={setBacked}
          setTotalBackers={setTotalBackers}
          backed={{ backed, setBacked }}
          totalBackers={{ totalBackers, setTotalBackers}}
          isProjectModalOpen={isProjectModalOpen}
          handleProjectModal={handleProjectModal}
        />
      </MainContentLayout>
    </main>
  )
}

export default MainComponent