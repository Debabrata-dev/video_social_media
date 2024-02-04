import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideo from './RecommendedVideo'

const Home = () => {
  return (
    
      <div className="app">
      <Header/>
     <div className='app_page'>
      <Sidebar/>
      <RecommendedVideo/>
      {/* <Sidebar/> */}
     </div> 
    </div> 
    
  )
}

export default Home
