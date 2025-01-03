'use client';

import { useState } from 'react';
import { sendMessage } from '../utils/socket';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const roomId = 44;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(roomId, message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button type="submit">전송</button>
    </form>
  );
};

export default ChatComponent;
