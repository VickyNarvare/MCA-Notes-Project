import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to DSA MCA Learning Platform</h1>
      <p>
        Interactive Data Structures and Algorithms learning platform for MCA students.
        Explore units, topics, visualizations, and exam preparation materials.
      </p>
      <div className="home-buttons">
        <a href="/units" className="btn btn-primary">Explore Units</a>
        <a href="/exam-prep" className="btn btn-secondary">Exam Preparation</a>
      </div>
    </div>
  );
};

export default Home;