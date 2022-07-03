import React from 'react'
import './Introduction.css'
import bell from '../images/bell.svg'
import chat from '../images/Chat.svg'


export default function Introduction() {
  return (
    <div className='introduction'>
      <div className='introduction-first'>
        <h3>Hi Shakir</h3>
        <p>Good Morning!</p>
      </div>
      <div className='introduction-second'>
         <img src={chat} id='chat'/>
         <img src={bell} id='bell'/>
      </div>
    </div>
  )
}
