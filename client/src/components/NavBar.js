import './NavBar.css';
import { Link } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

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
          <LightModeOutlinedIcon id='darklight-btn' onClick={() => console.log('hey')}/>
          {isLoggedIn ? (
            <Link
              to="/login"
              onClick={() => {
                setIsLoggedIn(false);
                alert('You have been logged out');
              }}
            >
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
