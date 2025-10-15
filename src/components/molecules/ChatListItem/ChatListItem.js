import React, { useMemo } from 'react';
import Avatar from '../../atoms/Avatar';
import { SIZE_VARIANTS } from '../../../constants/uiConstants';

const BASE_CLASS = 'chat-list-item pl-4 pr-2 pt-4 cursor-pointer transition-all duration-200';
const ACTIVE_CLASS = 'chat-list-item--active bg-blue-50 mr-3';
const INACTIVE_CLASS = 'chat-list-item--inactive hover:bg-white/30';
const WRAPPER_CLASS = 'flex items-start gap-3 w-full border-b border-gray-200 pb-4 mr-4';
const AVATAR_WRAPPER_CLASS = 'chat-list-item__avatar flex-shrink-0';
const CONTENT_CLASS = 'chat-list-item__content flex-1 min-w-0';
const HEADER_CLASS = 'chat-list-item__header mb-1';
const NAME_CLASS = 'chat-list-item__name text-base font-semibold text-gray-900';
const MESSAGE_CLASS = 'chat-list-item__message text-sm text-gray-600 truncate';

const ChatListItem = ({ chat, isActive, onClick }) => {
  const containerClassName = useMemo(
    () => `${BASE_CLASS} ${isActive ? ACTIVE_CLASS : INACTIVE_CLASS}`,
    [isActive]
  );

  return (
    <div onClick={onClick} className={containerClassName}>
      <div className={WRAPPER_CLASS}>
        <div className={AVATAR_WRAPPER_CLASS}>
          <Avatar src={chat.avatar} alt={chat.name} size={SIZE_VARIANTS.MEDIUM} />
        </div>

        <div className={CONTENT_CLASS}>
          <div className={HEADER_CLASS}>
            <h3 className={NAME_CLASS}>
              {chat.name}
            </h3>
          </div>

          <p className={MESSAGE_CLASS}>
            {chat.lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatListItem);

