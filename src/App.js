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
          </div>
        </div>
        <div className="content-wrapper">
            <div id="home" className="home-wrapper">
              <div className="picture-wrapper">
                <div className="picture-border"></div>
                  <div className="picture"></div>
                <div className="picture-background"></div>
              </div>
              <div className="home-title-wrapper">
                <div className="home-title">Hello,<br/>I'm 冠宇 <br/>A Frontend Developer Beginner</div>
              </div>
              <BsFillArrowDownSquareFill className="home-arrow"/>
            </div>
            <div id="about" className="about-wrapper">
              <div className="about-title-wrapper">
                <div className="about-title title-bottomLine">ABOUT ME</div>
                <div className="about-dsec">I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from London, UK. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</div>
              </div>
              <ul className="about-label-wrapper">
                <li className="about-label">Name: <span className="chinese">朱冠宇</span></li>
                <li className="about-label">Birthday: July 22, 1993</li>
                <li className="about-label">Age: 29 Years</li>
                <li className="about-label">Adress:<span className="chinese"> 新竹,臺灣</span></li>
                <li className="about-label">Phone: 0912-144-381</li>
                <li className="about-label">Email: g01965250@gmail.com</li>
              </ul>
              <BsFillArrowDownSquareFill className="about-arrow"/>
            </div>
            <div id="experience" className="education-wrapper">
              <div className="education-title title-bottomLine">EXPERIENCE</div>
              <ul>
                <li>
                  <div className="education-item">
                    <h3>明新科技大學-電子工程系<span>( 2011 — 2016 )</span></h3>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>鴻佰科技股份有限公司-作業員<span>( 2021 — 2022 )</span></h3>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>海軍陸戰隊志願役士兵<span>( 2016 — 2020 )</span></h3>
                    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </li>
              </ul>
              <BsFillArrowDownSquareFill className="education-arrow"/>
            </div>
            <div id="skill" className="skill-wrapper">
              <div className="skill-title ">SKILL</div>
                <div className="skill-bar-wrapper ">
                  <div className="bar-style80">
                    <div className="skill-bar">HTML5<span>80%</span></div>
                  </div>
                </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style77">
                    <div className="skill-bar">CSS3<span>77%</span></div>
                  </div>
                 </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style70">
                    <div className="skill-bar">JavaScript<span>70%</span></div>
                  </div>
                </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style65">
                    <div className="skill-bar">React<span>65%</span></div>
                  </div>
                </div>
                <div className="skill-bar-wrapper">
                  <div className="bar-style60">
                    <div className="skill-bar">Git<span>60%</span></div>
                  </div>
                </div>
              <BsFillArrowDownSquareFill className="skill-arrow"/>
            </div>
            <div id="project" className="project-wrapper">
              <div className="project-title-wrapper">
                <div className="project-title title-bottomLine">PROJECT</div>
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
              <div className="contact-title title-bottomLine">CONTACT</div>
              <form id="fs-frm" name="complaint-form" accept-charset="utf-8" action="https://formspree.io/f/xoqbdeey" method="post">
                <fieldset id="fs-frm-inputs" className="frm-inputs">
                  <input type="text" name="name"  placeholder="Name *" required="" className="contact-input"/>
                  <input type="email" name="_replyto"  placeholder="Email *" required=""className="contact-input"/>
                  <input type="tel"  minlength="9" maxlength="10" name="telephone"  placeholder="Phone" className="contact-input phone"/>
                  <textarea name="complaint"  placeholder="Message" required="" className="contact-input message"></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission"/>
                  <input type="submit" value="SEND MESSAGE" className="contact-btn-wrapper" />
                </fieldset>
              </form>
              <div className="contact-info">
                <p>ADDRESS</p>
                <h3>新竹縣湖口鄉仁興路48巷10號</h3>
                <p>PHONE</p>
                <h3>0912-144-381</h3>
                <p><a href="g01965250@gmail.com">g01965250@gmail.com</a></p>
              </div>
              </div>
        </div>
      </main>
    </div>
  );
}

export default App;
