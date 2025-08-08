import React from 'react'
import './photography.css'
const Photography = () => {
  return (
<div class="photoGallery">
        <h2>Taking Care of<br/>overall development of <span>your child</span></h2>
        <ul>
            <li>
                <img src="img/open-minded.webp" alt="" />	
                    <div class="text">
                        <b>Open - Minded</b>
                        <p>Appreciating diverse perspectives and cultures.</p>
                    </div>
            </li>
            <li>
                <img src="img/caring.webp" alt="" />	
                    <div class="text">
                        <b>Caring</b>
                        <p>Showing empathy and respect for others.</p>
                    </div>
            </li>
            <li>
                <img src="img/risk-taker.webp" alt="" />			
                    <div class="text">
                        <b>Risk - Takers</b>
                        <p>Facing challenges with confidence.</p>
                    </div>
            </li>
            <li>
                <img src="img/balanced.webp" alt="" />		
                    <div class="text">
                        <b>Balanced</b>
                        <p>Maintaining intellectual, physical, and emotional well-being.</p>
                    </div>
            </li>
            <li>
                <img src="img/reflective.webp" alt="" />		
                    <div class="text">
                        <b>Reflective</b>
                        <p>Continuously learning and growing.

                        </p>
                    </div>
            </li>
            <li>
                <img src="img/principal.webp" alt="" />	
                    <div class="text">
                        <b>Principled</b>
                        <p>Acting with integrity, fairness, and responsibility.  </p>
                    </div>	
            </li>
            <li>
                <img src="img/communicator.webp" alt="" />		
                    <div class="text">
                        <b>Communicators</b>
                        <p>Expressing ideas effectively in various forms. </p>
                    </div>
            </li>
            <li>
                <img src="img/thinker.webp" alt="" />
                    <div class="text">
                        <b>Thinkers</b>
                        <p>Applying critical and creative thinking to problem-solving. </p>
                    </div>	
            </li>
            <li>
                <img src="img/knowledgeable.webp" alt="" />	
                    <div class="text">
                        <b>Knowledgeable</b>
                        <p>Exploring global and local issues with curiosity and depth.  </p>
                    </div>
            </li>
        </ul>

        <div class="more">
            <a href="#">
                <small>View All</small>
                <span class="topshape"></span>
                <span class="rightshape"></span>
                <span class="bottomshape"></span>
            </a>
        </div>
    </div>
  )
}

export default Photography
