/* eslint-disable linebreak-style */
import React from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
function Skill({ skillAnchor, projectAnchor }) {
  return (
    <div>
      <div
        id="skill"
        className="section-wrapper  wrapper-bottomLine"
        ref={skillAnchor}
      >
        <div className="section-content">
          <div className="section-title">SKILL</div>
          <div className="skill-box-wrapper">
            <div className="skill-box">
              <div className="skill-box-border-bottom">
                <h2 className="skill-box-title">HTML & CSS</h2>
                <ul>
                  <li>熟悉 HTML 語意化標籤的使用</li>
                  <li>能以有意義的命名撰寫 CSS，提高維護性</li>
                  <li>了解 CSS 權重規則</li>
                  <li>使用 Flexbox 進行響應式排版</li>
                </ul>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-box-border-bottom">
                <h2 className="skill-box-title">JavaScript</h2>
                <ul>
                  <li>了解 callback、Promise 與 async/await 非同步處理</li>
                  <li>使用 fetch 串接 RESTful API</li>
                  <li>了解閉包（closure）概念</li>
                  <li>熟悉陣列方法 map、filter、reduce 的應用</li>
                </ul>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-box-border-bottom">
                <h2 className="skill-box-title">React</h2>
                <ul>
                  <li>使用 Function Component 搭配 Hooks 開發</li>
                  <li>熟悉 useState、useEffect 管理元件狀態與副作用</li>
                  <li>具備封裝自定義 Hook 的經驗</li>
                  <li>使用 React Router 實作前端路由</li>
                </ul>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-box-border-bottom">
                <h2 className="skill-box-title">Tools</h2>
                <ul>
                  <li>版本控制：Git、GitHub</li>
                  <li>開發工具：VSCode、ESLint、Node.js、npm</li>
                  <li>學習筆記：Obsidian</li>
                </ul>
              </div>
            </div>
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
