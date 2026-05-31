import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

function About({ aboutAnchor, experienceAnchor }) {
  return (
    <div>
      <div
        id="about"
        className="section-wrapper wrapper-bottomLine"
        ref={aboutAnchor}
      >
        <div className="section-content">
          <div className="about-title-wrapper">
            <div className="section-title title-bottomLine">ABOUT ME</div>
            <div className="about-desc">
              我是冠宇，畢業於明新科技大學電子工程系，目前在兆赫電子擔任 SMT
              技術師。在職期間，我獨立開發了一套自動化工具，將原本需要人工處理的
              BOM/CAD
              檔案合併流程寫成程式自動完成——那個解決問題的過程，讓我確認自己真正喜歡的是用程式碼讓事情變得更好，也成為我投入前端開發的直接動機。現在我正全力學習
              React
              與現代前端開發，目標是成為一名能夠獨立開發、持續精進的前端工程師。
            </div>
          </div>
          <ul className="about-label-wrapper">
            <li className="about-label">
              Name:
              <span className="chinese">朱冠宇</span>
            </li>
            <li className="about-label">
              Address:
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
