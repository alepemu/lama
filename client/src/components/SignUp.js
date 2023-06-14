import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/ApiUser';
import { useState } from 'react';
import './SignUp.css';

function SignUp({ setIsLoggedIn, setCurrentUser }) {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [pwCheck, setPwCheck] = useState('');

  const navigate = useNavigate();

  function handlePwCheck(e) {
    const pw = e.target.value;
    setPwCheck(pw);
  }
  function handleInput(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  async function createNewUser(e) {
    e.preventDefault();
    if (userData.password !== pwCheck) {
      alert('Passwords do not match!');
      return;
    }

    const userDataValues = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    const res = await createUser(userDataValues);
    if (res.error) {
      alert(res.message);
    } else {
      setCurrentUser(res);
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
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
          autoComplete="off"
        ></input>
        <label htmlFor="form-email">Email:</label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={userData.email}
          onChange={handleInput}
          placeholder="✉ Email"
          autoComplete="off"
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
          value={pwCheck}
          onChange={handlePwCheck}
          placeholder="Confirm password"
        ></input>
        <button className="log-page-btn" type="submit">
          Register
        </button>
        <div className="form-footer">
          <p>If you already have an account,</p>
          <Link className="log-link" to="/login">
            log In
          </Link>
          <p>now.</p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
