import { useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {
  const [userLogin, setUserLogin] = useState({ email: '', pw: '' });

  function handleInput(e) {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  }

  function logInUser(e) {
    e.preventDefault();
    const userLoginValues = {
      email: userLogin.email,
      password: userLogin.pw,
    };
    setUserLogin({ email: '', pw: '' });
  }

  return (
    <div className="LogIn">
      <h3>Log in</h3>

      <form onSubmit={logInUser}>
        <label htmlFor="form-email">Email:</label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={userLogin.email}
          onChange={handleInput}
          placeholder="Enter your email"
        ></input>
        <label htmlFor="form-pw">Password:</label>
        <input
          type="password"
          id="form-pw"
          name="pw"
          value={userLogin.pw}
          onChange={handleInput}
          placeholder="Enter your password"
        ></input>
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
