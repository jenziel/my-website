import React from 'react'
import './Graphics.css'
import frog from '../images/Frog.png'
function Graphics() {
  return (
    <div className='graphics-container'>
    
      <div className='graphics-grid'>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
            <div className="graphics-box">
                <img src={frog} className="graphics-img" alt="frog"></img>
            </div>
      </div>
    </div>
  )
}

export default Graphics
