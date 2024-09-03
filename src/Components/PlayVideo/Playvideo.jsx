import React, { useEffect, useState } from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import save from '../../assets/save.png'
import { API_KEY, value_converter } from '../../Data'
import { useParams } from 'react-router-dom'

const Playvideo = () => {

    const {videoId} = useParams();

const [apiData,setApiData] = useState(null);
const [channelData,setChannelData] = useState(null);
const [commentData, setCommentData] = useState([]);

const fetchvideoData = async () =>{
  // Fetching video Data
const videoDetails_url =` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
 await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
}

 
 const fetchOtherData = async () =>{
  // fetching channel data
  const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData . snippet . channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

// fetch commemt data

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))

  }

 
      useEffect(()=>{
        fetchvideoData();
      },[videoId])


      useEffect(()=>{
        fetchOtherData();
      },[apiData])

  return (
    <div  className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className='play-video-info'>
          <p>{apiData?value_converter(apiData.statistics.likeCount):"16k"} &bull; 2days</p>
          <div>
            <span><img src={like} alt=''/>{apiData?value_converter(apiData.statistics.likeCount):"16k"}</span>
            <span><img src={dislike} alt=''/></span>
            <span><img src={share} alt=''/>share</span>
            <span><img src={save} alt=''/>save</span>
          </div>
        </div>
        <hr />
        <div className='publisher'>
          <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=''/>
          <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
          </div>
          <button>subscribed</button>
        </div>
        <div className='vid-description'>
          <p>{apiData?apiData.snippet.description.slice(0,250):"Deacription Here"}</p>
          <hr />
          <h4>{apiData?value_converter(apiData.statistics.commentCount):102} comments</h4>
         {commentData.map((items,index)=>{
            return (
              <div key={index } className='comment'>
              <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='' />
            <div>
            <h3>{items.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
            <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className='comment-action'>
            <img src={like} alt='' />
            <span>{value_converter(items.snippet.topLevelComment.snippet.likeCount)}</span>
            <img src={dislike} alt='' />
            </div>
            </div>
          </div>  
            )
         })}
         
    </div>
    </div>
    

  )
}

export default Playvideo