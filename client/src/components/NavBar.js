import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn, setIsLoggedIn, user, setUser }) {
  return (
    <div className="NavBar">
      <div id="nav-links">
        <div id="nav-left">
          <Link to="/">LAMA</Link>
          {isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Dashboard</Link>}

          <Link to="/about">About</Link>
        </div>

        <div id="nav-right">
          {isLoggedIn ? (
            <Link to="/login" onClick={() => setIsLoggedIn(false)}>
              Log Out
            </Link>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
