import React from "react";
import "./sub.css";

const QandA = () => {
  return (
    <div className="qa-wrap">
      <div className="qa-sec-01">
        <div className="qa-textbox">
          <div className="qat qa-text-1">
            <p>커뮤니티</p>
          </div>
          <div className="qat qa-text-2">
            <h2>문의하기</h2>
          </div>
        </div>

        <div className="qa-imgs">
          <div className="qa-img-01">
            <img src="./img/sv_img01.png" alt="기타치는이미지" />
          </div>
          <div className="qa-img-02">
            <img src="./img/sv_img02.png" alt="노래부르는 이미지" />
          </div>
          <div className="qa-img-03">
            <img src="./img/sv_img03.png" alt="오른쪽 위 음표 이미지" />
          </div>
          <div className="qa-img-04">
            <img src="./img/sv_img04.png" alt="왼쪽 위 음표 이미지" />
          </div>
        </div>
      </div>

      <div className="qa-body">
        <div className="w-wave"></div>
      </div>
    </div>
  );
};

export default QandA;
