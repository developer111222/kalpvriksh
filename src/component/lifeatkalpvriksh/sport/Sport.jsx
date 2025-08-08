import React from 'react';
import './sport.css'

const Sport = () => {
  return (
<ul class="sports">
            <li>
                <div class="photo">
                   {/* <img src="images/sports-life.png" alt=""> */}
                    <div class="video">
                       <img src='/img/basketball.webp' width="100%" />
                    
                    </div>
                </div>
            </li>
            <li>
                <h2>Sports</h2>
                <p>Kalpvriksh’s Olympic-inspired sports complex includes a solar-heated pool, FIFA-standard football turf, and Rajasthan’s first school-based archery range. For juniors: mini-athletics tracks, zen yoga decks, and Mitti Gym (traditional clay obstacle courses). After-school leagues in kho-kho, chess, and e-sports foster teamwork, while our **Desert Marathon** trains students to run 5K on eco-trails.  
                .</p>
            </li>
        </ul>
  )
}

export default Sport
