import { Link } from 'react-router-dom';
import iconbw from '../img/icon-lama-bw.png';
import './NavBar.css';
import { logOutUser } from '../services/ApiUser';

function NavBar({ isLoggedIn, setIsLoggedIn, setUser, setCookie }) {
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
          {isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Board</Link>}
          <Link to="/about">+</Link>
        </div>

        <div id="nav-right">
          {isLoggedIn ? (
            <Link
              className="log-btn out-btn"
              to="/login"
              onClick={() => {
                setIsLoggedIn(false);
                setUser({});
                setCookie('koa.sess', '', { expires: new Date(0) })
                logOutUser()
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