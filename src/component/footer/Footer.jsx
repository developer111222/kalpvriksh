import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
    <ul>
        <li>
            <div class="footerlogo">
                <img src="images/logo-footer.png" alt="" />
            </div>
            <b class="location">Karnal (Haryana) Airport Road , Kunjpura</b>
            <b class="email">Email Address :  info@montfortworld.com</b>
            <p>For us equality matters. Each and every student is entitled to the attention which he individually requires and deserves. These specially trained faculty members equipped with the most technologically advanced classrooms and digital libraries have the caliber to cater to the needs of all the students jointly and severally.</p>
        </li>
        <li>
            <div class="socialLinks">
                <a href="https://www.facebook.com/montfortworld" >
                    <img src="img/facebook.webp" alt="" />
                </a>
                <a href="https://www.instagram.com/montfortworldschoolkarnal/">
                    <img src="img/instagram.webp" alt="" />
                </a>
            </div>
            <div class="links">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Our Educators</a>
                <a href="">Infrastructure</a>
                <a href="">Life at Montfort</a>
                <a href="/">Montfort School App</a>
                <a href="">CBSE Corner</a>
            </div>
        </li>
    </ul>
</footer>
<div class="copyright">
        <ul>
            <li>© Copyright 2021 Kalpvriksh Public School</li>
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
