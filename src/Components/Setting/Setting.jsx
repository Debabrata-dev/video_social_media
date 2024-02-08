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

  <div className='password'>
  <p>New Password</p>
 </div>
 <div className='password_button'>
<button>Update Password</button>
 </div>
  <br/>

  <div className='language'>
  <b/>Language
  </div>


<div className='line'>
<hr/>
</div>

<div className='planguage'>
<p>Perferred Language</p>
</div>

  {/* here is the droup down box */}

<div className='droupdown'>
<form>
<select name="Names" id="Names">
    <option></option>
    <option value="rigatoni">AAAAA</option>
  <option value="dave">BBBBB</option>
  <option value="pumpernickel">CCCCC</option>
  <option value="reeses">DDDDD</option>
</select>
</form>
<br/>
</div>


<div className='bank'>
<p>Bank account setting</p>
</div>

<div className='save'>
<button>Save</button>
</div>

    </div>
  )
}

export default Setting
