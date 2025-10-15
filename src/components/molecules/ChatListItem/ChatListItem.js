import React from 'react';
import Avatar from '../../atoms/Avatar';
import Badge from '../../atoms/Badge';

const ChatListItem = ({ chat, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        chat-list-item
        flex items-start gap-3 p-4 cursor-pointer
        transition-all duration-200
        ${
          isActive
            ? 'chat-list-item--active bg-blue-50'
            : 'chat-list-item--inactive hover:bg-white/30'
        }
      `}
    >
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

        <p className="chat-list-item__message text-sm text-gray-600 truncate mb-1">
          {chat.lastMessage}
        </p>

        <div className="chat-list-item__footer flex justify-between items-center">
          {chat.role && (
            <p className="chat-list-item__role text-xs text-gray-500 truncate flex-1">
              {chat.role}
            </p>
          )}
          {chat.unread > 0 && (
            <div className="chat-list-item__badge flex-shrink-0 ml-2">
              <Badge count={chat.unread} variant="primary" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;

