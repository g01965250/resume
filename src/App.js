import React from "react";
import { FaTwitter,FaFacebookF ,FaInstagramSquare,FaPinterest,FaYoutube} from "react-icons/fa";
import { BsFillArrowLeftSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";

import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="sidebar-fix"></div>
        <div className="sidebar">
          <BsFillArrowLeftSquareFill className="sidebar-arrow"/>
          <nav className="nav-wrapper">
            <div className="nav-title">REWALL</div>
            <ul>
              <li className="nav-btn nav-activ"><a href="#" >HOME</a></li>
              <li className="nav-btn"><a href="#">ABOUT ME</a></li>
              <li className="nav-btn"><a href="#">EDUCATION</a></li>
              <li className="nav-btn"><a href="#">SKILL</a></li>
              <li className="nav-btn"><a href="#">PROJECT</a></li>
              <li className="nav-btn"><a href="#">CONTACT</a></li>
            </ul>
          </nav>
          <div className="social-wrapper">
            <div className="social">
              <ul>
                <li><a href="#"><FaTwitter/></a></li>
                <li><a href="#"><FaFacebookF/></a></li>
                <li><a href="#"><FaInstagramSquare/></a></li>
                <li><a href="#"><FaPinterest/></a></li>
                <li><a href="#"><FaYoutube/></a></li>
              </ul>
            </div>
            <div className="desc">© 2021 Rewall Template <br/>Created by Frenify</div>
          </div>
        </div>
        <div className="content-wrapper">
            <div className="home-wrapper">
              <div className="picture-wrapper">
                <div className="picture"></div>
              </div>
              <div className="home-title-wrapper">
                <div className="home-title">WEBSITE DEVELOPER</div>
                <p>Founder of Frenify. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
              </div>
              <BsFillArrowDownSquareFill className="home-arrow"/>
            </div>
            <div className="about-wrapper">
              <div className="about-title-wrapper">
                <div className="about-title">ABOUT ME</div>
                <div className="about-dsec">I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from London, UK. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</div>
              </div>
              <ul className="about-label-wrapper">
                <li className="about-label">Name: Felicia Amor</li>
                <li className="about-label">Birthday: June 14, 1992</li>
                <li className="about-label">Age: 29 Years</li>
                <li className="about-label">Adress: London, UK</li>
                <li className="about-label">Phone: (+1) 7785 355 344</li>
                <li className="about-label">Skype: Felicia.A</li>
                <li className="about-label">Email: felicia@domainname.com</li>
                <li className="about-label">Telegram: Available</li>
              </ul>
              <BsFillArrowDownSquareFill className="about-arrow"/>
            </div>
            <div className="education-wrapper">
              <div className="education-title">EDUCATION</div>
              <ul>
                <li>
                  <div className="education-item">
                    <h3>FRENIFY UNIVERSITY<span>( 2014 — 2017 )</span></h3>
                    <h2>Computer Science</h2>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>EDU UNIVERSITY<span>( 2011 — 2014 )</span></h3>
                    <h2>Master Degree</h2>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>CLOLUMBIA COLLEGE<span>( 2007 — 2011 )</span></h3>
                    <h2>Computer Science</h2>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
              </ul>
              <BsFillArrowDownSquareFill className="education-arrow"/>
            </div>
            <div className="skill-wrapper">
              <div className="skill-title">SKILL</div>
                <div className="skill-bar-wrapper ">
                  <div className="bar-style92">
                    <div className="skill-bar">Adobe Photoshop<span>92%</span></div>
                  </div>
                </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style95">
                    <div className="skill-bar">HTML5 & CSS3<span>95%</span></div>
                  </div>
                 </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style80">
                    <div className="skill-bar">WordPress<span>80%</span></div>
                  </div>
                </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style85">
                    <div className="skill-bar">Adobe Illustrator<span>85%</span></div>
                  </div>
                </div>
                <div className="skill-desc">
                A freelance creative designer with a love for minimal design, clean typography
                and well-written code, located in San Francisco. Provide high quality and
                cost effective offshore web and software development services. Wide range of
                web and software development services across the world.
                </div>
              <BsFillArrowDownSquareFill className="skill-arrow"/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
