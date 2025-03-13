import React from 'react';
import './timeline.css'

const Timeline = () => {
  return (
    <>
  <div class="timeline">
            <img src="images/lifetimeline.png" alt="" />
        </div>

<ul class="per_arts">            
<li>
    <h2>Performing Arts</h2>
    <p><span>Dramatics From the smallest of role-plays to larger theatrical 
        productions, the school’s celebration of dramatics begins from 
        Junior School.</span> The club encapsulates different forms of drama like 
        musicals, street plays, short skits, pantomimes, which are performed 
        the larger school community to enjoy.</p>
    <p><span>Dance</span> This club, true to its spirit of nurturing talents in all its forms, 
        teaches contemporary, classical Indian and fusion dance.</p>
    <p><span>Music</span> is an important influencer to mark milestones during the day, 
        as well as in children’s lives at Montfort World School. This club trains students and 
        provides them opportunities to learn vocal, instrumental, classical 
        Hindustani, and English contemporary music.</p>
</li>
<li>
    <div class="photo">
        <div class="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rf9uq99sqDg?rel=0&amp;controls=0" frameborder="0" allow=""></iframe>
         
        </div>
    </div>
</li>
</ul>
</>
  )
}

export default Timeline
