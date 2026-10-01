import React from 'react';

const ExamPreparation = () => {
  return (
    <div className="exam-prep-page">
      <h1>Exam Preparation</h1>
      <p>MCA University Examination Focus</p>
      <div className="exam-sections">
        <div className="section two-marks">
          <h3>2-Mark Questions</h3>
          <ul>
            <li>Definition-based questions</li>
            <li>One-line explanations</li>
            <li>Important terminology</li>
          </ul>
        </div>
        <div className="section five-marks">
          <h3>5-Mark Questions</h3>
          <ul>
            <li>Medium-length answers</li>
            <li>With examples and algorithms</li>
            <li>Complexity analysis</li>
          </ul>
        </div>
        <div className="section ten-marks">
          <h3>10-Mark Questions</h3>
          <ul>
            <li>Detailed answers</li>
            <li>With algorithm, pseudocode, and diagram</li>
            <li>Complete concept coverage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamPreparation;