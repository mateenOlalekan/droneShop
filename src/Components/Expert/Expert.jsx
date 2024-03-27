import "./Expert.css";
import {  FcInspection } from 'react-icons/fc';
import { GiMapleLeaf } from 'react-icons/gi';
import { FcSearch, FcMindMap } from 'react-icons/fc';
const Expert = () => {
  return (
    <div className="Expert">
      <div className="ExpertContent">
        {/* <div className="ExpertTitle">Explore Products In Different Fields</div>
        <div className="ExpertText">
          From aerial photography to industrial applications, our cutting-edge products
          seamlessly integrate innovation with versatility, ensuring you experience the
          future of drone technology firsthand.
        </div> */}
      </div>
      <div className='ExpertGrid'>
        <div className='Expertcard'>
          <GiMapleLeaf color='#81c784' size={40} />
          <h3>Drone in Agriculture</h3>
          <p>Over a decade of experience in the drone industry.</p>
          <a className='learn-more'>Learn More</a>
        </div>

        <div className='Expertcard'>
          <FcInspection size={40} color='green' />
          <h3>Drone in Inspection</h3>
          <p>Our team consists of skilled and certified drone pilots.</p>
          <a className='learn-more'>Learn More</a>
        </div>

        <div className='Expertcard'>
          <FcMindMap size={40} color={'green'} />
          <h3>Drone in Geo Mapping</h3>
          <p>
            We prioritize customer satisfaction and strive to exceed
            expectations.
          </p>
          <a className='learn-more'>Learn More</a>
        </div>

        <div className='Expertcard'>
          <FcSearch size={40} className='colorful-text' />
          <h3>Search and Rescue</h3>
          <p>
            Offering reliable repair services to keep your drones in top
            condition.
          </p>
          <a className='learn-more'>Learn More</a>
        </div>
      </div> 
    </div>
  );
};

export default Expert;
