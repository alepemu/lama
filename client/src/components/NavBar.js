import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div id="nav-links">
        <div id="nav-left">
          <a>Home</a>
          <a>Dashboard</a>
          <a>About</a>
        </div>
        <div id="nav-right">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
