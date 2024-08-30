import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommened from '../../Components/Recommened/Recommened'

const Video = () => {
  return (
    <div className='play-container'>
          <Playvideo/>
          <Recommened/>
    </div>
  )
}

export default Video