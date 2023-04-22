import React from 'react'
import { Link } from 'react-router-dom';
import './subSchedule.css';
import { useState } from 'react';
const ScheduleSpring = () => {
  const [isSpringHovered, setIsSpringHovered] = useState(false);
  const [isSummerHovered, setIsSummerHovered] = useState(false);
  const [isFallHovered, setIsFallHovered] = useState(false);
  const [isWinterHovered, setIsWinterHovered] = useState(false);

  return (
    <div className='sd-wrap'>
      <div className='sd-sec-01'>
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>행사일정</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>봄</h2>
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
          {/* <div className='sd-point'/> */}
          <ul className='season-menu'>
            <li ><Link to={"/scheduleSpring"} className={`white &{isSpringHovered? sd-point:""}`} onMouseEnter={()=>setIsSpringHovered(true)}
              onMouseLeave={()=>setIsSpringHovered(false)} >봄</Link></li>
            <li className={isSummerHovered ? 'sd-point' : ''} onMouseLeave={()=>setIsSummerHovered(false)} ><Link to={"/scheduleSummer"} onMouseEnter={()=>setIsSummerHovered(true)}
              >여름</Link></li>
            <li className={isFallHovered ? 'sd-point' : ''}><Link to={"/scheduleFall"} onMouseEnter={()=>setIsFallHovered(true)}
              onMouseLeave={()=>setIsFallHovered(false)} >가을</Link></li>
            <li><Link to={"/scheduleWinter"} onMouseEnter={()=>setIsWinterHovered(true)}
              onMouseLeave={()=>setIsWinterHovered(false)} className={isWinterHovered ? 'sd-point' : ''}>겨울</Link></li>
          </ul>
        </div>
        <div className='sd-container'>

        </div>
      </div>
    </div>
  )
}

export default ScheduleSpring;