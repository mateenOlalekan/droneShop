
const TestListing = ({ imageSrc, title, deliveryInfo, rating }) => {
  return (
    <div className="listings-grid-element">
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text">
        <div className="text-title">
          <h3>{title}</h3>
          <div className="info">
            <span>{deliveryInfo}</span>
          </div>
        </div>
        <div className="rating">
          <span className="circle">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default TestListing;
