import React from 'react'
import './Profile.css'
import Profilepic from '../images/Radius.svg'
export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src={Profilepic}/>
      </div>
      <div className='profile-name'>
        <h3>AR Shakir</h3>
        <p>UI/UX Designer @Redwhale </p>
      </div>
      <div className='profile-container'>
         <div className='follow'>
           <h5>786K</h5>
           <p>Followers</p>
         </div>
         <div className='follow' id='oddfollow'>
           <h5>298</h5>
           <p>Following</p>
         </div>
         <div className='follow'>
           <h5>438</h5>
           <p>Posts</p>
         </div>
      </div>

      <div className='profile-view'>
        <button className='purple-btn' >View Profile</button>
        <button className='white-btn'>Edit Profile</button>
      </div>
    </div>
  )
}
