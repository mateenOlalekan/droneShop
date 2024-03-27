import { useState } from "react";
import {LiaBarsSolid,LiaTimesCircle} from 'react-icons/lia';
import {TbDrone} from 'react-icons/tb'
import './Header.css';
const Header = () => {
  const[open,setToggleMenu] =useState(false)
  return (
    <>
    <div className="headcontainer">
       <header>
        <div className="navLogo">
          <p className="navLogoColor">S</p>
          <TbDrone className="iconroll"/>
           <p className="navLogoColor">D</p>
        </div>
      
        <nav className="navMenu">
          <ul className="navLinks">
            <li className="navList"><a href="#">Home</a></li>
            <li className="navList"><a href="#">Product</a></li>
            <li className="navList"><a href="#">Drop as service</a></li>
            <li className="navList"><a href="#">Blog</a></li>
             <li className="navList"><a href="#">About</a></li>
            <li className="navList"><a href="#">Training</a></li>
          </ul>
        </nav>

        <div className="navBtn">
          <button href="#">Contact Us</button>
        </div>

      <div className="navToggle">
        {open
           ? <LiaTimesCircle color="#fff" onClick={()=>setToggleMenu(false)} />
           :< LiaBarsSolid color="#fff" onClick={()=>setToggleMenu(true)}/>
        }
        {open ? 
        <div className="navToggleContainer">
          <ul className="navToggleCon">
            <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">Home</a></p>
            <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">Product</a></p>
            <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">Drop as Service</a></p>
            <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">Blog</a></p>
             <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">About</a></p>
            <p className="navList" onClick={()=>setToggleMenu(!open)}><a href="#">Training</a></p>
          </ul> 
        </div> : <div className="navToggleNone"></div> }
      </div>
       </header>
    </div>
      
    </>
   
  );
};

export default Header;


