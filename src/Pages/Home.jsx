import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

import RecommendedTopic from '../Components/RecommendedTo/RecommendedTopic'
import './CSS/Home.css'

const Home = () => {
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

export default Home
