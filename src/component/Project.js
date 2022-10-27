import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
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
