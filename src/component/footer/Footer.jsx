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
            <p>The Montfort Management is into education since 1987. The driving force for us at Montfort is our
                children and their needs. Providing the best and conducive environment for the growth of the future
                driving force of India and the world is what inspires us to push the boundaries of traditional
                education and explore uncharted areas to help your child grow.</p>
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
