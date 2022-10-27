import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

function Experience({ experienceAnchor, skillAnchor }) {
  return (
    <div>
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
                <p>
                  在軍中擔任四年通信士的位置。
                  <br />
                  剛入伍時覺得軍人是個不錯的職業，可以培養自律的生活及健康的身體，
                  也可以學習到新的事物，就毅然決然的簽下了志願役，但後來發現軍中學習的技能有限，
                  退伍後可以帶走的東西不多，就在役期結束時選擇退伍。
                </p>
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
              window.scrollTo({ behavior: 'smooth', top: skillAnchor });
            }}
          >
            <BsFillArrowDownSquareFill />
          </button>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  experienceAnchor: propTypes.shape({ current: propTypes.any }),
  skillAnchor: propTypes.number,
};
Experience.defaultProps = {
  experienceAnchor: {},
  skillAnchor: 0,
};
export default Experience;
