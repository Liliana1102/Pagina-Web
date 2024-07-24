import React, { useState } from 'react';
import './FlippableCard.css';

const FlippableCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flippable-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flippable-card-inner">
        <div className="flippable-card-front">
          {frontContent}
        </div>
        <div className="flippable-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
