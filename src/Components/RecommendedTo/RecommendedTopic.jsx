import React from 'react'
import './RecommendedTopic.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Calendar from 'react-calendar';

function RecommendedTopic() {
  return (
    <>
    <div className='reco'>
      <br/>
      <p>Hi Welcome!</p> 
      <br/>
          <div className='therapist'>
             <LocalHospitalIcon/>
             <br/>
             Therapist
             <br/>
             3,954
             </div>
           
           <br/>
           <div className='client'>
           Individual   <AccountCircleIcon/>
           </div>
           
           <br/>
           <div className='clients'>
           Client   <AccountCircleIcon/>
             <br/>         
           </div>

           <br/>
           <div className='Revenu'>
           Revenu
             <br/>         
           </div>
       <br/>

    
    <div className='couples'>
      <PermIdentityIcon/>
          couples
             <br/>     
             782    
           </div>
          <br/>
           <div className='parents'>
      <PermIdentityIcon/>
          Parents
             <br/>     
             782    
           </div>
           <br/>
           <div className='teen'>
      <PermIdentityIcon/>
          Teen
             <br/>     
             1982    
           </div>
           <br/>
           <div className='Weeklyactivity'>
             <EqualizerIcon/>
             <br/>
             Weekly Activity
             </div>
             
             <div className='calender'>
             <Calendar />
             </div>

             <br/>
             <div className='App'>
           Application For Add Min
             <br/>         
           </div>
    </div>
  </>
  )
}

export default RecommendedTopic















