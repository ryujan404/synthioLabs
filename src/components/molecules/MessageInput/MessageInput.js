import React, { useState } from 'react';
import { MdAttachFile, MdArrowUpward } from 'react-icons/md';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-[97%] mx-auto message-input rounded-xl shadow-[1px_10px_47px_-5px_rgba(0,0,0,0.3)] px-6 py-4 bg-white">
      <form
        onSubmit={handleSubmit}
        className="message-input__form flex items-center gap-3"
      >
        {/* Input Field with Attachment Button Inside */}
        <div className="message-input__field flex-1 relative">
          {/* Attachment Button - Inside Input */}
          <button
            type="button"
            className="message-input__attachment absolute left-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors z-10"
            aria-label="Attach file"
          >
            <MdAttachFile className="w-5 h-5 text-gray-400" />
          </button>

          {/* Input Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows="1"
            className="message-input__textarea w-full pl-12 pr-4 py-3 border-none outline-none focus:outline-none resize-none bg-transparent"
            style={{ minHeight: "48px", maxHeight: "120px" }}
          />
        </div>

        {/* Send Button - Outside on Right */}
        <button
          type="submit"
          disabled={!message.trim()}
          className="message-input__send p-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full transition-colors flex-shrink-0"
          aria-label="Send message"
        >
          <MdArrowUpward className="w-6 h-6 text-white" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

