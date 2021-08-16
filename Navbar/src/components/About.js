import React from 'react'
import './Modal.css'
import Modal from './Modal'

const About = () => {
  return (
    <div>
      <Modal></Modal>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'> About </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda odio
          dolorum eveniet esse fugiat, eligendi earum vel qui.
        </p>
      </div>
    </div>
  )
}

export default About
