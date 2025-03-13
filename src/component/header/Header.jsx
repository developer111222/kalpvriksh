import React, { use, useEffect, useState } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
        const triggerOverlay = document.getElementById('trigger-overlay');
        const overlay = document.querySelector('.overlay');
        const closeButton = document.querySelector('.overlay-close');
    
        const toggleOverlay = () => {
          overlay.classList.toggle('open');
        };
    
        triggerOverlay.addEventListener('click', toggleOverlay);
        closeButton.addEventListener('click', toggleOverlay);
    
        // Cleanup event listeners on component unmount
        return () => {
          triggerOverlay.removeEventListener('click', toggleOverlay);
          closeButton.removeEventListener('click', toggleOverlay);
        };
      }, []);
      const [isVisible, setIsVisible] = useState(false);

      // Function to scroll to the top
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      // Check if the user has scrolled down and show/hide the button
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      // Add event listener for scrolling when the component mounts
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <>
    <div className="header">
    <div className="header_top sticky_header" id="header">
      <div className="logo">
        <img src="/img/kvp-logo.png" alt="" />
      </div>
      <header>
        <ul>
          <li>
            <dl className="phoneemail">
              <dt>
                <a href="#">+91 7404780978</a>
              </dt>
              <dt>
                <a href="#" className="draft">
                kalpvrikshschool4@gmail.com
                </a>
              </dt>
            </dl>
          </li>
          <li>
            <dl className="admfollow">
              <dt>
                <a href="#">
                  Admissions are opened for session 2025-26
                </a>
              </dt>
              <dt style={{ display: 'none' }}>
                <div className="findus">
                  <b>Find us on : </b>
                  <a
                    href="https://www.facebook.com/montfortworld"
                    className="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/montfortworldschoolkarnal/"
                    className="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </dt>
            </dl>
          </li>
        </ul>
      </header>
      <div className="nav white">
        <ul>
          <li>
            <div className="links">
              <dl>
                <dt>
                  <NavLink to='/' className="">
                    <small>Home</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
                <dt>
                  <NavLink to='/about'>
                    <small>About us</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
                <dt>
                  <NavLink to="our-educator">
                    <small>Our Educators</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
                <dt>
                  <NavLink to="/sport">
                    <small>SPORTS FACILITIES</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
              </dl>
            </div>
          </li>
          <li>
            <div className="linksright">
              <dl>
                <dt>
                  <NavLink to="life-at-montfort">
                    <small>Life at Montfort</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
                <dt>
                  <NavLink to="montfort-app">
                    <small>Montfort School App</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
                <dt>
                  <NavLink to="CBSECorner">
                    <small>CBSE Corner</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </NavLink>
                </dt>
              </dl>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobilenav">
        <div className="mlogo">
          <img src="/img/kvp-logo.png" alt="" />
        </div>
        <div className="morebtn">
          <button id="trigger-overlay" type="button"></button>
          <div className="overlay overlay-slidedown">
            <button type="button" className="overlay-close">
              Close
            </button>
            <nav>
              <div className="mm_links">
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <NavLink to="/" className="">
                          <small>Home</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="/about">
                          <small>About us</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="our-educator">
                          <small>Our Educators</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="/sport">
                          <small>Sports</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="/life-at-montfort">
                          <small>Life at Montfort</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="montfort-app">
                          <small>Montfort School App</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                      <dt>
                        <NavLink to="CBSECorner">
                          <small>CBSE Corner</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </NavLink>
                      </dt>
                    </dl>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
 <a
      href="#"
      className={`scrollToTop ${isVisible ? 'show' : ''}`}  // Dynamically add 'show' class for visibility
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    ></a>
  </>

  )
}

export default Header
