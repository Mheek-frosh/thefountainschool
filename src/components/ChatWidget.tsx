import { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import './ChatWidget.css';

const whatsappNumber = '2347054885172';
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Hello, I would like to learn more about admission at The Fountain School.');

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message || 'Hello, I would like to learn more about admission at The Fountain School.');
    const url = `${whatsappBaseUrl}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div>
              <h3>Chat with us</h3>
              <p>WhatsApp support for admissions</p>
            </div>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            className="chat-textarea"
            aria-label="Message text"
          />
          <button type="button" className="chat-send" onClick={handleSend}>
            <Send size={18} />
            Send on WhatsApp
          </button>
        </div>
      )}
      <button type="button" className="chat-toggle" onClick={() => setOpen(!open)} aria-label="Open WhatsApp chat">
        <MessageSquare size={18} />
        <span>{open ? 'Close' : 'Chat'}</span>
      </button>
    </div>
  );
};

export default ChatWidget;
