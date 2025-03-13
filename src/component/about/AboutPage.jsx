import React from 'react'
import DrivenValue from './drivenbyvalue/DrivenValue'
import DirectorMsg from './director/DirectorMsg'
import ChairmanMsg from './chairman/ChairmanMsg'

const AboutPage = () => {
  return (
<div className='messagesWrapp'>
<DrivenValue/>
<DirectorMsg/>
<ChairmanMsg/>
</div>   

  )
}

export default AboutPage
