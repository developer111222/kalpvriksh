import React from 'react';
import './principal.css'

const Principal = () => {
  return (
    <div id="bites" class="videomessages">
    <ul>
        <li>
            <h1>PRINCIPAL</h1>
            <h2><span>It gives me immense pleasure to pen that this school has acquired itself pretty well by fulfilling the objective set out for “commitments beyond academics”.</span> 
               </h2>
            <p><span>Looking back at the 5 years of its chequered life, it is gratifying to see this school, having grown from a tiny sapling planted, into a magnificent tree today.</span>  The school curriculum is designed to develop a sense of discipline, honesty, integrity, dedication and sympathy in students. In fact our curriculum is so well balanced that it has every ingredient to support a perfect citizen.

It is my firm belief that schooling must be fun-filled process, encouraging learning and understanding rather than being only an intuition of teaching. We nurture every student’s inquisitiveness thereby peeping deep into the pool of knowledge and quest. This is done by ensuring individual attention to every student. The school provides excellent facilities for progressive and pragmatic curriculum, conductive environment and development of moral values amongst students.

There is no denying the fact that we ought to keep pace with the changing need of the society, join the technological movement and prepare ourselves with global competition. But at the same time, we should protect our values and preserve our heritage and traditions. We need to accept every change that takes place blindly. We should be selective, honest, forthright and firm in our selections so that the aim and objective of our institution are not compromised at any stage.

Nevertheless, we are deeply conscious of the transformation that is taking place in our society presently and we are also aware that it is significant to coordinate our place of training with that of the world at large. Notwithstanding the constraints, the school is marching ahead and is undoubtedly geared up to show exemplary performance in academics, training programme, games and sports and co-curricular activities.</p>
          <a href="#">LOREM IPSUM DOLOR SIT AMET</a>
        </li>
        <li>
            <video class="bites" id="bite1" poster="videos/bite1.png">
                <source src="videos/Bite 1.mp4" type="video/mp4" />
                <div class="fsError">Your web browser does not support the &lt;video&gt; tag.</div>
            </video>
            <div class="btns">
                <button type="button" id="play_bite" class="playbite">Play</button>
<div class="name">
                    <b>Tarinder Kaur</b>
                    <span>Principal</span>
                </div>
            </div>
        </li>
    </ul>
  
  
</div>
  )
}

export default Principal
