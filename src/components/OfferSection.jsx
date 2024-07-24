import React from 'react';
import FlippableCard from './FlippableCard';
import './OfferSection.css';
import image1 from '../assets/seleccion.jpg';
import image2 from '../assets/seleccion.jpg';
import image3 from '../assets/seleccion.jpg';

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h2>¿Qué ofrecemos?</h2>
      <div className="cards">
        <FlippableCard
          frontContent={<img src={image1} alt="Imagen 1" />}
          backContent={<div>Contenido trasero</div>}
        />
        <FlippableCard
          frontContent={<img src={image2} alt="Imagen 2" />}
          backContent={<div>Contenido trasero</div>}
        />
        <FlippableCard
          frontContent={<img src={image3} alt="Imagen 3" />}
          backContent={<div>Contenido trasero</div>}
        />
      </div>
    </div>
  );
};

export default OfferSection;
