import React from 'react';
import { MdMenu } from 'react-icons/md';
import Avatar from '../../atoms/Avatar';
import VoiceIcon from "../../../assets/Voice_Call.svg";
import VideoIcon from "../../../assets/Video_Call.svg";
import { SIZE_VARIANTS, ARIA_LABELS } from '../../../constants/uiConstants';

const CONTAINER_CLASS = 'chat-header bg-white border-b border-gray-200 px-3 md:px-6 py-4';
const CONTENT_CLASS = 'chat-header__content flex items-center justify-between';
const USER_SECTION_CLASS = 'chat-header__user flex items-center gap-2 md:gap-3 flex-1 min-w-0';
const MENU_BUTTON_CLASS = 'chat-header__menu md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0';
const MENU_ICON_CLASS = 'w-6 h-6 text-gray-600';
const USER_INFO_CLASS = 'chat-header__user-info min-w-0 flex-1';
const NAME_CLASS = 'chat-header__name text-sm md:text-base font-semibold text-gray-900 truncate';
const ROLE_CLASS = 'chat-header__role text-xs md:text-sm text-gray-500 truncate';
const ACTIONS_CLASS = 'chat-header__actions flex items-center';
const ACTION_BUTTON_CLASS = 'chat-header__action p-2 hover:bg-gray-100 rounded-lg transition-colors';
const VIDEO_CALL_ALT = 'Video Call';
const VOICE_CALL_ALT = 'Voice Call';

const ChatHeader = ({ user, onToggleSidebar }) => {
  if (!user) return null;

  return (
    <div className={CONTAINER_CLASS}>
      <div className={CONTENT_CLASS}>
        <div className={USER_SECTION_CLASS}>
          <button 
            onClick={onToggleSidebar}
            className={MENU_BUTTON_CLASS}
            aria-label={ARIA_LABELS.OPEN_MENU}
          >
            <MdMenu className={MENU_ICON_CLASS} />
          </button>

          <Avatar src={user.avatar} alt={user.name} size={SIZE_VARIANTS.MEDIUM} />
          <div className={USER_INFO_CLASS}>
            <h3 className={NAME_CLASS}>
              {user.name}
            </h3>
            <p className={ROLE_CLASS}>
              {user.role}
            </p>
          </div>
        </div>

        <div className={ACTIONS_CLASS}>
          <button className={ACTION_BUTTON_CLASS} aria-label={ARIA_LABELS.VIDEO_CALL}>
            <img src={VideoIcon} alt={VIDEO_CALL_ALT}/>
          </button>
          <button className={ACTION_BUTTON_CLASS} aria-label={ARIA_LABELS.VOICE_CALL}>
            <img src={VoiceIcon} alt={VOICE_CALL_ALT}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatHeader);

