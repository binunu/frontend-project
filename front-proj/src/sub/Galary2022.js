import React from "react";
import './subGalary.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Galary2022 = () => {

  const [isGaOn, setIsGaOn] = useState(true);
  const [is2022Hovered, setis2022Hovered] = useState(false);
  const [is2021Hovered, setis2021Hovered] = useState(false);
  const [is2020Hovered, setis2020Hovered] = useState(false);

  return (
    <div className="ga-wrap">
      <div className="ga-sec-01">
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>갤러리</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>2022</h2>
          </div>
        </div>

        <div className="submenu-imgs">
          <div className="submenu-i submenu-img-01">
            <img src="./img/sv_img01.png" alt="기타치는이미지" />
          </div>
          <div className="submenu-i submenu-img-02">
            <img src="./img/sv_img02.png" alt="노래부르는 이미지" />
          </div>
          <div className="submenu-i submenu-img-03">
            <img src="./img/sv_img03.png" alt="오른쪽 위 음표 이미지" />
          </div>
          <div className="submenu-i submenu-img-04">
            <img src="./img/sv_img04.png" alt="왼쪽 위 음표 이미지" />
          </div>
        </div>
      </div>

      <div className="ga-body">
        <div className="w-wave"
          style={{ backgroundImage: "src=img/w_wave/png" }}
        ></div>

        <div className='ga-sub-title'>
          <ul className='galary-menu'>
            <li ><Link to={"/galary2022"} >
              <div className={`ga-li-width ${isGaOn?"gaOn":""} ${is2022Hovered ? "ga-point" : ""}`}
                onMouseEnter={() => { setIsGaOn(false); setis2022Hovered(true); }} onMouseLeave={() => { setIsGaOn(true); setis2022Hovered(false); }}>2022</div></Link></li>
            <li><Link to={"/galary2021"}
            ><div onMouseEnter={() => { setIsGaOn(false); setis2021Hovered(true); }} onMouseLeave={() => { setIsGaOn(true); setis2021Hovered(false); }} className={`ga-li-width ${is2021Hovered ? 'ga-point' : ''}`}>2021</div></Link></li>
            <li ><Link to={"/galary2020"}
            ><div onMouseEnter={() => { setIsGaOn(false); setis2020Hovered(true); }} onMouseLeave={() => { setIsGaOn(true); setis2020Hovered(false); }} className={`ga-li-width ${is2020Hovered ? 'ga-point' : ''}`}>2020</div></Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Galary2022;
