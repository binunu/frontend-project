import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
          <ul className='category'>
            <li><Link to ={'/'}><img className='mini-logo' src='img/minilogo.png'/></Link></li>
            <li><Link to ={'/schedual'}>행사일정</Link></li>
            <li><Link to ={'/galary'}>갤러리</Link></li>
            <li><Link to ={'/community'}>커뮤니티</Link></li>
          </ul>
 
    </header>

    // 




  )
}
export default Header;