import React from 'react';
import units from '../data/units.json';

const UnitListing = () => {
  return (
    <div className="unit-listing-page">
      <h1>Units</h1>
      <p>Select a unit to explore</p>
      <ul className="units-list">
        {units.map((unit) => (
          <li key={unit.id} className="unit-item">
            <a href={`/unit/${unit.id}`}>
              <h3>{unit.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnitListing;