import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/:aydan' className='ui header'>
          AYDAN{' '}
        </Link>{' '}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda odio
          dolorum eveniet esse fugiat, eligendi earum vel qui.{' '}
        </p>{' '}
      </div>{' '}
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/:aysen' className='ui header'>
          AYSEN{' '}
        </Link>{' '}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda odio
          dolorum eveniet esse fugiat, eligendi earum vel qui.{' '}
        </p>{' '}
      </div>{' '}
    </div>
  )
}

export default Contact
