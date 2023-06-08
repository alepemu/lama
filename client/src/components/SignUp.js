import { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { createUser } from '../services/ApiUser';

function SignUp() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  function handleInput(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function createNewUser(e) {
    e.preventDefault();
    const userDataValues = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    createUser(userDataValues)
    setUserData({ name: '', email: '', password: '' });
  }

  return (
    <div className="SignUp">
      <h3>New user</h3>

      <form onSubmit={createNewUser}>
        <label htmlFor="form-name">Name</label>
        <input
          type="text"
          id="form-name"
          name="name"
          value={userData.name}
          onChange={handleInput}
          placeholder="Enter user name"
        ></input>
        <label htmlFor="form-email">Email:</label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={userData.email}
          onChange={handleInput}
          placeholder="Enter valid email"
        ></input>
        <label htmlFor="form-pw">Password:</label>
        <input
          type="password"
          id="form-pw"
          name="password"
          value={userData.password}
          onChange={handleInput}
          placeholder="Enter password"
        ></input>
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
