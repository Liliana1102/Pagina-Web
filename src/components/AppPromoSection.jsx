import React from 'react';
import './AppPromoSection.css';
import phoneImage1 from '../assets/index_01.png';  // Ajusta la ruta de la imagen
import phoneImage2 from '../assets/menu2.png';  // Ajusta la ruta de la imagen

const AppPromoSection = () => {
  return (
    <div className="app-promo-section">
      <h2>Descarga nuestra aplicación Sazzon</h2>
      <div className="promo-container">
        <div className="promo-box">
          <img src={phoneImage1} alt="App Screenshot 1" className="phone-image" />
          <div className="promo-text-box">
            <h3>Conoce nuestra app</h3>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
          </div>
        </div>
      </div>
      <div className="promo-download">
        <button className="download-button">Descargar Aquí</button>
      </div>
      <div className="promo-container">
        <div className="promo-box">
          <div className="promo-text-box">
            <h3>Conoce nuestra app</h3>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
          </div>
          <img src={phoneImage2} alt="App Screenshot 2" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default AppPromoSection;
