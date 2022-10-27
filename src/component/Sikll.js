/* eslint-disable linebreak-style */
import React from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
function Skill({ skillAnchor, projectAnchor }) {
  return (
    <div>
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
              <li>了解Array方法及應用</li>
            </ul>
          </div>
          <div className="skill-box">
            <h2 className="skill-box-title">React</h2>
            <ul>
              <li>jsx</li>
              <li>了解Function Component 與 Class Component</li>
              <li>left cycle</li>
            </ul>
          </div>
          <div className="skill-box">
            <h2 className="skill-box-title">Tools</h2>
            <ul>
              <li>Git & command line</li>
              <li>vscode</li>
              <li>ESLint</li>
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
            window.scrollTo({ behavior: 'smooth', top: projectAnchor });
          }}
        >
          <BsFillArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
}
export default Skill;
