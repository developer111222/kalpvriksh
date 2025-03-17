import React from 'react';
import './explorecampus.css'
const ExploreCampus = () => {
  return (
    <div class="explorecampus">
    <div class="text">
        <h2>Explore
            <span>
                <i>Our Campus</i>
            </span>
        </h2>
        <p>At Kalpvriksh School, we ensure that learning is an engaging and enjoyable experience. Our vibrant campus features: </p>
        <p><b>State-of-the-art sports facilities</b> – including a swimming pool, basketball and volleyball courts, a skating rink, and indoor games like chess and table tennis.</p>
        <p><b>Specialized training programs</b> – such as martial arts, boxing, yoga, and horse riding under expert guidance.  </p>
        <p><b>A hands-on learning approach</b> – designed to develop confidence, critical thinking, and problem-solving skills.  </p>
        <div class="readmore">
            <a href="/our-campus">Learn More</a>
        </div>
        <ul>
            <li>
                <span>
                    <img src="img/natureRed.png" alt="" />
                </span>
                <b>Joyful Learning in Safe Environment.</b>
            </li>
            <li>
                <span>
                    <img src="img/trainRed.png" alt="" />
                </span>
                <b>Practical Hands-on, Experiential learning.</b>
            </li>
            <li>
                <span>
                    <img src="img/buildingsRed.png" alt="" />
                </span>
                <b>Instills Confidence &amp; Problem-Solving Skills.</b>
            </li>
            <li>
                <span>
                    <img src="img/schoolRed.png" alt="" />
                </span>
                <b>Well connected with World-class Transport Facilities.</b>
            </li>
        </ul>
    </div>
    <div class="photo">
        <img src="img/campus.jpg" alt="" />

        <span class="rightshape"></span>
    </div>
</div>
  )
}

export default ExploreCampus
