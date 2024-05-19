import React from 'react';

function PhoneComparison({ phone }) {
  return (
    <div className="phone-comparison-item">
      <h2>{phone.brand} {phone.model}</h2>
      <img height="200" src={phone.image} alt={`${phone.brand} ${phone.model}`} />
      <p><strong>Display:</strong> {phone.specs.display}</p>
      <p><strong>Processor:</strong> {phone.specs.processor}</p>
      <p><strong>Storage:</strong> {phone.specs.storage}</p>
      <p><strong>Camera:</strong> {phone.specs.camera}</p>
      <p><strong>Battery:</strong> {phone.specs.battery}</p>
      <p><strong>OS:</strong> {phone.specs.os}</p>
    </div>
  );
}

export default PhoneComparison;
