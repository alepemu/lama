import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Chat from './components/Chat';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Chat />
    </div>
  );
}

export default App;
