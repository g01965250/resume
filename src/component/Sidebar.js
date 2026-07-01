import React from 'react';
import PropTypes from 'prop-types';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagramSquare,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

function Sidebar({
  aboutAnchor,
  experienceAnchor,
  homeAnchor,
  skillAnchor,
  projectAnchor,
  contactAnchor,
  active,
  collapse,
  setCollapse,
}) {
  return (
    <div>
      <div className={`sidebar-wrapper ${collapse ? 'collapse' : ' '}`}>
        <div className={`sidebar ${collapse ? 'collapse' : ' '}`}>
          <button
            type="button"
            className="sidebar-arrow"
            onClick={() => setCollapse((prev) => !prev)}
          >
            {collapse ? (
              <BsFillArrowRightSquareFill />
            ) : (
              <BsFillArrowLeftSquareFill />
            )}
          </button>
          <nav className="nav-wrapper">
            <div className="nav-title">Orton</div>
            <ul>
              <li className={`nav-btn  ${active === 0 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: homeAnchor?.current?.offsetTop,
                    });
                  }}
                >
                  HOME
                </button>
              </li>
              <li className={`nav-btn  ${active === 1 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: aboutAnchor?.current?.offsetTop,
                    });
                  }}
                >
                  ABOUT ME
                </button>
              </li>
              <li className={`nav-btn  ${active === 2 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: experienceAnchor?.current?.offsetTop,
                    });
                  }}
                >
                  EXPERIENCE
                </button>
              </li>
              <li className={`nav-btn  ${active === 3 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: skillAnchor?.current?.offsetTop,
                    });
                  }}
                >
                  SKILL
                </button>
              </li>
              <li className={`nav-btn  ${active === 4 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: projectAnchor?.current?.offsetTop,
                    });
                  }}
                >
                  PROJECT
                </button>
              </li>
              <li className={`nav-btn  ${active === 5 ? 'nav-active' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({
                      behavior: 'smooth',
                      top: contactAnchor?.current?.offsetTop,
                    });
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
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  aboutAnchor: PropTypes.shape({ current: PropTypes.any }),
  experienceAnchor: PropTypes.shape({ current: PropTypes.any }),
  homeAnchor: PropTypes.shape({ current: PropTypes.any }),
  skillAnchor: PropTypes.shape({ current: PropTypes.any }),
  projectAnchor: PropTypes.shape({ current: PropTypes.any }),
  contactAnchor: PropTypes.shape({ current: PropTypes.any }),
  active: PropTypes.number,
  collapse: PropTypes.bool,
  setCollapse: PropTypes.func,
};
Sidebar.defaultProps = {
  aboutAnchor: {},
  experienceAnchor: {},
  homeAnchor: {},
  skillAnchor: {},
  projectAnchor: {},
  contactAnchor: {},
  active: 0,
  collapse: false,
  setCollapse: () => {},
};
export default Sidebar;
