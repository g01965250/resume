import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

function Home({ homeAnchor, aboutAnchor }) {
  return (
    <div>
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
            window.scrollTo({ behavior: 'smooth', top: aboutAnchor?.current?.offsetTop });
          }}
        >
          <BsFillArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {
  homeAnchor: propTypes.shape({ current: propTypes.any }),
  aboutAnchor: propTypes.number,
};
Home.defaultProps = {
  homeAnchor: {},
  aboutAnchor: 0,
};
export default Home;
