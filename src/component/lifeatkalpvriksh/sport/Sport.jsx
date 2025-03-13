import React from 'react';
import './sport.css'

const Sport = () => {
  return (
<ul class="sports">
            <li>
                <div class="photo">
                   {/* <img src="images/sports-life.png" alt=""> */}
                    <div class="video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nZw_-Po-QLw?rel=0&amp;controls=0" frameborder="0" allow=""></iframe>
                    
                    </div>
                </div>
            </li>
            <li>
                <h2>Sports</h2>
                <p><span>Montfort World School is equipped with a swimming pool, football field, tennis court, 
                    cricket ground and basketball court.</span> Apart from these there are many 
                    sporting facilities for junior students. There is regular enrollment for 
                    different sports classes through the year with students opting to choose 
                    and play a sport of their choice in the after hours.</p>
                <p>Regular intra-school competitions are held on campus to encourage 
                    participation and healthy competition.</p>
            </li>
        </ul>
  )
}

export default Sport
