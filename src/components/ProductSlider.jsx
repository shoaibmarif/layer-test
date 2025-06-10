import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import shirt1 from '../assets/images/shirt1.jpg';
import shirt2 from '../assets/images/shirt2.jpg';
import shirt3 from '../assets/images/shirt3.jpg';
import shirt5 from '../assets/images/shirt5.jpg';

const ProductSlider = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [current, setCurrent] = useState(0);

  const images = [shirt1, shirt2, shirt3, shirt5,shirt1, shirt2, shirt3, shirt5];

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

const mainSettings = {
  asNavFor: nav2,
  ref: slider1,
  fade: true,
  infinite: true,
  beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
  dots: true, 
    responsive: [
    {
      breakpoint: 1023,
      settings: { dots: false, arrows: false }, 
    },
    {
      breakpoint: 600,
      settings: { dots: false, arrows: false }, 
    },
    {
      breakpoint: 480,
      settings: { dots: false, arrows: false }, 
    },
  ],
};

const thumbSettings = {
  asNavFor: nav1,
  ref: slider2,
  slidesToShow: 4,
  swipeToSlide: true,
  focusOnSelect: true,
  centerMode: true,
  arrows: false, // Show arrows on thumbnail slider
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 3, },
    },
  ],
};


  return (
    <div className='main-slider'>
      <div className="xs:h-[400px] md:h-[550px]">
        <Slider {...mainSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="object-cover w-full xs:h-[400px]  md:h-[550px] rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <Slider {...thumbSettings}>
        {images.map((src, index) => (
          <div key={index} className='p-2 px-1'>
            <img
              src={src}
              alt={`Thumbnail ${index}`}
              className={`w-full h-[100px] object-cover cursor-pointer rounded-lg box-border transition-border duration-200 ${
                current === index
                  ? "border-2 border-primaryColor"
                  : "border-2 border-transparent bg-transparent"
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
