import React from 'react'
import './Videos.css'
import X from '../images/Add.svg'
import Camera from '../images/Camera.svg'
import Video from '../images/Video.svg'
export default function Videos() {
  return (
    <div className='videos'>
      <div className='videos-box' id='video-box-1'>
      <div className='video-img'>
        <img src={X} />
      </div>
          <img src={Video} />
        
        <h2>Videos</h2>
        <p>Click To Add Video</p>
      </div>
      <div className='videos-box' id='video-box-2'>
      <div className='video-img'>
        <img src={X} />
      </div>
        <img src={Camera} />
        
        <h2>Photos</h2>
        <p>Click To Add</p>
      </div>
    </div>
  )
}
