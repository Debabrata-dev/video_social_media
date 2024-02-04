import React from 'react'
import './RecommendedVideo.css'
import VideoCard from '../Components/VideoCard'


function RecommendedVideo() {
  return (
    <div className='recommendedVideo'>
      <h2>RecommendedVideo</h2>
      <div className='recommendedVideos_videos'>
      <VideoCard />
       <VideoCard />
       <VideoCard />
       <VideoCard />
       <VideoCard />
       <VideoCard />
       <VideoCard />
       <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideo
