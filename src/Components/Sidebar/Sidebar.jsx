import React, { useState } from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WalletIcon from '@mui/icons-material/Wallet';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboard from '../Dashboard/Dashboard';


function Sidebar() {

  // const [active,setActive] = useState('Dashboard');s


  return (
    <div className='sidebar'>
      {/* <h2>I am Sidebar</h2> */}
      <div>
      <SidebarRow Icon={AdminPanelSettingsIcon} title="Admin Dashboard"/>
      <br/>
      </div>
      <hr />
      <SidebarRow Selected Icon={DashboardIcon} link="/"  title="Dashboard"/>
      <br/>
      <SidebarRow Icon={LocalHospitalIcon} link="/Therapist" title="Therapist"/>
      <br/>
      <SidebarRow Icon={WalletIcon} link="/Wallet" title="Wallet"/>
      <br/>
      <SidebarRow Icon={SupervisorAccountIcon} link="/Client" title="client"/>
      <br/>
      <SidebarRow Icon={AssessmentIcon} link="/Report" title="Report"/>
      <br/>
      <SidebarRow Icon={SettingsIcon} link="/Setting" title="Setting"/>
      <br/>
      <SidebarRow Icon={NotificationsIcon} link="/Notification" title="Notifications"/>
      <br/>
      <br/>
     <hr/>
      
     <SidebarRow Icon={LogoutIcon} title="Logout"/>
     <br/>
      </div>
  )
}

export default Sidebar
