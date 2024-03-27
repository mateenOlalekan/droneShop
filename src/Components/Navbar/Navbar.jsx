import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as NavLink} from 'react-router-dom';
import { TbDrone } from 'react-icons/tb';
import './Navbar.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <>
      <div className="headerCon"></div>
      <header>
        <div className="navLogo">
          <p className="two-color-word">S</p>
          <TbDrone className="tbDroneRotate" />
          <p className="two-color-word">D</p>
        </div>

        <div className="navMenu ">
          <NavLink to="/" className="navLink" >
            Home
          </NavLink>
          <NavLink to="/about" className="navLink" >
            About
          </NavLink>
          <NavLink to="/das" className="navLink" >
            Drop as Service
          </NavLink>
          <NavLink to="/das" className="navLink" >
            Drop as Service
          </NavLink>
          <NavLink to="/product" className="navLink" >
            Product
          </NavLink>
          <NavLink to="/blog" className="navLink" >
            Blog
          </NavLink>
          <NavLink to="/training" className="navLink">
            Training
          </NavLink>
        </div>

        <div className="navBtn">
          <button href="#">Contact Us</button>
        </div>

        <div className="navToggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <FaTimes color="#fff" />
            : <FaBars color="#fff" />
          }
        </div>
      </header>
    </>
  );
};

export default Header;
