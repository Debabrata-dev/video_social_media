import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import logo from '../img/dingo.png';

import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
   const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>

      {/* Here is the logo and other things of the website is present */}
      <div className='left'>
    <MenuIcon  />
<Link to="/">
<img className="header_logo" src={logo} alt="" />
</Link>


    </div>

    {/* Here the searchbar is preset */}
    <div className='header_input'>

    <input onChange={e => setInputSearch(e.target.value)}value={inputSearch} type="text" placeholder='Search'/>
    
    <Link to={`/search/${inputSearch}`}>
    <SearchIcon className='header_inputButton'/>
    </Link>

    </div>

{/* Here the icon present like the accont icon, video, Notification */}
<div className='header_icons'>
    <VideoCallIcon className='header_icon'/>
    <AppsIcon className='header_icon'/>
    <NotificationsSharpIcon className='header_icon'/>
    <AccountBoxSharpIcon className='header_icon'/>
    </div>
    </div> 
  )
}

export default Header
