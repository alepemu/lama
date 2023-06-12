import { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/ApiUser';

function SignUp({ setIsLoggedIn, setCurrentUser }) {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  // const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function createNewUser(e) {
    e.preventDefault();
    // if (userData.password !== userData.password2) {
    //   alert('Passwords do not match!');
    //   return;
    // }

    const userDataValues = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    createUser(userDataValues)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .then(alert('User created!'));
    // .then(navigate('/dashboard'));
  }

  return (
    <div className="SignUp">
      <h3>Create account</h3>

      <form onSubmit={createNewUser}>
        <label htmlFor="form-name">Username:</label>
        <input
          type="text"
          id="form-name"
          name="name"
          value={userData.name}
          onChange={handleInput}
          placeholder="Username"
        ></input>
        <label htmlFor="form-email">Email:</label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={userData.email}
          onChange={handleInput}
          placeholder="✉ Email"
        ></input>
        <label htmlFor="form-pw">Password:</label>
        <input
          type="password"
          id="form-pw"
          name="password"
          value={userData.password}
          onChange={handleInput}
          placeholder="🗝 Password"
        ></input>
        <label htmlFor="form-pw-2">Confirm password:</label>
        <input
          type="password"
          id="form-pw-2"
          name="password-2"
          value={userData.password2}
          onChange={handleInput}
          placeholder="Confirm password"
        ></input>
        <button className="log-page-btn" type="submit">
          Register
        </button>
        <div className="form-footer">
          <p>If you already have an account,</p>
          <Link className="log-link" to="/login">
            Log In
          </Link>
          <p>now.</p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
