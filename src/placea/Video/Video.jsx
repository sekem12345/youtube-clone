import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommened from '../../Components/Recommened/Recommened'
import { useParams } from 'react-router-dom'

const Video = () => {

    const {videoId,categoryId} = useParams()

  return (
    <div className='play-container'>
          <Playvideo videoId={videoId}/>
          <Recommened/>
    </div>
  )
}

export default Video