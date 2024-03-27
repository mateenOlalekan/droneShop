import "./Footer.css";
import { TbDrone } from "react-icons/tb";
import {MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneForwarded } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="FTop">
          <div className="FLogo">
            <div className="navLogo">
              <p className="two-color-word">S</p>
              <TbDrone className="tbDroneRotate" />
              <p className="two-color-word">D</p>
            </div>
            <p>Change your point of View,Change your History</p>
            <div className="Finput">
              <input type="text" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="FContact">
            <span>Contact</span>
            <div className="Content">
              <MdOutlineEmail/>
              <div className="data">admin@geotech.com.my</div>
            </div>
            <div className="Content">
              <FiPhoneForwarded/>
              <div className="data">+243-903-537-9560</div>
            </div>
            <div className="Content">
              <MdOutlineLocationOn/>
              <div className="data">No 13, Sikiru Salabiu Street,.</div>
            </div>
          </div>

          <div className="FExplore">
            <span>Explore</span>
            <a>Home</a>
            <a>Product</a>
            <a>Drop as Service</a>
            <a>Blog</a>
            <a>About Us</a>
            <a>Training</a>
          </div>

          <div className="FSocial">
            <span>Support</span>
            <a>Support Desk</a>
            <a>Career</a>
            <a>FAQs</a>
            <a>Contact</a>
            <a>CallCenter</a>
          </div>
        </div>

        <div className="FBottom">
          <p>Copyright@ 2023</p>
          <p>Made by Abdul-Matin Olalekan</p>
          <p>Pricacy Policy/Terms & Services</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
