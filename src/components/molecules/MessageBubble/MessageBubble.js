import React from 'react';
import MessageActions from '../MessageActions';
import { MESSAGE_TYPE } from '../../pages/Chat/constants';

const MessageBubble = ({ message }) => {
  const isUser = message.type === MESSAGE_TYPE.USER;

  return (
    <div
      className={`message-bubble mb-3 md:mb-4 ${
        isUser ? 'message-bubble--user flex justify-end' : 'message-bubble--ai'
      }`}
    >
      <div className={`message-bubble__content max-w-[90%] md:max-w-3xl ${isUser ? 'ml-auto' : ''}`}>
        <div
          className={`message-bubble__text px-3 md:px-4 py-2 md:py-3 rounded-2xl ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>

        {/* Show actions only for AI messages */}
        {!isUser && <MessageActions />}
      </div>
    </div>
  );
};

export default MessageBubble;

