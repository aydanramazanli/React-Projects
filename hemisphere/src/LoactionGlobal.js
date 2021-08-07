import React from 'react'
import northPic from './images/nortg.jpg'
import soutthPic from './images/sou.jpg'

const locationConfig = {
  Nortern: {
    text: 'it is Nortern hemisphere',
    picture: northPic,
  },
  Southern: {
    text: 'it is Southern hemisphere',
    picture: soutthPic,
  },
}
const LoactionGlobal = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Nortern' : 'Southern'
  const { text, picture } = locationConfig[hemisphere]

  return (
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={picture} alt='hemisphere'></img>
        </div>
        <div className='ui teal bottom attached label'>
          <h2> {text} </h2>
        </div>
      </div>
    </div>
  )
}

export default LoactionGlobal
