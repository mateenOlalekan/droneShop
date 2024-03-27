import {FaArrowRight,FaArrowLeft} from 'react-icons/fa';
const TestHeader = () => {
  return (
    <div className="header">
      <div className="headerMain">
        <p>Testimonial</p>
      </div>
      <div className="header-title">
        <h2>What Client say about Our Services</h2>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae voluptatem suscipit. Id, magni quam. Rerum placeat tempore quibusdam alias, cum natus expedita temporibus laborum? A dicta dolore temporibus enim!</span>
      </div>
      <div className="header-viewOptions">
        <div className="viewAll">
          <span>View all</span>
        </div>
        <div className="viewMore">
          <span className="arrow circle left">
            <i data-feather="arrow-left"><FaArrowLeft/></i>
          </span>
          <span className="arrow circle right dark">
            <i data-feather="arrow-right"><FaArrowRight/></i>
          </span>
        </div>
      </div>
      <div className="value">
        
      </div>
    </div>
  );
};

export default TestHeader;
