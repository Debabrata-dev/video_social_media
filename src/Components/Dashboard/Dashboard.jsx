import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import RecommendedTopic from '../RecommendedTo/RecommendedTopic'

const Dashboard = () => {
  return (
    <div className="app">
      <Navbar/>
     <div className='app_page'>
      <Sidebar/>
      <RecommendedTopic/>
     </div> 
     
      
     
    </div>
  )
}

export default Dashboard