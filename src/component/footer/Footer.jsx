import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
    <ul>
        <li>
            <div class="footerlogo">
                <img src="images/logo-footer.png" alt="" />
            </div>
            <b class="location">Sambhali Road, Nissing, Karnal, Haryana</b>
            <b class="email">Email Address :  kalpvrikshschool4@gmail.com</b>
            <p>We believe in true equality. Every student deserves personalized attention that meets their unique needs. Our highly trained faculty, supported by state-of-the-art classrooms and advanced digital libraries, are fully equipped to support all students—both individually and collectively.</p>
        </li>
        <li>
            <div class="socialLinks">
                <a href="" >
                    <img src="img/facebook.webp" alt="" />
                </a>
                <a href="">
                    <img src="img/instagram.webp" alt="" />
                </a>
            </div>
            <div class="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="our-educator">Our Educators</NavLink>
                <NavLink to="/sport">Sports</NavLink>
                <NavLink to="/life-at-kalpvriksh">Life at Kalpvriksh</NavLink>
                {/* <NavLink to="/">Montfort School App</NavLink> */}
                {/* <NavLink to="">CBSE Corner</NavLink> */}
            </div>
        </li>
    </ul>
</footer>
<div class="copyright">
        <ul>
            <li>© Copyright 2025 Kalpvriksh Public School</li>
            <li>
                Designed &amp; Developed by
                <a href="/" target="_blank">All in Digi</a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Footer
