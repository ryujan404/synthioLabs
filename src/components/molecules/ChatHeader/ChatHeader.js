import React from 'react';
import { MdVideocam, MdPhone } from 'react-icons/md';
import Avatar from '../../atoms/Avatar';
import VoiceIcon from "../../../assets/Voice_Call.svg";
import VideoIcon from "../../../assets/Video_Call.svg";

const ChatHeader = ({ user }) => {
  if (!user) return null;

  return (
    <div className="chat-header bg-white border-b border-gray-200 px-6 py-4">
      <div className="chat-header__content flex items-center justify-between">
        {/* User Info */}
        <div className="chat-header__user flex items-center gap-3">
          <Avatar src={user.avatar} alt={user.name} size="md" />
          <div className="chat-header__user-info">
            <h3 className="chat-header__name text-base font-semibold text-gray-900">
              {user.name}
            </h3>
            <p className="chat-header__role text-sm text-gray-500">
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

