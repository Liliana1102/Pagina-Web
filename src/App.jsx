import React from 'react';
import Header from './components/Header';
import SimpleSlider from './components/Slider';
import ContentSection from './components/ContentSection';
import OfferSection from './components/OfferSection'; 
import AppPromoSection from './components/AppPromoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <ContentSection />
      <OfferSection/>
      <AppPromoSection />
      <Footer/> 

    </div>
  );
}

export default App;
