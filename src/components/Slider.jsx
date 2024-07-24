import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from '../assets/slider2.png';
import image2 from '../assets/slider3.png';
import image3 from '../assets/slider3.png';

const images = [image1, image2, image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
    </div>
  );
};

export default Slider;
