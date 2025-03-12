import React from 'react';
import './video/sportvideo.css'
import SportVideo from './video/SportVideo'
import SportText from './sporttext/SportText';
import OutdoorStep from './outdoorstep/OutdoorStep';
import IndoorStep from './indoorstep/IndoorStep';

const Sport = () => {
  return (
    <div className='sportsWrapper'>
      <SportVideo/>
      <SportText/>
      <OutdoorStep/>
      <IndoorStep/>
    </div>
  )
}

export default Sport
