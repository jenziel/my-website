import React from 'react'
import './Contact.css'
import pencil from '../images/pencil.png'
function Contact() {
  return (
    <div className='contact-container'>
    <div className='contact'>
      <img src={pencil} alt='pencil drawing a flower'></img>
      <p>jenziel400@gmail.com</p>
    </div>
    </div>
  )
}

export default Contact
