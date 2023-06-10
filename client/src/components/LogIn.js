import { useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { logUser } from '../services/ApiUser';
import { useNavigate } from 'react-router-dom';

const initialState = { email: '', pw: '' };

function LogIn({ setIsLoggedIn, setCurrentUser }) {
  const [userLogin, setUserLogin] = useState(initialState);

  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  }

  async function logInUser(e) {
    e.preventDefault();
    const userLoginDetails = {
      email: userLogin.email,
      password: userLogin.pw,
    };

    const res = await logUser(userLoginDetails);
    if (res.error) {
      alert(res.message);
      setUserLogin(initialState);
    } else {
      setCurrentUser(res);
      setIsLoggedIn(true);
      navigate('/dashboard');
      // This sets isAuthenticated = true and redirects to profile
      // props.setIsAuthenticated(true);
      // auth.login(() => navigate('/profile'));
    }
  }

  return (
    <div className="LogIn">
      <h3>Log in</h3>

      <form onSubmit={logInUser}>
        <label htmlFor="form-email">Email:</label>
        <input
          type="text"
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
