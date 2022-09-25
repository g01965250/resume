import React from "react";
import { FaTwitter,FaFacebookF ,FaInstagramSquare,FaGithub,FaYoutube,FaHtml5,FaCss3Alt} from "react-icons/fa";
import { BsFillArrowLeftSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
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
            <div id="home" className="home-wrapper wrapper-bottomLine">
              <div className="home-content">
                <div className="picture-wrapper">
                  <div className="picture-border"></div>
                    <div className="picture"></div>
                  <div className="picture-background"></div>
                </div>
                <div className="home-title-wrapper">
                  <div className="home-title">Hello,<br/>I'm 冠宇 <br/>A Frontend Developer Beginner</div>
                </div>
              </div>
              <BsFillArrowDownSquareFill className="arrow"/>
            </div>
            <div id="about" className="about-wrapper wrapper-bottomLine">
              <div className="about-content">
                <div className="about-title-wrapper">
                  <div className="about-title title-bottomLine">ABOUT ME</div>
                  <div className="about-dsec">熱愛學習新知，自學前端網頁設計半年左右的時間，熟悉HTML語法、CSS排版、JavaScript應用與撰寫、React框架運用，目前持續精進各項語言，朝著偉大的航道前進。</div>
                </div>
                <ul className="about-label-wrapper">
                  <li className="about-label">Name: <span className="chinese">朱冠宇</span></li>
                  <li className="about-label">Birthday: July 22, 1993</li>
                  <li className="about-label">Age: 29 Years</li>
                  <li className="about-label">Adress:<span className="chinese"> 新竹,臺灣</span></li>
                  <li className="about-label">Phone: 0912-144-381</li>
                  <li className="about-label">Email: g01965250@gmail.com</li>
                </ul>
              </div>
              <BsFillArrowDownSquareFill className="arrow"/>
            </div>
            <div id="experience" className="education-wrapper  wrapper-bottomLine">
              <div className="education-content">
                <div className="education-title title-bottomLine">EXPERIENCE</div>
                <ul>
                  <li>
                    <div className="education-item">
                      <h3>鴻佰科技股份有限公司-作業員<span>( 2021 — 2022 )</span></h3>
                        <p>人際關係：善於部門間的溝通與合作，與同仁關係良好。<br/>學習能力強：剛入職不久即可獨立完成工作項目，能短時間協助主管交辦事務或代理職務內容。</p>
                    </div>
                  </li>
                  <li>
                    <div className="education-item">
                      <h3>海軍陸戰隊志願役士兵<span>( 2016 — 2020 )</span></h3>
                      <p>在軍中擔任通信士的位置。</p>
                    </div>
                  </li>
                  <li>
                    <div className="education-item">
                      <h3>私立明新科技大學－電子工程系<span>( 2011 — 2016 )</span></h3>
                      <p></p>
                    </div>
                  </li>
                </ul>
                <BsFillArrowDownSquareFill className="arrow"/>
              </div>
            </div>
            <div id="skill" className="skill-wrapper  wrapper-bottomLine">
              <div className="skill-content">
                <div className="skill-title ">SKILL</div>
                <div className="skill-box">
                {/* <div class="tag-vertical discount"><FaHtml5/> & <FaCss3Alt/></div> */}
                  {/* <div class="label-child"><FaHtml5/> & <FaCss3Alt/></div> */}
                  <h2 className="skill-box-title">HTML & CSS</h2>
                    <ul>
                      <li>RWD</li>
                      <li>熟悉HTML/CSS 語法</li> 
                    </ul>
                </div>
                <div className="skill-box">
                  <h2 className="skill-box-title">JavaScript</h2>
                  <p>熟悉 JavaScript 語法，並能夠解決基礎的邏輯與演算法問題 。</p>
                </div>
                <div className="skill-box">
                  <h2 className="skill-box-title">React</h2>
                  <p>會使用基本的 React Hook。</p>
                </div>
                <div className="skill-box">
                  <h2 className="skill-box-title">Git</h2>
                  <p></p>
                </div>
              </div>
              <BsFillArrowDownSquareFill className="arrow"/>
            </div>
            <div id="project" className="project-wrapper  wrapper-bottomLine">
              <div className="project-content">
                <div className="project-title-wrapper">
                  <div className="project-title title-bottomLine">PROJECT</div>
{/*                   <div className="project-desc">Now, I’m working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional wordpress theme Elonissa. If you are interested to work with me, click below button and contact with me right now, so we can talk about your project.              </div> */}
                </div>
                <div className="project-list-wrapper">
                  <div className="project-list">
                    <div className="project-list-title">計算機</div>
                    {/* <div className="project-list-desc">illustration, design</div> */}
                    <a href="https://g01965250.github.io/calculater/"><div className="project-list-image img1"></div></a>
                  </div>
                  <div className="project-list project-list-left">
                    <a href="https://g01965250.github.io/git-pomodoro/"><div className="project-list-image img2"></div></a>
                    <div className="project-list-title">番茄鐘</div>
                    {/* <div className="project-list-desc">illustration, design</div> */}
                  </div>
                  <div className="project-list">
                    <div className="project-list-title">To-Do List</div>
                    {/* <div className="project-list-desc">illustration, design</div> */}
                    <a href="https://g01965250.github.io/todolist/"><div className="project-list-image img3"></div></a>
                  </div>
                  <div className="project-list project-list-left">
                  <a href="https://g01965250.github.io/LineWeb/"><div className="project-list-image img4"></div></a>
                    <div className="project-list-title">Line切版練習</div>
                    {/* <div className="project-list-desc">illustration, design</div> */}
                  </div>
                </div>
              </div> 
              <BsFillArrowDownSquareFill className="arrow"/>
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
