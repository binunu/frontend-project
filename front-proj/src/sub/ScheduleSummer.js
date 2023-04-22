import React from 'react'
import './sub.css';
import { Link } from "react-router-dom";

const ScheduleSummer = () => {
  return (
    <div className='sd-wrap'>
      <div className='sd-sec-01'>
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>행사일정</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>여름</h2>
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

      <div className='sd-body'>
        <div className='w-wave' style={{ backgroundImage: "src=img/w_wave/png" }}></div>
        {/* main */}
        <div className='sd-sub-title'>
          <ul className='season-menu'>
            <li><Link to={"/scheduleSpring"}>봄</Link></li>
            <li><Link to={"/scheduleSummer"}>여름</Link></li>
            <li><Link to={"/scheduleFall"}>가을</Link></li>
            <li><Link to={"/scheduleWinter"}>겨울</Link></li>
          </ul>
        </div>
        <div className='sd-container'>

        </div>
      </div>
    </div>
  )
}

export default ScheduleSummer;
