import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';





function Sidebar() {
  return (
    <div className='sidebar'>
      {/* <h2>I am Sidebar</h2> */}
      <SidebarRow selected Icon={HomeTwoToneIcon} title="Home"/>
      <SidebarRow Icon={WhatshotTwoToneIcon} title="Treding"/>
      <SidebarRow Icon={SubscriptionsTwoToneIcon} title="Subscription"/>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon}title="Video Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SidebarRow Icon={LiveTvIcon} title="LiveTv"/>
      <SidebarRow Icon={ThumbUpIcon} title="Like"/>
     <hr/>
      </div>
  )
}

export default Sidebar
