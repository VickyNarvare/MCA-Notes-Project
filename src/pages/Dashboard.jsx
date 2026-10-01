import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Your DSA learning dashboard</p>
      <div className="quick-links">
        <a href="/units" className="link">View All Units</a>
        <a href="/exam-prep" className="link">Exam Preparation</a>
        <a href="/mcq" className="link">MCQ Practice</a>
      </div>
    </div>
  );
};

export default Dashboard;