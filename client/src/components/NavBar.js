// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from 'react-router-dom';
import iconbw from '../img/icon-lama-bw.png';
import './NavBar.css';

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="NavBar">
      <div id="nav-links">
        <div id="nav-left">
          <div id="nav-home">
            <img id="nav-lama" src={iconbw}></img>
            <Link id="nav-title" to="/">
              LAMA
            </Link>
          </div>
          {isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Dashboard</Link>}
          <Link to="/about">About</Link>
        </div>

        <div id="nav-right">
          {/* <LightModeOutlinedIcon id="darklight-btn" onClick={() => console.log('hey')} /> */}
          {isLoggedIn ? (
            <Link
              className="log-btn out-btn"
              to="/login"
              onClick={() => {
                setIsLoggedIn(false);

                alert('You have been logged out');
              }}
            >
              Log Out
            </Link>
          ) : (
            <Link className="log-btn " to="/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
