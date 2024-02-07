import React from 'react'
import './Report.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
const Report = () => {
  return (
    <div>
      <div className="app">
      <Navbar/>
     <div className='app_page'>
      <Sidebar/>
     </div> 
     {/* here is the table */}
     <div className='client'>
<p>Report</p>
     </div>

    </div>










    </div>
  )
}

export default Report
