import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './index.css';

import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import ExamPreparation from './pages/ExamPreparation';
import Home from './pages/Home';
import MCQPractice from './pages/MCQPractice';
import TopicPage from './pages/TopicPage';
import UnitListing from './pages/UnitListing';
import UnitPage from './pages/UnitPage';
import VisualizerPage from './pages/VisualizerPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/units" element={<UnitListing />} />
            <Route path="/unit/:unitId" element={<UnitPage />} />
            <Route path="/topic/:topicId" element={<TopicPage />} />
            <Route path="/mcq" element={<MCQPractice />} />
            <Route path="/visualizer/:topic" element={<VisualizerPage />} />
            <Route path="/exam-prep" element={<ExamPreparation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
