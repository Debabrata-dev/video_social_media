import React from 'react'
import './SearchPage.css'
import Header from './Header';
import TuneIcon from '@mui/icons-material/Tune';
import Sidebar from './Sidebar';
import ChannelRow from './ChannelRow';


function Search() {
  return (
   <div>
    <Header/>
    <div className='searchPage'>
  <div className='searchPage_filter'>
  <TuneIcon/>
  <h2>FILTER</h2>
  </div>
  <hr/>
  <ChannelRow
  image
  Channel
  verified
  subs
  noOfVideo
  description
  />

 
  </div>
    </div>
  
  )
}

export default Search
