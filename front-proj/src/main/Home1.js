import React from 'react'
import './home.css'




const Home1 = () => {
  return (
    //메인을 블럭처리 > section1~4를 다 모은 느낌 ?
    //하나만 만들거라 없어도 될 듯
    <div className='section1'>
      {/* <div className='position-container'> */}
      {/* </div> */}

      <div className='logobox'>
        <h1>
          <img className='logo' src='img/mainlogo.png' alt='logo' />
        </h1>
      </div>

      <div className='firework'>
        <div className='f1 ff'>
          <img src='img/firework01.png' alt='fire1'/>
        </div>
        <div className='f2 ff'>
          <img src='img/firework02.png' alt='fire2' />
        </div>
        <div className='f3 ff'>
          <img src='img/firework03.png' alt='fire3' />
        </div>
        <div className='f4 ff'>
          <img src='img/firework04.png' alt='fire4' />
        </div>
      </div>



      <div className='p'>
        <img className='pp p1' src='img/main_bottom_left.png' alt='people1' />
        <img className='pp p2' src='img/main_bottom_right.png' alt='people2' />
      </div>


      <div className='back'>
        <div className='b sun'></div>
        <div className='b city'></div>
        <div className='b green'></div>
      </div>

    



    </div>
  )
}
export default Home1;