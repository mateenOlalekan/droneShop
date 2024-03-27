import  { useRef, useState } from 'react';
import burger from '../Img/drone01.avif';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Blogs.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Blog() {
  return (
    <>
      <div className='blog-header'>
        <h3 className="title">Clients</h3>
        <p className="subTitle">Our Client</p>
        <p className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius excepturi necessitatibus vitae, in odio fugiat nostrum quod. Temporibus corrupti nemo placeat iste nam expedita modi nisi, rerum autem, magnam necessitatibus.</p>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={3}

      >
        <SwiperSlide>
            <div className="card">
               <img src={burger} alt="Oatmeal" />
                <p className='card-heading'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere magni laborum excepturi minima temporibus repellat
                velit cumque pariatur nemo. Explicabo ratione accusantium
                rerum cupiditate ipsum maxime, earum illum a veniam.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <img src={burger} alt="Oatmeal" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere magni laborum excepturi minima temporibus repellat
                velit cumque pariatur nemo. Explicabo ratione accusantium
                rerum cupiditate ipsum maxime, earum illum a veniam.
                </p>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
            <div className="card">
               <img src={burger} alt="Oatmeal" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere magni laborum excepturi minima temporibus repellat
                velit cumque pariatur nemo. Explicabo ratione accusantium
                rerum cupiditate ipsum maxime, earum illum a veniam.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card">
                <img src={burger} alt="Oatmeal" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere magni laborum excepturi minima temporibus repellat
                velit cumque pariatur nemo. Explicabo ratione accusantium
                rerum cupiditate ipsum maxime, earum illum a veniam.
                </p>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
            <div className="card">
               <img src={burger} alt="Oatmeal" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere magni laborum excepturi minima temporibus repellat
                velit cumque pariatur nemo. Explicabo ratione accusantium
                rerum cupiditate ipsum maxime, earum illum a veniam.
                </p>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}


export default Blog