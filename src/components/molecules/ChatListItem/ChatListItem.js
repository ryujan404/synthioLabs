import React from 'react';
import Avatar from '../../atoms/Avatar';

const ChatListItem = ({ chat, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        chat-list-item
        pl-4 pr-2 pt-4 cursor-pointer
        transition-all duration-200
        ${
          isActive
            ? 'chat-list-item--active bg-blue-50 mr-3'
            : 'chat-list-item--inactive hover:bg-white/30'
        }
      `}
    >
      {/* Wrapper with border */}
      <div className="flex items-start gap-3 w-full border-b border-gray-200 pb-4 mr-4">
        {/* Avatar */}
        <div className="chat-list-item__avatar flex-shrink-0">
          <Avatar src={chat.avatar} alt={chat.name} size="md" />
        </div>

        {/* Content */}
        <div className="chat-list-item__content flex-1 min-w-0">
          <div className="chat-list-item__header mb-1">
            <h3 className="chat-list-item__name text-base font-semibold text-gray-900">
              {chat.name}
            </h3>
          </div>

          <p className="chat-list-item__message text-sm text-gray-600 truncate">
            {chat.lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;

