import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadUser } from './services/ApiUser';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import './App.css';
import { useCookies } from 'react-cookie';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    if (cookies['koa.sess']) {
      const userId = JSON.parse(atob(cookies['koa.sess'])).id
      if (userId) {
        loadUser(userId)
          .then((response) => {
            setCurrentUser(response);
            setIsLoggedIn(true);
          }).catch((error) => { console.log(error) })
      }
    }
  }, [])

  return (
    <div className="App">
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={currentUser}
        setUser={setCurrentUser}
        setCookie={setCookie}
      />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard userIdDb={currentUser._id} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}
        />
      </Routes>
      <Chat />
    </div>
  );
}

export default App;
