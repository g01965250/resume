import React, { useState, useRef, useEffect } from 'react';
import {
  FaTwitter, FaFacebookF, FaInstagramSquare, FaGithub, FaYoutube,
} from 'react-icons/fa';
import { BsFillArrowLeftSquareFill, BsFillArrowDownSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import './App.css';
import todopic from './image/todolist.jpg';
import calculaterpic from './image/Calculator.jpg';
import pomodoropic from './image/Pomodoro.jpg';
import linepic from './image/line.jpg';

function App() {
  const [collapse, setCollapse] = useState(false);
  const homeAnchor = useRef(null);
  const aboutAnchor = useRef(null);
  const experienceAnchor = useRef(null);
  const skillAnchor = useRef(null);
  const projectAnchor = useRef(null);
  const contactAnchor = useRef(null);
  const [active, setActive] = useState(0);
  // eslint-disable-next-line no-console
  console.log('win', window.scrollY);

  // eslint-disable-next-line func-names
  const handleScroll = function () {
    const { scrollY } = window;
    // eslint-disable-next-line no-console
    console.log(scrollY);
    if (scrollY >= 0 && scrollY <= 1055) {
      setActive(0);
    } else if (scrollY >= 1056 && scrollY <= 2099) {
      setActive(1);
    } else if (scrollY >= 2100 && scrollY <= 3410) {
      setActive(2);
    } else if (scrollY >= 3411 && scrollY <= 5181) {
      setActive(3);
    } else if (scrollY >= 5182 && scrollY <= 7039) {
      setActive(4);
    } else if (scrollY >= 7040 && scrollY <= 7749) {
      setActive(5);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // eslint-disable-next-line no-console
    console.log('winnn', window.scrollY);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  /*   if (window.scrollY >= 1056 && window.scrollY <= 2100) {
    setActive(3);
  } */
  /*
  useEffect (){
  } */
  /* const update = () => {
    const elem = document.getElementById('home');
    const rect = elem.getBoundingClientRect();
    console.log('about', rect);
  };
  document.addEventListener('scroll', update);
  update(); */

  // eslint-disable-next-line no-console
  console.log('homeAnchor', homeAnchor);
  return (
    <div className="App">
      <main className="main">
        <div className={`sidebar ${collapse ? 'collapse' : ' '}`}>
          <button type="button" className="sidebar-arrow" onClick={() => setCollapse((prev) => !prev)}>
            {collapse ? <BsFillArrowRightSquareFill /> : <BsFillArrowLeftSquareFill /> }
          </button>
          <nav className="nav-wrapper">
            <div className="nav-title">REWALL</div>
            <ul>
              <li className={`nav-btn  ${active === 0 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(0);
                    window.scrollTo({ behavior: 'smooth', top: homeAnchor?.current?.offsetTop });
                  }}
                >
                  HOME
                </button>
              </li>
              <li className={`nav-btn  ${active === 1 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(1);
                    window.scrollTo({ behavior: 'smooth', top: aboutAnchor?.current?.offsetTop });
                  }}
                >
                  ABOUT ME
                </button>
              </li>
              <li className={`nav-btn  ${active === 2 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(2);
                    window.scrollTo({ behavior: 'smooth', top: experienceAnchor?.current?.offsetTop });
                  }}
                >
                  EXPERIENCE
                </button>
              </li>
              <li className={`nav-btn  ${active === 3 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(3);
                    window.scrollTo({ behavior: 'smooth', top: skillAnchor?.current?.offsetTop });
                  }}
                >
                  SKILL
                </button>
              </li>
              <li className={`nav-btn  ${active === 4 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(4);
                    window.scrollTo({ behavior: 'smooth', top: projectAnchor?.current?.offsetTop });
                  }}
                >
                  PROJECT
                </button>
              </li>
              <li className={`nav-btn  ${active === 5 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(5);
                    window.scrollTo({ behavior: 'smooth', top: contactAnchor?.current?.offsetTop });
                  }}
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
          <div className="social-wrapper">
            <div className="social">
              <ul>
                <li>
                  <a href="https://twitter.com/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100000480666744">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/g01965250/">
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/g01965250">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div id="home" className="home-wrapper wrapper-bottomLine" ref={homeAnchor}>
            <div className="home-content">
              <div className="picture-wrapper">
                <div className="picture-border" />
                <div className="picture" />
                <div className="picture-background" />
              </div>
              <div className="home-title-wrapper">
                <div className="home-title">
                  Hello,
                  <br />
                  I&apos;m 冠宇
                  {' '}
                  <br />
                  A Frontend Developer Beginner
                </div>
              </div>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={() => {
                setActive(1);
                window.scrollTo({ behavior: 'smooth', top: aboutAnchor?.current?.offsetTop });
              }}
            >
              <BsFillArrowDownSquareFill />
            </button>
          </div>
          <div id="about" className="about-wrapper wrapper-bottomLine" ref={aboutAnchor}>
            <div className="about-content">
              <div className="about-title-wrapper">
                <div className="about-title title-bottomLine">ABOUT ME</div>
                <div className="about-dsec">我是冠宇，來自桃園，現居新竹，畢業於明新科技大學電子工程系。自學前端設計半年經驗，平常會用HTML+CSS 練習刻版，JavaScript 則是上LeetCode 練習解題，React 有實作一些小專案。目前沒有相關的正職工作經驗，但我相信自己已經準備好進入該領域的職場，未來希望在短期能快速的進入工作軌道外，更能夠在公司的環境中成長，不論在前端的程式領域，或是任何面向挑戰都可以不斷的學習與精進。</div>
              </div>
              <ul className="about-label-wrapper">
                <li className="about-label">
                  Name:
                  {' '}
                  <span className="chinese">朱冠宇</span>
                </li>
                <li className="about-label">Birthday: July 22, 1993</li>
                <li className="about-label">Age: 29 Years</li>
                <li className="about-label">
                  Adress:
                  <span className="chinese"> 新竹,臺灣</span>
                </li>
                <li className="about-label">Phone: 0912-144-381</li>
                <li className="about-label">Email: g01965250@gmail.com</li>
              </ul>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={() => {
                setActive(2);
                window.scrollTo({ behavior: 'smooth', top: experienceAnchor?.current?.offsetTop });
              }}
            >
              <BsFillArrowDownSquareFill />
            </button>
          </div>
          <div id="experience" className="education-wrapper  wrapper-bottomLine" ref={experienceAnchor}>
            <div className="education-content">
              <div className="education-title title-bottomLine">EXPERIENCE</div>
              <ul>
                <li>
                  <div className="education-item">
                    <h3>
                      鴻佰科技股份有限公司-作業員
                      <span>( 2021 11月 — 2022 6月)</span>
                    </h3>
                    <p>
                      到職不久便能快速的掌握工作內容也受到主管的信賴，即可獨立完成工作項目。
                      <br />
                      因為退伍後在求職方面還是有脫節，經朋友的推薦，便在下班之餘用空閒的時間學習前端相關技能。
                    </p>
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>
                      海軍陸戰隊志願役士兵
                      <span>( 2016 6月— 2020 6月)</span>
                    </h3>
                    {/* eslint-disable max-len */}
                    <p>
                      在軍中擔任四年通信士的位置。
                      <br />
                      剛入伍時覺得軍人是個不錯的職業，可以培養自律的生活及健康的身體，也可以學習到新的事物，就毅然決然的簽下了志願役，但後來發現軍中學習的技能有限，退伍後可以帶走的東西不多，就在役期結束時選擇退伍。
                    </p>
                    {/* eslint-disable max-len */}
                  </div>
                </li>
                <li>
                  <div className="education-item">
                    <h3>
                      私立明新科技大學－電子工程系
                      <span>( 2011 — 2016 )</span>
                    </h3>
                    <p>在學期間修過物件導向及WebApp 相關課程。</p>
                  </div>
                </li>
              </ul>
              <button
                type="button"
                className="arrow"
                onClick={() => {
                  setActive(3);
                  window.scrollTo({ behavior: 'smooth', top: skillAnchor?.current?.offsetTop });
                }}
              >
                <BsFillArrowDownSquareFill />
              </button>
            </div>
          </div>
          <div id="skill" className="skill-wrapper  wrapper-bottomLine" ref={skillAnchor}>
            <div className="skill-content">
              <div className="skill-title ">SKILL</div>
              <div className="skill-box">
                <h2 className="skill-box-title">HTML & CSS</h2>
                <ul>
                  <li>熟悉HTML/CSS 語法</li>
                  <li>掌握合適HTML 語意化標籤的使⽤</li>
                  <li>掌握使⽤CSS 語法美化網頁架構樣式並且會命名有意義的名稱，提高團隊維護便利性</li>
                  <li>了解CSS 權重</li>
                  <li>會使用CSS Flex進行排版</li>
                  <li>未來打算學習 CSS 的 grid transform animation tailwindcss...</li>
                </ul>
              </div>
              <div className="skill-box">
                <h2 className="skill-box-title">JavaScript</h2>
                <ul>
                  <li>了解基本的變數、型別</li>
                  <li>了解for、while、do...while及for...of的應用</li>
                  <li>了解break及continue的應用</li>
                  <li>了解 if...else、switch及條件運算子</li>
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
              <div className="skill-box">
                <h2 className="skill-box-title">React</h2>
                <ul>
                  <li>jsx</li>
                  <li>hook</li>
                  <li>left cycle</li>
                </ul>
              </div>
              <div className="skill-box">
                <h2 className="skill-box-title">Tools</h2>
                <ul>
                  <li>Git & command line</li>
                  <li>vscode</li>
                  <li>node & npm </li>
                  <li>Github</li>
                  <li>trello</li>
                  <li>Obsidian</li>
                  <li>Google </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={() => {
                setActive(4);
                window.scrollTo({ behavior: 'smooth', top: projectAnchor?.current?.offsetTop });
              }}
            >
              <BsFillArrowDownSquareFill />
            </button>
          </div>
          <div id="project" className="project-wrapper  wrapper-bottomLine" ref={projectAnchor}>
            <div className="project-content">
              <div className="project-title-wrapper">
                <div className="project-title title-bottomLine">PROJECT</div>
              </div>
              <div className="project-list-wrapper">
                <div className="project-list">
                  <div className="project-list-title">計算機</div>
                  <div className="project-list-desc" />
                  <div className="project-list-image">
                    <a href="https://g01965250.github.io/calculater/">
                      <img src={calculaterpic} alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-list project-list-left">
                  <div className="project-list-image">
                    <a href="https://g01965250.github.io/git-pomodoro/">
                      <img src={pomodoropic} alt="" />
                    </a>
                  </div>
                  <div className="project-list-title">番茄鐘</div>
                  <div className="project-list-desc" />
                </div>
                <div className="project-list">
                  <div className="project-list-title">To-Do List</div>
                  <div className="project-list-desc" />
                  <div className="project-list-image">
                    <a href="https://g01965250.github.io/todolist/">
                      <img src={todopic} alt="" />
                    </a>
                  </div>
                </div>
                <div className="project-list project-list-left">
                  <div className="project-list-image">
                    <a href="https://g01965250.github.io/LineWeb/">
                      <img src={linepic} alt="" />
                    </a>
                  </div>
                  <div className="project-list-title">Line切版練習</div>
                  <div className="project-list-desc" />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={() => {
                setActive(5);
                window.scrollTo({ behavior: 'smooth', top: contactAnchor?.current?.offsetTop });
              }}
            >
              <BsFillArrowDownSquareFill />
            </button>
          </div>
          <div id="contact" className="contact-wrapper" ref={contactAnchor}>
            <div className="contact-title title-bottomLine">CONTACT</div>
            <form id="fs-frm" name="complaint-form" acceptCharset="utf-8" action="https://formspree.io/f/xoqbdeey" method="post">
              <fieldset id="fs-frm-inputs" className="frm-inputs">
                <div className="input-container">
                  <input type="text" name="name" required="" className="contact-input" />
                  <span>Name *</span>
                </div>
                <div className="input-container">
                  <input type="email" name="_replyto" required="" className="contact-input" />
                  <span>Email *</span>
                </div>
                <div className="input-container">
                  <input type="tel" minLength="9" maxLength="10" name="telephone" className="contact-input phone" />
                  <span>Phone</span>
                </div>
                <div className="input-container">
                  <textarea name="complaint" required="" className="contact-input message" />
                  <span>Message</span>
                  <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission" />
                </div>
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
