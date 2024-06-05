import React from 'react'
import './Header.css'
import { IoSearchSharp } from "react-icons/io5";
import filter from '../assets/Component 39 (2)@2x.png'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <div className='search'>
        <div className='search2'>
          <IoSearchSharp className='ice'/>
          <input placeholder='search here...'/>
        </div>
        <div className='filter'>
           <img src={filter} alt='filter'/>
           <span>filters</span>
        </div>
      </div>
      <div className='seller'>Seller</div>
    </div>
  )
};

export default Header;
