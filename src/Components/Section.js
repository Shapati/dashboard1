import React from 'react'
import './Section.css'
import { useRef } from 'react'
export default function Section({Logo , Home ,Calender , Settings , Published , Bookmark , Notification  ,Plus , Time , Add , Right , Down}  ) {
  const dropdown = useRef()

  const remove = ()=>{
    dropdown.current.classList.toggle('remove')
  }

  return (
    <div className='first'>
      <div className='top-section'  >
        <img src={Logo}/>
        <div>
          <h2>Redwhale</h2>
          <p>Growth & Marketing</p>
        </div>
      </div>
      <div className='middle-section'>
        <div className='links'>
            <img src={Home} />
         
            <a href='' >Dashboard</a>
        
         
        </div>
        <div className='links'>
          <img src={Calender} />
          <a href='' id='odd' >Activity</a>
        </div>
        <div className='links'>
          <img src={Settings} />
          <a href='' id='odd'>Settings</a>
        </div>
      </div>

      <div className='line'></div>

      <div className='third-section'>
        <div className='addsection'>
          <div className='down'>
           <h4>Posts</h4>
           <img src={Down} onClick={()=>remove()}  />
          </div>
          
          <img src={Plus} />
        </div>
        <div className='linkscontainer'ref={dropdown} >
         <div className='links2'>
          <img src={Published} />
          <a href='' id='odd'>Published</a>
         </div>
         <div className='linksodd'>
          <img src={Time} />
          <a href='' id='odd'>Today's Sheduled</a>
          <img src={Notification} id='odd2' />        
         </div>
         <div className='links2'>
          <img src={Bookmark} />
          <a href='' id='odd'>Bookmarks</a>
         </div>
        </div>
        
        <div className='line'></div>
        <div className='addsection'>
        <div className='down'>
           <h4>Favorite Users</h4>
           <img src={Right}/>
          </div>
          <img src={Plus} />
        </div>

      </div>

      <div className='last-section'>
        <img src={Add}/>
        <a href=''>Invite new member</a>
      </div>

      

    </div>
  )
}
