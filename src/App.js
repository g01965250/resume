import React from "react";
import { FaTwitter,FaFacebookF ,FaInstagramSquare,FaGithub,FaYoutube} from "react-icons/fa";
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
              <li className="nav-btn nav-activ"><a href="#home" >HOME</a></li>
              <li className="nav-btn"><a href="#about">ABOUT ME</a></li>
              <li className="nav-btn"><a href="#experience">EXPERIENCE</a></li>
              <li className="nav-btn"><a href="#skill">SKILL</a></li>
              <li className="nav-btn"><a href="#project">PROJECT</a></li>
              <li className="nav-btn"><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
          <div className="social-wrapper">
            <div className="social">
              <ul>
                <li><a href="https://twitter.com/"><FaTwitter/></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100000480666744"><FaFacebookF/></a></li>
                <li><a href="https://www.instagram.com/g01965250/"><FaInstagramSquare/></a></li>
                <li><a href="https://github.com/g01965250"><FaGithub/></a></li>
                <li><a href="https://www.youtube.com/"><FaYoutube/></a></li>
              </ul>
            </div>
            {/* <div className="desc">© 2021 Rewall Template <br/>Created by Frenify</div> */}
          </div>
        </div>
        <div className="content-wrapper">
            <div id="home" className="home-wrapper">
              <div className="picture-wrapper">
                <div className="picture"></div>
              </div>
              <div className="home-title-wrapper">
                <div className="home-title">WEBSITE DEVELOPER</div>
                <p>Founder of Frenify. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
              </div>
              <BsFillArrowDownSquareFill className="home-arrow"/>
            </div>
            <div id="about" className="about-wrapper">
              <div className="about-title-wrapper">
                <div className="about-title">ABOUT ME</div>
                <div className="about-dsec">I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from London, UK. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</div>
              </div>
              <ul className="about-label-wrapper">
                <li className="about-label">Name: <span className="chinese">朱冠宇</span></li>
                <li className="about-label">Birthday: July 22, 1993</li>
                <li className="about-label">Age: 29 Years</li>
                <li className="about-label">Adress:<span className="chinese">新竹,臺灣</span></li>
                <li className="about-label">Phone: 0912-144-381</li>
                {/* <li className="about-label">GitHub:g01965250</li> */}
                <li className="about-label">Email: g01965250@gmail.com</li>
              {/*   <li className="about-label">Telegram: Available</li> */}
              </ul>
              <BsFillArrowDownSquareFill className="about-arrow"/>
            </div>
            <div id="experience" className="education-wrapper">
              <div className="education-title">EXPERIENCE</div>
              <ul>
                <li>
                  <div className="education-item">
                    <h3>明新科技大學-電子工程系<span>( 2011 — 2016 )</span></h3>
                    {/* <h2>電子工程系</h2> */}
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>鴻佰科技股份有限公司-作業員<span>( 2021 — 2022 )</span></h3>
                    {/* <h2>Master Degree</h2> */}
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>海軍陸戰隊志願役士兵<span>( 2016 — 2020 )</span></h3>
                    {/* <h2>Computer Science</h2> */}
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
              </ul>
              <BsFillArrowDownSquareFill className="education-arrow"/>
            </div>
            <div id="skill" className="skill-wrapper">
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
            <div id="project" className="project-wrapper">
              <div className="project-title-wrapper">
                <div className="project-title">PROJECT</div>
                <div className="project-desc">Now, I’m working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional wordpress theme Elonissa. If you are interested to work with me, click below button and contact with me right now, so we can talk about your project.              </div>
              </div>
              <div className="project-list-wrapper">
                <div className="project-list">
                  <div className="project-list-title">Smashing Magazine Print</div>
                  <div className="project-list-desc">illustration, design</div>
                  <div className="project-list-image img1"></div>
                </div>
                <div className="project-list project-list-left">
                  <div className="project-list-image img2"></div>
                  <div className="project-list-title">Revolution Book</div>
                  <div className="project-list-desc">illustration, design</div>
                </div>
                <div className="project-list">
                  <div className="project-list-title">Dreamers Logo</div>
                  <div className="project-list-desc">illustration, design</div>
                <div className="project-list-image img3"></div>
                </div>
                <div className="project-list project-list-left">
                  <div className="project-list-image img4"></div>
                  <div className="project-list-title">Reductive Design</div>
                  <div className="project-list-desc">illustration, design</div>
                </div>
              </div>
              <BsFillArrowDownSquareFill className="project-arrow"/>
            </div>
            <div id="contact" className="contact-wrapper">
                <div className="contact-title">CONTACT</div>
              <div className="contact-input-wrapper">
                <input className="contact-input"placeholder="Name *"></input>
                <input className="contact-input"placeholder="Email *"></input>
                <input className="contact-input phone"placeholder="Phone"></input>
                <textarea className="contact-input message"placeholder="Message"></textarea>
                <div className="contact-btn-wrapper">
                  <a href="#" className="contact-btn">SEND MESSAGE</a>
                </div>
              </div>
              <div className="contact-info">
                <p>ADDRESS</p>
                <h3>69 Queen St, London, United Kingdom</h3>
                <p>PHONE</p>
                <h3>0912-144-381</h3>
                <p><a href="g01965250@gmail.com">g01965250@gmail.com</a></p>
              </div>
              <BsFillArrowDownSquareFill className="project-arrow"/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
