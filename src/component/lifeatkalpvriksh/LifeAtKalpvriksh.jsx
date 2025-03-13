import React from 'react';
import './photolife/photolife.css'
import PhotoLife from './photolife/PhotoLife'
import AboutLife from './aboulife/AboutLife';
import Sport from './sport/Sport';
import Timeline from './timeline/Timeline';
import ArtCraft from './art&craft/ArtCraft';
import Clubs from './clubs/Clubs';
import Literacy from './literacy/Literacy';
import Photography from './photography/Photography';

const LifeAtKalpvriksh = () => {
  return (
    <div className='lifeatWrapper'>
<PhotoLife/>
<AboutLife/>
<Sport/>
<Timeline/>
<ArtCraft/>
<Clubs/>
<Literacy/>
<Photography/>
    </div>
  )
}

export default LifeAtKalpvriksh
