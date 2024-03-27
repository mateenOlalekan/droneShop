// About.jsx
import './About.css';
import { GoCopilot } from 'react-icons/go';
import { FcOvertime, FcOnlineSupport, FcInspection } from 'react-icons/fc';
import { GiAutoRepair, GiMapleLeaf } from 'react-icons/gi';
import { FcSearch, FcMindMap } from 'react-icons/fc';

const About = () => {
  return (
    <>
     <div className='about-section'>
        <div className='about-card first-card'>
          <h2 className='about-title'>About Us</h2>
          <p className='about-content'>
            Welcome to SkyTech Drones, where innovation meets the sky.
            Established in 2010, we are a leading provider of cutting-edge drone
            solutions for a wide range of industries. Our mission is to
            transform perspectives and redefine possibilities through
            state-of-the-art drone technology. At Skynet Drone, we are leading the way in developing and deploying
            the most advanced drone technology available. Our drones are used in
            a wide range of industries, including construction, agriculture, and
            public safety. 
          </p>
        </div>
        <div className='about-card'>
          <div className='sub-card'>
            <FcOvertime size={40} />
            <h3>Years of Experience</h3>
            <p>Over a decade of experience in the drone industry.</p>
            <a className='learn-more'>Learn More</a>
          </div>
          <div className='sub-card'>
            <GoCopilot size={40} color='green' />
            <h3>Professional Pilots</h3>
            <p>Our team consists of skilled and certified drone pilots.</p>
            <a className='learn-more'>Learn More</a>
          </div>
          <div className='sub-card'>
            <FcOnlineSupport size={40} color={'green'} />
            <h3>Customer Satisfaction and Affordable Price</h3>
            <p>
              We prioritize customer satisfaction and strive to exceed
              expectations.
            </p>
            <a className='learn-more'>Learn More</a>
          </div>
          <div className='sub-card'>
            <GiAutoRepair size={40} className='colorful-text' />
            <h3>Quality Repair Services</h3>
            <p>
              Offering reliable repair services to keep your drones in top
              condition.
            </p>
            <a className='learn-more'>Learn More</a>
          </div>
        </div>

      </div>
    </>

  );
};

export default About;






      

    