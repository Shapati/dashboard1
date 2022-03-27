import React from 'react'
import Analytics from './Analytics'
import Events from './Events'
import Statistics from './Statistics'
import './Section2.css'

export default function Section2({Person1,Person2,Person3,Person4,Person5,Person6,Person7,Person8,Person10,Person11,Person12,views,views2,views3}) {
  return (
    <div className='second'>
      <div className='image-top-section'>
        <div className='storybox'>
          <img src={Person2} />
          <p>Add to</p>
        </div>
        <div className='storybox'>
          <img src={Person6} />
          <p>Anjela</p>
        </div>
        <div className='storybox'>
          <img src={Person7} />
          <p>Johnny</p>
        </div>
        <div className='storybox'>
          <img src={Person5} id='odd1' />
          <p>Mikey</p>
        </div>
        <div className='storybox'>
          <img src={Person4} />
          <p>Adam</p>
        </div>
        <div className='storybox'>
          <img src={Person3} id='odd1'/>
          <p>David</p>
        </div>
        <div className='storybox'>
          <img src={Person8} id='odd3' />
          <p>Andrews</p>
        </div>
        <div className='storybox'>
          <img src={Person10} />
          <p>Xernus</p>
        </div>
        <div className='storybox'>
          <img src={Person11} />
          <p>Namad</p>
        </div>
        <div className='storybox'>
          <img src={Person12} />
          <p>Naveen</p>
        </div>
        
      </div>

    <div className='perfomance'>
      <h3>30 Days Perfomance</h3>
      <div  className='perfomance-boxes'> 
        <div className='Perfomance-box' id='perform1' >
          <div className='move'>

            <h4 className='fade'>VIEWS</h4>
            <h4>7,482,120</h4>

          </div>
          <img src={views}/>
        </div>
        <div className='Perfomance-box' id='perform2'>
          <div className='move'>
            
            <h4 className='fade'>FOLLOWS</h4>
            <h4>54,364</h4>

          </div>
         <img src={views2}/>
        </div>
        <div className='Perfomance-box' id='perform3'>
        <div className='move'>
            
            <h4 className='fade'>LIKES</h4>
            <h4>125,285</h4>

          </div>
          <img src={views3}/>
        </div>
      </div>
    </div>
    <div className='ana-event'>

    
    <Analytics />
    <Events />
    </div>
    <Statistics />
    </div>
  )
}
