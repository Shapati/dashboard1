import React from 'react'
import './Analytics.css'
import Analytic from '../images/graph.svg'
import homee from '../images/imagehouse.svg'
import purplescroll from '../images/linepurple.svg'
import add from '../images/play.svg'
import schedule from '../images/schedule.svg'
export default function Analytics() {
  return (
    <div className='Analytics'>
      <h3>Analytics</h3>
     <div className='first-analytics'>
        <div className='analytics1' >
          <img src={Analytic}/>
        </div>
        <div className='analytics2'>
          <div className='analytics2-box1' >
            <img src={homee} />
            <img src={purplescroll} id='move' />
            <h5>Storage Clouds Formation</h5>
            <p>By Mike Taylor</p>
          </div>
          <div className='analytics2-box2' >
              <img src={schedule}/>
              <p>Scheduled <br/> Posts</p>
          </div>
          <div className='analytics2-box2' >
              <img src={add}/>
              <p>Add New  <br/> Post</p>
          </div>
        </div>
     </div>
     <div className='second-analytics'>

     </div>
    </div>
  )
}
