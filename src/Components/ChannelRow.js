import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function ChannelRow(image,
    Channel,
    verified,
    subs,
    noOfVideo,
    description) {
   
  return (
    <div className='channelRow'>
      <AccountCircleIcon className='channelRow_logo' alt={Channel} src={image}/>
    </div>
  )
}

export default ChannelRow
