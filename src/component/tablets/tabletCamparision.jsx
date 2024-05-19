import React from 'react';

function TabletComparison({ tablet }) {
  return (
    <div className="tablet-comparison-item">
      <h2>{tablet.brand} {tablet.model}</h2>
      <img src={tablet.image} alt={`${tablet.brand} ${tablet.model}`} />
      <p><strong>Display:</strong> {tablet.specs.display}</p>
      <p><strong>Processor:</strong> {tablet.specs.processor}</p>
      <p><strong>Storage:</strong> {tablet.specs.storage}</p>
      <p><strong>Camera:</strong> {tablet.specs.camera}</p>
      <p><strong>Battery:</strong> {tablet.specs.battery}</p>
      <p><strong>OS:</strong> {tablet.specs.os}</p>
    </div>
  );
}

export default TabletComparison;
