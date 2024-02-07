import React from 'react'
import './Setting.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Setting = () => {
  return (
    <div className="app">
    <Navbar/>
   <div className='app_page'>
    <Sidebar/>
   </div>
    <div className='details'>
      Log in Details
      <br/>
      <br/>
      
      </div>
      <div className='detailsa'>
        <br/>
        <hr/>
      </div>
 
 <div className='email'>
  <p>Email Address</p>
 </div>
 <div className='email_button'>
<button>Update Gmail</button>
 </div>
  <br/>


    </div>
  )
}

export default Setting
