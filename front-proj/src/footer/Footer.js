import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    // <div style={{width:'100%', height:'700px'}}>
    // <div style={{width:'100%'}}>
    <footer className="footer">
      <div className="g-wave-box">
        <div className="g-wave"></div>
      </div>
      <div className="wrap" max="1400">
        <div className="f-logo">
          <img src="img/mainlogo.png" alt="작은로고" />
        </div>
        <div className="txt-footer">
          <div className="add">
            <span>주소 : 서울시 금천구 가산디지털1로 70</span>
            <span>연락처 : 010-5480-6972</span>
            <span>이메일 : llsbdm001@naver.com</span>
          </div>
          <div className="co">
            <span>
              Copyright © 2023 SEOUL FESTIVAL SCHEDULE. All right reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
