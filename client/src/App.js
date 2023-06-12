import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={currentUser}
        setUser={setCurrentUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
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
