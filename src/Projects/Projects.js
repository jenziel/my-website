import React from 'react'
import './Projects.css'
import speckle1 from '../images/Speckle1.png'
import good1s from '../images/Good1s.png'
import fitLit from '../images/fitLit.png'
import {Link} from 'react-router-dom'
function Projects() {
  return (
    <div className='project-page'>
    <div className='project-row'>
        <div className='project-details'>
            <div className='project-title'>
                <h2>Speckle </h2><p className='project-arrow'>→</p>
                </div>
            <p className='built-using'>Built using:</p>
            <p className='project-technologies'>React, Redux, CSS, Postman, Figma, Miro, Cypress</p>
            <p>• An educational game for children to practice spelling.</p>
            <p>• Our team learned and implemented Redux during the development of this app.  We 
                gained an appreciation for the tidiness of organizing state using global state management.
            </p>
            <div className='project-btn-box'>
            <Link to='https://stretch-tech-xi.vercel.app/'>
                <button className='project-btn'>live demo</button>
            </Link>
            <Link to='https://github.com/Jnguyen615/Stretch-tech'>
                <button className='project-btn repo-btn'>repo</button>
            </Link>
            </div>
        </div>
        <div className='project-images'>
            <img src={speckle1} alt='speckle game page'></img>
        </div>
    </div>
    <div className='project-row'>
        <div className='project-details'>
            <div className='project-title'>
                <h2>Film Scanner </h2><p className='project-arrow'>→</p>
                </div>
            <p className='built-using'>Built using:</p>
            <p className='project-technologies'>React, CSS, Postman, Figma, Cypress</p>
            <p>• An app that offers a streamlined view of upcoming film events in Los Angeles.</p>
            <p>• Working on this project enhanced my fluency with UTC codes to ensure accurate timezone management.
            </p>
            <Link to='https://github.com/jenziel/good1s/tree/main'>
                <button className='project-btn repo-btn'>repo</button>
            </Link>

        </div>
        <div className='project-images'>
            <img src={good1s} alt='speckle game page'></img>
        </div>
    </div>
    <div className='project-row'>
        <div className='project-details'>
            <div className='project-title'>
                <h2>FitLit </h2><p className='project-arrow'>→</p>
                </div>
            <p className='built-using'>Built using:</p>
            <p className='project-technologies'>VanillaJS, CSS, Mocha & Chai, VoiceOver, ChartJS</p>
            <p>• A health application for recording daily metrics to track health trends over time.</p>
           
            <div className='project-btn-box'>
            <Link to='https://jwensloff.github.io/fitLit/'>
                <button className='project-btn'>live demo</button>
            </Link>
            <Link to='https://github.com/jenziel/fitLit'>
                <button className='project-btn repo-btn'>repo</button>
            </Link>
            </div>
        </div>
        <div className='project-images'>
            <img src={fitLit} alt='FitLit main page'></img>
        </div>
    </div>
    </div>
  )
}

export default Projects
