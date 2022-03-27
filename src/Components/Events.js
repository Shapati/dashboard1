import React from 'react'
import './Events.css'
import k from '../images/300k.svg'
import shares from '../images/shares.svg'
import likes from '../images/likes.svg'
import vi from'../images/vi.svg'
import follows from '../images/follows.svg'
export default function Events() {
  return (
    <div className='events'>
      <h3>Events Distribution</h3>

      <div className='events-box'>
          <h5>Last 30 Days Perfomance</h5>
          <img src={k} id='event-move' />
          <h4>Events DISTRIBUTION</h4>

          <div className='events-box-flex' >
            <img src={likes} />
            <img src={vi} />
          </div>
          <div className='events-box-flexx' >
            <img src={follows} />
            <img src={shares} />
          </div>
      </div>
      
    </div>
  )
}
