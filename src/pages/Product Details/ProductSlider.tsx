// CarouselWithThumbnails.tsx
import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://i.ibb.co/2ny4FkF/Open-Euphoria-mascot-200px.png',
    'https://i.ibb.co/2M8cKFy/Blue.png',
    'https://i.ibb.co/xjW4tkM/Silver.png',
    'https://i.ibb.co/dKYNn2C/Platinum-1.png',
    'https://i.ibb.co/xjW4tkM/Silver.png',
   
  ];

  return (
    <div >
      <div className="">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={75}
          totalSlides={slides.length}
          currentSlide={currentSlide}
          isPlaying={true}
          
        >
          <Slider >
            {slides.map((slide, index) => (
              <Slide index={index} key={index}>
                <ImageWithZoom  src={slide} />
              </Slide>
            ))}
          </Slider>
         
        </CarouselProvider>
      </div>

      <div className=" flex my-5 ">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`p-2 ${currentSlide === index ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrentSlide(index)}
          >
            <img src={slide} alt={`Thumbnail ${index + 1}`} className="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
