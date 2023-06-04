import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Dashboard /> */}
      {/* <About /> */}
    <Chat />

    </div>
  );
}

export default App;
