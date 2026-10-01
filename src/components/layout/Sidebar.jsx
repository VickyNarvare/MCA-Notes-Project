import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>DSA MCA</h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/units">Units</Link>
        </li>
        <li>
          <Link to="/exam-prep">Exam Prep</Link>
        </li>
        <li>
          <Link to="/mcq">MCQ Practice</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
