import React from 'react';
import units from '../data/units.json';

const UnitPage = ({ params }) => {
  const unit = units.find((u) => u.id === parseInt(params.unitId));

  if (!unit) {
    return <div className="not-found">Unit not found</div>;
  }

  return (
    <div className="unit-page">
      <h1>{unit.title}</h1>
      <div className="breadcrumbs">
        <a href="/units">Units</a> {unit.title}
      </div>
      <ul className="topics-list">
        {unit.topics.map((topic) => (
          <li key={topic} className="topic-item">
            <a
              href={`/topic/${unit.id}-${topic.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {topic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnitPage;
