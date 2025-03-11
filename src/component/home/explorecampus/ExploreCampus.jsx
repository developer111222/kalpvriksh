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
        <p>At Kalpvriksh Public School, we strive to create a dynamic learning environment where students can grow academically while also developing essential life skills. Our campus is designed to provide a balance between education and recreation, ensuring that students have access to a wide range of activities that contribute to their overall development.

We offer excellent sports and recreational facilities, including a swimming pool, basketball and volleyball courts, and a skating rink, allowing students to stay active and engaged.</p>
        <div class="readmore">
            <a href="our-campus.html">Learn More</a>
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
