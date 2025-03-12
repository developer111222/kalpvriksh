import React from 'react';
import './principal.css'

const Principal = () => {
  return (
    <div id="bites" class="videomessages">
    <ul>
        <li>
            <h1>PRINCIPAL</h1>
            <h2><span>Dear Parents, Guardians, and Students, Knowledge is the key to empowerment, and education is the foundation upon which a bright future is built. At Kalpavriksh Public School, we firmly believe that the purpose of education is not just to provide information but to nurture critical thinking, creativity, and character in our students.</span> 
               </h2>
            <p>We aim to instill the right values so that each student develops a well-rounded personality, ready to embrace the challenges of the world with confidence and resilience. We are committed to providing an enriching learning experience that goes beyond textbooks and classrooms. Our approach fosters a positive attitude, skill development, and a strong sense of responsibility, ensuring that students grow into confident individuals who contribute meaningfully to society. Academic excellence, sportsmanship, ethical values, and artistic expression are all equally emphasized in our institution. In today’s fast-paced world, where competition is fierce and constant innovation is required, it is imperative that we equip our students with the necessary skills to stand out and excel. Our focus is on blending traditional values with modern methodologies, ensuring that students learn through exploration, experimentation, and hands-on experiences. With a plethora of extracurricular activities, we provide an environment that nurtures both intellectual growth and personal development. At Kalpavriksh Public School, we are dedicated to fostering an atmosphere where every child is respected, valued, and encouraged to reach their highest potential. Our state-of-the-art infrastructure, dedicated faculty, and progressive curriculum work together to shape young minds and prepare them for the journey ahead. As Swami Vivekananda wisely said, "Arise! Awake! And stop not till the goal is reached." Let this be our guiding principle as we continue to inspire and empower our students. May Kalpavriksh Public School continue to soar to new heights of excellence, shaping future leaders and visionaries. Learn today, lead tomorrow! Principal, Kalpavriksh Public School</p>
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
