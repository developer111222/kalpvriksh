import React from 'react'
import VideoSection from './video/VideoSection'
import About from './about/About'
import MissionVision from './MisiionVisiion/MissionVision'
import ExploreCampus from './explorecampus/ExploreCampus'
import WhyKalpvriksh from './why/WhyKalpvriksh'
import Photography from './photograp/Photography'
import MontfortExperience from './montfortexperience/MontfortExperience'
import Principal from './principal/Principal'

const Home = () => {
  return (
    <div className='container'>
     <VideoSection/>
     <About/>
     <MissionVision/>
     <ExploreCampus/>
     <WhyKalpvriksh/>
     <Photography/>
     <MontfortExperience/>
     <Principal/>
      
    </div>
  )
}

export default Home
