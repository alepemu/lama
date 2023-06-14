import './Chat.css';
import logo from '../img/icon-512x512.png';
import { useState } from 'react';
import { AIchat } from '../services/ApiAI';

function Chat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: 'user', content: message });
    setChats(msgs);

    setMessage('');
    AIchat(chats)
      .then((data) => {
        msgs.push(data);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

// CHAT NEEDS TO SHOW BOTTOM MESSAGES ALWAYS
// flex-direction column-reverse... does not work well
// TO BE REFACTORED

  return (
    <div className="Chat">
      <div id="chat-btn" onClick={() => setChatOpen(!chatOpen)}>
        <img id="chat-logo" src={logo} alt="Lama logo"></img>
      </div>
      <div id="chat-container" className={chatOpen ? 'chatOpen' : 'chatClosed'}>
        <div className="chat-scroll">
        <div id="chat-msgs">
            <span className="from-advisor">
              <p>Assistant</p>
            </span>
            <div className="msg advisor">
              Hi! This is Lama, how can I help you?
            </div>
          </div>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <div key={index} id="chat-msgs" className={chat.role === 'user' ? 'user_msg' : ''}>
                  <span className={chat.role === 'user' ? 'from-user' : 'from-advisor'}>
                    <p>{chat.role.charAt(0).toUpperCase() + chat.role.slice(1)}</p>
                  </span>
                  <div className={chat.role === 'user' ? 'msg user' : 'msg advisor'}>
                    {chat.content}
                  </div>
                </div>
              ))
            : ''}
        </div>
        <div className={isTyping ? 'isTyping' : 'hide'}>
          <p>{isTyping ? 'Thinking...' : ''}</p>
        </div>
        <form id="chat-form" onSubmit={(e) => chat(e, message)}>
          <input
            id="chat-input"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autocomplete="off"
          ></input>
          <button>▲</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
