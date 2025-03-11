import React, { useEffect } from 'react';
import './header.css'

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


  return (
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
                  Admissions are closed for session 2025-26 for all the grades
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
                  <a href="index.aspx" className="active">
                    <small>Home</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
                <dt>
                  <a href="messages.html">
                    <small>About us</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
                <dt>
                  <a href="teachers_training.html">
                    <small>Our Educators</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
                <dt>
                  <a href="sports.html">
                    <small>SPORTS FACILITIES</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
              </dl>
            </div>
          </li>
          <li>
            <div className="linksright">
              <dl>
                <dt>
                  <a href="life-at-montfort.html">
                    <small>Life at Montfort</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
                <dt>
                  <a href="montfort-app.html">
                    <small>Montfort School App</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
                </dt>
                <dt>
                  <a href="CBSECorner.aspx">
                    <small>CBSE Corner</small>
                    <span className="topshape"></span>
                    <span className="rightshape"></span>
                    <span className="bottomshape"></span>
                  </a>
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
                        <a href="index.aspx" className="active">
                          <small>Home</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="messages.html">
                          <small>About us</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="teachers_training.html">
                          <small>Our Educators</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="sports.html">
                          <small>Infrastructure</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="life-at-montfort.html">
                          <small>Life at Montfort</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="montfort-app.html">
                          <small>Montfort School App</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
                      </dt>
                      <dt>
                        <a href="CBSECorner.aspx">
                          <small>CBSE Corner</small>
                          <span className="topshape"></span>
                          <span className="rightshape"></span>
                          <span className="bottomshape"></span>
                        </a>
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
  )
}

export default Header
