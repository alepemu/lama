import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="SignUp">
      <h3>New user</h3>

      <form>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Enter user name"></input>
        <label>Email:</label>
        <input type="email" placeholder="Enter valid email"></input>
        <label>Password:</label>
        <input type="password" placeholder="Enter password"></input>
        <button type="submit">Register</button>
        <div className="form-footer">
          <p>If you already have an account,</p>
          <Link to="/login">Log In</Link>
          <p>now.</p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
