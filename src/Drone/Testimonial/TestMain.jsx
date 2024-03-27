import  { useEffect, useRef } from 'react';
import TestHeader from './TestHeader';
import TestListing from './TestListing';
import burger from '../Img/drone01.avif';
import Chicken from './images/chicken.jpg';
import kabab from './images/kabab.jpg';
import oatmeal from './images/oatmeal.jpg';
import pancakes from './images/pancakes.jpg';
import Zinger from './images/zinger.jpg';
import './Testimonial.css';
	// margin: 2rem auto;
	// display: flex;
	// flex-direction: column;
	// width: 100%;
	// max-width: 425px;
	// background-color: #FFF;
	// border-radius: 10px;
	// box-shadow: 0 10px 20px 0 rgba(#999, .25);
	// padding: .75rem;
const Listings = () => {
  const listingsGridRef = useRef(null);

  useEffect(() => {
    const handleSlider = (direction) => {
      const listingsGrid = listingsGridRef.current;

      if (!listingsGrid) {
        return;
      }

      const scrollAmount = direction === 'right' ? listingsGrid.offsetWidth : -listingsGrid.offsetWidth;

      listingsGrid.scrollTo({
        left: listingsGrid.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    };

    const handleClassChange = (direction) => {
      const arrowRight = document.querySelector('.viewMore .arrow.right');
      const arrowLeft = document.querySelector('.viewMore .arrow.left');

      if (direction === 'right') {
        arrowRight.classList.remove('dark');
        arrowLeft.classList.add('dark');
      } else if (direction === 'left') {
        arrowLeft.classList.remove('dark');
        arrowRight.classList.add('dark');
      }
    };

    const arrowRight = document.querySelector('.viewMore .arrow.right');
    const arrowLeft = document.querySelector('.viewMore .arrow.left');

    arrowRight.addEventListener('click', (e) => {
      e.preventDefault();
      handleClassChange('right');
      handleSlider('right');
    });

    arrowLeft.addEventListener('click', (e) => {
      e.preventDefault();
      handleClassChange('left');
      handleSlider('left');
    });
  }, []);

  const listingsData = [
    { id: 1, title: 'Chicken Broast', imageSrc: burger, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 2, title: 'Zinger Burger', imageSrc: Chicken, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 3, title: 'Vegetable Burger', imageSrc: kabab, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 4, title: 'Pancakes', imageSrc: oatmeal, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 5, title: 'Oat meal', imageSrc: pancakes, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 6, title: 'Kabab', imageSrc: Zinger, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 7, title: 'Cakes', imageSrc: oatmeal, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 8, title: 'Eeal', imageSrc: pancakes, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    { id: 9, title: 'Kobo', imageSrc: Zinger, deliveryInfo: '$2.49 Delivery Fee • 25–35 Min • $', rating: '4.2' },
    // Add more listings as needed
  ];

  // Duplicate listings for an endless effect
  const duplicatedListingsData = [...listingsData, ...listingsData];

  return (
    <div className="listings">
      <div className="container">
        <TestHeader />
        <div className="listings-grid" ref={listingsGridRef}>
          {Array.from({ length: Math.ceil(duplicatedListingsData.length / 3) }).map((_, index) => (
            <div className="listings-col" key={index}>
              {duplicatedListingsData.slice(index * 3, index * 3 + 3).map((listing) => (
                <TestListing
                  key={listing.id}
                  imageSrc={listing.imageSrc}
                  title={listing.title}
                  deliveryInfo={listing.deliveryInfo}
                  rating={listing.rating}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;

