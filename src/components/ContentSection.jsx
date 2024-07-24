import React from 'react';
import './ContentSection.css';
import exampleImage from '../assets/foob.jpg';  // Asegúrate de ajustar la ruta y el nombre de la imagen

const ContentSection = () => {
  return (
    <div className="content-section">
      <div className="content-row">
        <div className="content-column">
          <h2>LIDAMA</h2>
          <p>¿Qué es Lorem Ipsum?</p>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. (N. del T).</p>
        </div>
      </div>
      <div className="content-row highlight">
        <div className=" image-placeholder">
          <img src={exampleImage} alt="Ejemplo" className="example-image" />
        </div>
        <div className=" text-content">
          <h2>LIDAMA</h2>
          <p>¿Qué es Lorem Ipsum?</p>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T).</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
