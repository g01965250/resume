import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

function About({ aboutAnchor, experienceAnchor }) {
  return (
    <div>
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
            window.scrollTo({ behavior: 'smooth', top: experienceAnchor });
          }}
        >
          <BsFillArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
}
About.propTypes = {
  aboutAnchor: propTypes.shape({ current: propTypes.any }),
  experienceAnchor: propTypes.number,
};
About.defaultProps = {
  aboutAnchor: {},
  experienceAnchor: 0,
};
export default About;
