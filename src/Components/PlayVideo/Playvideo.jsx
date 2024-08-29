import React from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import save from '../../assets/save.png'

const Playvideo = () => {
  return (
    <div  className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>best youtube channel to learn web Development</h3>
        <div className='play-video-info'>
          <p>13524 views &bull; 2days</p>
          <div>
            <span><img src={like} alt=''/>125</span>
            <span><img src={dislike} alt=''/>2</span>
            <span><img src={share} alt=''/>share</span>
            <span><img src={save} alt=''/>save</span>
          </div>
        </div>
        <hr />
        <div className='publisher'>
          <img src={jack} alt=''/>
          <div>
            <p>Itunutech</p>
            <span> 1M subscriber</span>
          </div>
          <button>subscribed</button>
        </div>
        <div className='vid-description'>
          <p>subscribe Itunutech to watch more tutorials on web Development</p>
          <hr />
          <h4>130 comments</h4>
          <div className='comment'>
            <img src={user_profile} alt='' />
          <div>
          <h3>Akinola Iyanu <span>1 day ago</span></h3>
          <p>a global computer network providing a variety of infomation</p>
          <div className='comment-action'>
          <img src={like} alt='' />
          <span>244</span>
          <img src={dislike} alt='' />
          </div>
          </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt='' />
          <div>
          <h3>Akinola Iyanu <span>1 day ago</span></h3>
          <p>a global computer network providing a variety of infomation</p>
          <div className='comment-action'>
          <img src={like} alt='' />
          <span>244</span>
          <img src={dislike} alt='' />
          </div>
          </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt='' />
          <div>
          <h3>Akinola Iyanu <span>1 day ago</span></h3>
          <p>a global computer network providing a variety of infomation</p>
          <div className='comment-action'>
          <img src={like} alt='' />
          <span>244</span>
          <img src={dislike} alt='' />
          </div>
          </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt='' />
          <div>
          <h3>Akinola Iyanu <span>1 day ago</span></h3>
          <p>a global computer network providing a variety of infomation</p>
          <div className='comment-action'>
          <img src={like} alt='' />
          <span>244</span>
          <img src={dislike} alt='' />
          </div>
          </div>
        </div>
    </div>
    </div>
    

  )
}

export default Playvideo