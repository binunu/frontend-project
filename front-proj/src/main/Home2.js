import React from "react";
import "./home.css";
import CalendarForm from "./CalendarForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";

const Home2 = () => {
  // const swiper = new Swiper(...);
  return (
    <div className="section2">
      {/* <div className="w-wave-box"> */}
      <div className="w-wave" />
      {/* </div> */}
      <div className="mc1-img">
        <div className="mc1i mc1i-01">
          <img src="/img/pp4.png" />
        </div>
        <div className="mc1i mc1i-02">
          <img src="/img/pp6.png" />
        </div>
      </div>
      <div className="main-container">
        <div className="home2-text-box">
          <h2 className="htb htb1">CALENDAR</h2>
          <p className="htb htb2">
            2023년 행사·축제·페스티벌 전체 일정을 한번에 확인하세요.
          </p>
        </div>
        <div className="calendar">
          <CalendarForm />
        </div>
      </div>

      <div className="main-container-2">
        {/* <div className="p-wave-box"> */}
        <div className="p-wave" />
        {/* </div> */}
        <div className="mc1i mc1i-03">
          <img src="/img/s5_m1.png" />
        </div>
        <div className="mc1i mc1i-04">
          <img src="/img/out_fire01.png" />
        </div>
        <div className="mc1i mc1i-05">
          <img src="/img/out_fire02.png" />
        </div>
        <div className="home2-text-box">
          <h2 className="htbb htb1">이달의 행사</h2>
          <p className="htbb htb2">
            가장 가까운 행사·축제·페스티벌 일정을 빠르게 확인하세요.
          </p>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{
              draggable: true,
            }}
          >
            <SwiperSlide>
              <div className="swimg">
                <Link to="/ScheduleSpring">
                  <img src="img/p_cc.jpg" alt="음표1" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swimg">
                <Link to="/ScheduleSpring">
                  <img src="img/p_mega.jpg" alt="음표2" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swimg">
                <Link to="/ScheduleSpring">
                  <img src="img/p_jazz.gif" alt="기타" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swimg">
                <Link to="/ScheduleSpring">
                  <img src="img/p_ddp.jpg" alt="북" />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div className='sec2-img'>
      </div> */}
    </div>
  );
};
export default Home2;
