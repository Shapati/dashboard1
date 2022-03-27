import React from 'react'
import './Statistics.css'
export default function Statistics() {
  return (
    <div className='Statistics'>
      <h3>Statistics</h3>
      <div className='statistics-container'>
        <div className='statistics-box' id='white'>
          <div className='stat-cover'>
            <h4>Weekly Target</h4>
            <p>25% achieved</p>
          </div>
          <p className='stats-move'>25%</p>
          <div className='stats-line'></div>
          <div className='stat-img'>

          </div>

        </div>
        <div className='statistics-box' id='blue'>
          <div className='stat-cover'>
            <h4>Monthly Target</h4>
            <p>50% achieved</p>
          </div>
          <p className='stats-move2' >50%</p>
          <div className='stats-line'></div>
          <div className='stat-img2'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
