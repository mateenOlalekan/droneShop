// About.js

import './About.css';
import { GoCopilot } from "react-icons/go";
import { FcOvertime, FcOnlineSupport, FcInspection,FcSearch, FcMindMap } from "react-icons/fc";
import { GiAutoRepair, GiMapleLeaf } from 'react-icons/gi';


const About = () => {
  return (
    <>
     <div className='aboutContainer'>
        <div className='about-title'>            
              <h2>Skynet Drone: The future of drone technology is here.</h2>
                At Skynet Drone, we are leading the way in developing and deploying the most advanced drone technology available. Our drones are used in a wide range of industries, including construction, agriculture, and public safety.
               Our drones are known for their reliability, durability, and ease of use. They are also equipped with the latest sensors and cameras, giving you the ability to capture stunning aerial footage or collect valuable data.
               Whether you are looking to inspect a bridge, survey a field, or deliver a package, Skynet Drone has the perfect drone solution for your needs.
           
        </div>
          <div className="about-card-grid">
          <SubCard icon={<FcOvertime size={40} />} title="Years of Experience" content="Over a decade of experience in the drone industry." />
          <SubCard icon={<GoCopilot size={40} color="green" />} title="Professional Pilots" content="Our team consists of skilled and certified drone pilots." />
          <SubCard icon={<FcOnlineSupport size={40} color={"green"} />} title="Customer Satisfaction and Affordable Price" content="We prioritize customer satisfaction and strive to exceed expectations." />
          <SubCard icon={<GiAutoRepair size={40} />} title="Quality Repair Services" content="Offering reliable repair services to keep your drones in top condition." />
        </div>
    </div>
    
      <div className="About-Spciality">
        <h1 className="About-Spciality-title"></h1>
        <p className="About-Spciality-content"></p>
      </div>
    </>
   
  );
};

const SubCard = ({ icon, title, content }) => {
  return (
    <div className="sub-card">
      <p>{icon}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <a className='learn-more'>Learn More</a>
    </div>
  );
}

export default About;
