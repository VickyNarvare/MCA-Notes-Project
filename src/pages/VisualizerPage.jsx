import { useParams } from 'react-router';

const VisualizerPage = () => {
  const { topic } = useParams();

  return (
    <div className="visualizer-page">
      <h1>Algorithm Visualizer</h1>
      <p>Visualizing: {topic}</p>
      <div className="visualizer-controls">
        <button className="btn">Play</button>
        <button className="btn">Pause</button>
        <button className="btn">Step</button>
        <button className="btn">Reset</button>
        <input
          type="range"
          className="speed-control"
          min="1"
          max="10"
          step="1"
        />
      </div>
      <div className="visualizer-container">
        {/* Visualizer SVG/GSAP component will be rendered here */}
        <p>Visualizer for: {topic}</p>
      </div>
    </div>
  );
};

export default VisualizerPage;
