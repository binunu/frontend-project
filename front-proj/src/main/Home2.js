import React from 'react'
import './home.css'  
import CalendarForm from './CalendarForm';

const Home2 = () => {

  // const swiper = new Swiper(...);
  return (
    <div className='section2'>

      <div className='w-wave-box'>
        <div className='w-wave' />
      </div>


      <div className='main-container'>
        <div className='home2-text-box'>
          <h2 className='htb htb1'>CALENDER</h2>
          <p className='htb htb2'>월별 행사·축제·페스티벌 일정을 빠르게 확인하세요.</p>
        </div>

        <div className='calendar'>
          <CalendarForm/>
        </div>
      </div>








      {/* <div className='sec2-img'>
        <div className='s2 s2-01'><img src='img/s2_01.png' alt='음표1'/></div>
        <div className='s2 s2-02'><img src='img/s2_02.png' alt='음표2'/></div>
        <div className='s2 s2-03'><img src='img/s2_03.png' alt='기타'/></div>
        <div className='s2 s2-04'><img src='img/s2_04.png' alt='북'/></div>
      </div> */}


    </div>

  );
}
export default Home2;