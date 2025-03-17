import React from 'react'
import CampusPhoto from './campusphoto/CampusPhoto'
import Difference from './difference/Difference'
import EarlyChildHood from './earlychildhoodwing/EarlyChildHood'
import AcademicBlock from './academicblock/AcademicBlock'
import Facilities from './facilities/Facilities'

const OurCampus = () => {
  return (
    <div className='ourcampusWrapper'>
      <CampusPhoto/>
      <Difference/>
      <EarlyChildHood/>
      <AcademicBlock/>
      <Facilities/>
    </div>
  )
}

export default OurCampus
