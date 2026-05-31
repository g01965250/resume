import React from 'react';
import propTypes from 'prop-types';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

function Experience({ experienceAnchor, skillAnchor }) {
  return (
    <div>
      <div
        id="experience"
        className="section-wrapper  wrapper-bottomLine"
        ref={experienceAnchor}
      >
        <div className="section-content edu-content">
          <div className="section-title title-bottomLine">EXPERIENCE</div>
          <ul>
            <li>
              <div className="card-item">
                <h3>
                  兆赫電子股份有限公司－SMT 技術師
                  <span>( 2022 年 11 月 — 至今)</span>
                </h3>
                <p>
                  負責 SMT 產線操作與機台日常維護，並處理製程異常排查。接收 RD
                  提供的電路圖、CAD 檔及 BOM 表，使用 GC-PowerPlace 合併後匯入
                  JUKI HLC 編譯為貼片程式與料站表，並分別匯入 SPI 及 Omron VT-S
                  編寫檢測程式供後續製程使用。任職期間獨立開發自動化工具，將 HLC
                  輸出的料站表自動整理為統一格式，大幅減少人工調整時間。
                </p>
              </div>
            </li>
            <li>
              <div className="card-item">
                <h3>
                  鴻佰科技股份有限公司－生產線作業員
                  <span>( 2021 11月 — 2022 6月)</span>
                </h3>
                <p>
                  負責生產線作業，到職後迅速掌握工作流程並獨立執行工作項目。
                </p>
              </div>
            </li>
            <li>
              <div className="card-item">
                <h3>
                  海軍陸戰隊志願役士兵
                  <span>( 2016 6月 — 2020 6月)</span>
                </h3>
                <p>擔任通信士，服役四年後退伍。</p>
              </div>
            </li>
            <li>
              <div className="card-item">
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
