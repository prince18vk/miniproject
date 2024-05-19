import React from 'react';

function LaptopComparison({ laptop }) {
  return (
    <div className="laptop-comparison-item">
      <h2>{laptop.brand} {laptop.model}</h2>
      <img src={laptop.image} alt={`${laptop.brand} ${laptop.model}`} />
      <p><strong>Display:</strong> {laptop.specs.display}</p>
      <p><strong>Processor:</strong> {laptop.specs.processor}</p>
      <p><strong>Storage:</strong> {laptop.specs.storage}</p>
      <p><strong>Camera:</strong> {laptop.specs.camera}</p>
      <p><strong>Battery:</strong> {laptop.specs.battery}</p>
      <p><strong>OS:</strong> {laptop.specs.os}</p>
    </div>
  );
}

export default LaptopComparison;
