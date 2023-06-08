import './LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="LogIn">
      <h3>Log in</h3>

      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email"></input>
        <label>Password:</label>
        <input type="password" placeholder="Enter your password"></input>
        <button type="submit">Log In</button>
        <div className="form-footer">
          <p>If you still don't have an account,</p>
          <Link to="/signup">register</Link>
          <p>now.</p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
