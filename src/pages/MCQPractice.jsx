import React from 'react';
import units from '../data/units.json';

const MCQPractice = () => {
  return (
    <div className="mcq-practice-page">
      <h1>MCQ Practice</h1>
      <p>Multiple Choice Questions from Units I-V</p>
      <ul className="units-list">
        {units.map((unit) => (
          <li key={unit.id} className="unit-item">
            <h3>{unit.title}</h3>
            <ul>
              {unit.topics.map((topic) => (
                <li key={topic}>
                  {/* MCQs would be loaded from topic data files */}
                  <span>{topic} MCQs</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQPractice;