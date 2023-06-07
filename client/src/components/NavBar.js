import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div id="nav-links">
        <div id="nav-left">
          <Link to="/">LAMA</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>

        <div id="nav-right">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
