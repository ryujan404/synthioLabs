import React from 'react';
import { MdMenu } from 'react-icons/md';
import Avatar from '../../atoms/Avatar';
import VoiceIcon from "../../../assets/Voice_Call.svg";
import VideoIcon from "../../../assets/Video_Call.svg";

const ChatHeader = ({ user, onToggleSidebar }) => {
  if (!user) return null;

  return (
    <div className="chat-header bg-white border-b border-gray-200 px-3 md:px-6 py-4">
      <div className="chat-header__content flex items-center justify-between">
        {/* User Info */}
        <div className="chat-header__user flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          {/* Hamburger Menu for Mobile */}
          <button 
            onClick={onToggleSidebar}
            className="chat-header__menu md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0" 
            aria-label="Open menu"
          >
            <MdMenu className="w-6 h-6 text-gray-600" />
          </button>

          <Avatar src={user.avatar} alt={user.name} size="md" />
          <div className="chat-header__user-info min-w-0 flex-1">
            <h3 className="chat-header__name text-sm md:text-base font-semibold text-gray-900 truncate">
              {user.name}
            </h3>
            <p className="chat-header__role text-xs md:text-sm text-gray-500 truncate">
              {user.role}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="chat-header__actions flex items-center">
          <button className="chat-header__action p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Video call">
            <img src={VideoIcon} alt="Video Call"/>
          </button>
          <button className="chat-header__action p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Voice call">
            <img src={VoiceIcon} alt="Voice Call"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

