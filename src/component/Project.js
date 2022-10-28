import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill, BsExclamationOctagon } from 'react-icons/bs';
import todopic from '../image/todolist.jpg';
import calculaterpic from '../image/Calculator.jpg';
import pomodoropic from '../image/Pomodoro.jpg';
import linepic from '../image/line.jpg';

function Project({ projectAnchor, contactAnchor }) {
  return (
    <div>
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
                <div className="exclamationIcon-wrapper">
                  <BsExclamationOctagon className="exclamationIcon" />
                  <div className="project-exclamation-wrapper">
                    <p>
                      簡介：一個標準的計算機。
                      原本透過畫面按鈕進行計算，後面研究透過 Rract事件監聽增加使用鍵盤控制。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-list project-list-left">
              <div className="project-list-image">
                <a href="https://g01965250.github.io/git-pomodoro/">
                  <img src={pomodoropic} alt="" />
                </a>
                <div className="exclamationIcon-wrapper">
                  <BsExclamationOctagon className="exclamationIcon" />
                  <div className="project-exclamation-wrapper">
                    <p>
                      簡介：使我們可以用最高強度專注在一件事情上25分鐘，
                      例如看書、思考或各種工作任務；
                      然後讓自己精神放鬆5分鐘。一直重複這個循環，可以讓自己抓緊時間並維持最高專注力。
                      <br />
                      使用技術：將ToDoList搭配倒數計時
                    </p>
                  </div>
                </div>
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
                <div className="exclamationIcon-wrapper">
                  <BsExclamationOctagon className="exclamationIcon" />
                  <div className="project-exclamation-wrapper">
                    <p>簡介：ToDoList作品練習</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-list project-list-left">
              <div className="project-list-image">
                <a href="https://g01965250.github.io/LineWeb/">
                  <img src={linepic} alt="" />
                </a>
                <div className="exclamationIcon-wrapper">
                  <BsExclamationOctagon className="exclamationIcon" />
                  <div className="project-exclamation-wrapper">
                    <p>簡介：使用 React框架進行切版並將內容元件化</p>
                  </div>
                </div>
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
            window.scrollTo({ behavior: 'smooth', top: contactAnchor });
          }}
        >
          <BsFillArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
}

Project.propTypes = {
  projectAnchor: propTypes.shape({ current: propTypes.any }),
  contactAnchor: propTypes.number,
};
Project.defaultProps = {
  projectAnchor: {},
  contactAnchor: 0,
};

export default Project;
