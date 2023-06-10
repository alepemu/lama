import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ user, setUser }) {
  return (
    <div className="NavBar">
      <div id="nav-links">
        <div id="nav-left">
          <Link to="/">LAMA</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>

        <div id="nav-right">
          <p>{user ? `Hello ${user.name}` : ''}</p>
          {user ? '' : <Link to="/login" >Log In</Link>}
          {user ? (
            <Link to="/" onClick={() => setUser({})}>
              Log Out
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
