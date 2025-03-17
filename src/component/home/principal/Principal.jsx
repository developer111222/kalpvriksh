import React from 'react';
import './principal.css'

const Principal = () => {
  return (
    <div id="bites" class="videomessages">
    <ul>
        <li>
            <h1>PRINCIPAL</h1>
            <h2><span>At Kalpvriksh School, we believe education is more than just teaching; it is about inspiring young minds to explore, question, and grow. Over the years, our school has evolved into a thriving institution committed to **academic excellence, ethical values, and holistic development. </span> 
               </h2>
            <p>Our curriculum is designed to instill discipline, integrity, empathy, and leadership qualities in students. We emphasize *experiential learning*, ensuring that every child enjoys discovering knowledge rather than just memorizing facts.</p>
            <p>  

As we prepare students for a competitive world, we also strive to uphold our rich cultural values and traditions. Kalpvriksh School is dedicated to shaping individuals who are not only well-educated but also responsible global citizens.  
</p>
<a>Join us on this journey of learning, growth, and excellence!  </a>
          {/* <a href="#">LOREM IPSUM DOLOR SIT AMET</a> */}
        </li>
        <li>
            {/* <video class="bites" id="bite1" poster="videos/bite1.png">
                <source src="videos/Bite 1.mp4" type="video/mp4" />
                <div class="fsError">Your web browser does not support the &lt;video&gt; tag.</div>
            </video> */}
            <img src='img/principal.jpg' />
            <div class="btns">
                <button type="button" id="play_bite" class="playbite">Play</button>
<div class="name">
                    {/* <b>Tarinder Kaur</b> */}
                    <span>Principal</span>
                </div>
            </div>
        </li>
    </ul>
  
  
</div>
  )
}

export default Principal
