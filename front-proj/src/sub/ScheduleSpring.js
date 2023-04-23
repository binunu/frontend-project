import React from 'react'
import { Link } from 'react-router-dom';
import './subSchedule.css';
import { useState } from 'react';
import ImageWithText from './ImageWithText'; 

const ScheduleSpring = () => { 
  const [isOn, setIsOn] = useState(true);
  const [isSpringHovered, setIsSpringHovered] = useState(false);
  const [isSummerHovered, setIsSummerHovered] = useState(false);
  const [isFallHovered, setIsFallHovered] = useState(false);
  const [isWinterHovered, setIsWinterHovered] = useState(false);
  // const [isImgHovering, setIsImgHovering] = useState(false);

  

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
        {/* sub-menu*/}
        <div className='sd-sub-title'>
          <ul className='season-menu'>
            <li ><Link to={"/scheduleSpring"} >
              <div className={`white li-width ${isOn ? "on" : ""} ${isSpringHovered ? "sd-point" : ""}`}
                onMouseEnter={() => { setIsOn(false); setIsSpringHovered(true); }} onMouseLeave={() => { setIsOn(true); setIsSpringHovered(false); }}>봄</div></Link></li>
            <li><Link to={"/scheduleSummer"}
            ><div onMouseEnter={() => { setIsOn(false); setIsSummerHovered(true); }} onMouseLeave={() => { setIsOn(true); setIsSummerHovered(false); }} className={`li-width ${isSummerHovered ? 'sd-point' : ''}`}>여름</div></Link></li>
            <li ><Link to={"/scheduleFall"}
            ><div onMouseEnter={() => { setIsOn(false); setIsFallHovered(true); }} onMouseLeave={() => { setIsOn(true); setIsFallHovered(false); }} className={`li-width ${isFallHovered ? 'sd-point' : ''}`}>가을</div></Link></li>
            <li ><Link to={"/scheduleWinter"} >
              <div onMouseEnter={() => { setIsOn(false); setIsWinterHovered(true); }} onMouseLeave={() => { setIsOn(true); setIsWinterHovered(false); }} className={`li-width ${isWinterHovered ? "sd-point" : ""}`} >겨울</div></Link></li>
          </ul>
        </div>


        {/* main-contents */}
        <div className='sd-container'>
          <div className='sd-back-img'>
            <div className='sd-bi pp1'>
              <img src='/img/pp1.png'/>
            </div>
            <div className='sd-bi sd-1'>
              <img src='/img/sd_1.png'/>
            </div>
            <div className='sd-bi sd-2'>
              <img src='/img/sd_2.png'/>
            </div>
            <div className='sd-bi obj-1'>
              <img src='/img/obj_01.png'/>
            </div>
            <div className='sd-bi sd-4'>
              <img src='/img/sd_4.png'/>
            </div>
          </div>
          <table className='sd-content' >
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <a href='https://func.seoul.go.kr/campaign/link.do?SITE=STORYINFESTIVAL&SEQ=564'>
                  <div className='sd-con-frame scf3' >
                  {/* style={{  backgroundImage: "url('/img/p_jazz2.jpg')"}} */}
                  <ImageWithText imageUrl='/img/p_jazz2.jpg' 
                    propsText={<p><em>2023<br/>서울 드럼 페스티벌</em></p>}/>
                  </div>
                  </a>
                  <div className='link-box'>
                    <br/><p>2023 서울 드럼 페스티벌<br/>2023. 4. 28 ~ 4. 30</p>
                </div>
                </td>
                <td>
                  <a href='https://ddp.or.kr/index.html?menuno=239&siteno=2&bbsno=566&boardno=16&bbstopno=566&act=view&subno='>
                  <div className='sd-con-frame scf2' > 
                    <ImageWithText imageUrl='/img/p_ddp.jpg' 
                    propsText={<p><em>DDP 봄축제 : <br/>디자인 놀이동산</em></p>}/>
                  </div>
                  </a>
                  <div className='link-box'>
                    <p><br/>DDP 봄축제<br/> 2023. 5. 4 ~ 5. 7</p>
                </div>
                </td>
                <td>
                  <a href='https://seoulrose.jnfac.or.kr/#firstPage'>
                  <div className='sd-con-frame scf4' > 
                  <ImageWithText imageUrl='/img/p_rose.jpg' 
                    propsText={<p><em>2023<br/>청춘 페스티벌</em></p>}/>
                  </div>
                  </a>
                  <div className='link-box'>
                    <p><br/>2023 서울 장미축제<br/>2023. 5. 13 ~ 5. 28</p>
                </div>
                </td>
                
              
              </tr>
              <tr>
              <td>
                  <a href='http://m.ticketlink.co.kr/product/43053'>
                  <div className='sd-con-frame scf4' > 
                  <ImageWithText imageUrl='/img/p_cc.jpg' 
                    propsText={<p><em>2023<br/>청춘 페스티벌</em></p>}/>
                  </div>
                  </a>
                  <div className='link-box'>
                    <p><br/>2023 청춘페스티벌<br/>2023. 5. 5 ~ 5. 7</p>
                </div>
                </td>
                
              <td>
                  <a href='https://func.seoul.go.kr/campaign/link.do?SITE=STORYINFESTIVAL&SEQ=560'>
                  <div className='sd-con-frame scf2' >
                    {/*  style={{  backgroundImage: "url('/img/p_jazz.gif')"}} */}
                    <ImageWithText imageUrl='/img/p_jazz.gif' 
                    propsText={<p><em>2023<br/>서울 재즈 페스티벌</em></p>}/>
                  </div>
                  </a>
                  <div className='link-box'>
                    <p><br/>서울 재즈 페스티벌 <br/> 2023. 5. 26 ~ 5. 28</p>
                </div>
                </td>
                <td> 
                  <a href='https://tickets.interpark.com/goods/23005307?utm_source=google&utm_medium=cpc&utm_campaign=ticket_concert_20210617_pc_cpc_paidsearch&utm_content=consider_34&utm_term=%EC%B2%AD%EC%B6%98%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C2023&_emk_keyword=%EC%B2%AD%EC%B6%98%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C2023&gclid=CjwKCAjwrpOiBhBVEiwA_473dAPg3zd-kambTEHTfk6_quUotgexoNgoaaBxaxBmIfRB21MelHWr8xoCnE4QAvD_BwE'>
                  <div className='sd-con-frame scf1'>
                    <ImageWithText imageUrl='/img/p_mega.jpg' 
                    propsText={<p><em>2023<br/>메가필드 뮤직 페스티벌</em></p>}/>
                </div>
                  </a>
                  <div className='link-box'>
                    <p><br/>2023 메가필드 뮤직 페스티벌 <br/>2023. 6. 17 ~ 6. 18</p>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ScheduleSpring;