import React from 'react';
import './staffimg/staffimg.css'
import StaffImg from './staffimg/StaffImg'
import AboutEducator from './abouteducator/AboutEducator';
import Learner from './learner/Learner';
import Support from './support/Support';
import AsTeacher from './asteacher/AsTeacher';
import Interested from './interested/Interested';

const OurEducator = () => {
  return (
    <div className='teachersWrapper'>
      <StaffImg/>
      <AboutEducator/>
      <Learner/>
      <Support/>
      <AsTeacher/>
      <Interested/>
    </div>
  )
}

export default OurEducator
