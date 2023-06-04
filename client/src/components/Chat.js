import './Chat.css';
import logo from '../img/icon-512x512.png'
import { useState } from 'react';

function Chat() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="Chat">
      <div id="chat-btn" onClick={() => setChatOpen(!chatOpen)}>
        <img id="chat-logo" src={logo} alt="Lama logo"></img>
      </div>
      <div id="chat-container" className={chatOpen ? 'chatOpen' : 'chatClosed'}>
        <div id="chat-msgs">
          <div className="msg advisor">Hello, how can I assist you today?</div>
          <div className="msg user">Hi, just testing the CSS</div>
          <div className="msg advisor">blah blah blah</div>
          <div className="msg user">Yes, wawawawawawawawawawawawwawa</div>
        </div>
        <form id="chat-form">
          <input id="chat-input" type="text"></input>
          <button>▲</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
