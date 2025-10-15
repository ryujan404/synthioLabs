import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import ChatListItem from '../../molecules/ChatListItem';
import { selectChat } from '../../pages/Chat/actions';
import NotePencilIcon from "../../../assets/NotePencil.svg";
import { BREAKPOINTS, ARIA_LABELS, PLACEHOLDER_TEXT } from '../../../constants/uiConstants';

const SIDEBAR_CLASS = 'chat-sidebar w-full h-full flex flex-col bg-white md:bg-transparent';
const HEADER_CLASS = 'chat-sidebar__header pr-1 px-6 py-5';
const HEADER_INNER_CLASS = 'flex items-center justify-between';
const TITLE_CLASS = 'chat-sidebar__title text-2xl font-bold ml-0 md:ml-[-22px] text-gray-900';
const BUTTON_GROUP_CLASS = 'flex items-center gap-2';
const NEW_CHAT_BUTTON_CLASS = 'chat-sidebar__new-chat p-1.5 hover:bg-white/30 rounded-md transition-colors';
const CLOSE_BUTTON_CLASS = 'chat-sidebar__close md:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors';
const CLOSE_ICON_CLASS = 'w-6 h-6 text-gray-600';
const LIST_CLASS = 'chat-sidebar__list flex-1 overflow-y-auto';
const EMPTY_CLASS = 'chat-sidebar__empty text-center py-8';
const EMPTY_TEXT_CLASS = 'text-gray-500';
const SIDEBAR_TITLE = 'Chats';
const NEW_CHAT_ALT = 'New chat';

const ChatSidebar = ({ onClose }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  const handleChatClick = useCallback((chatId) => {
    dispatch(selectChat(chatId));
    // Close sidebar on mobile after selecting a chat
    if (onClose && window.innerWidth < BREAKPOINTS.MOBILE) {
      onClose();
    }
  }, [dispatch, onClose]);

  const chatItems = useMemo(() => {
    return chats.map((chat) => (
      <ChatListItem
        key={chat.id}
        chat={chat}
        isActive={chat.id === activeChatId}
        onClick={() => handleChatClick(chat.id)}
      />
    ));
  }, [chats, activeChatId, handleChatClick]);

  return (
    <aside className={SIDEBAR_CLASS}>
      {/* Header */}
      <div className={HEADER_CLASS}>
        <div className={HEADER_INNER_CLASS}>
          <h2 className={TITLE_CLASS}>
            {SIDEBAR_TITLE}
          </h2>
          <div className={BUTTON_GROUP_CLASS}>
            <button
              className={NEW_CHAT_BUTTON_CLASS}
              aria-label={ARIA_LABELS.NEW_CHAT}
            >
              <img src={NotePencilIcon} alt={NEW_CHAT_ALT} />
            </button>
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className={CLOSE_BUTTON_CLASS}
              aria-label={ARIA_LABELS.CLOSE_SIDEBAR}
            >
              <MdClose className={CLOSE_ICON_CLASS} />
            </button>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className={LIST_CLASS}>
        {chats.length === 0 ? (
          <div className={EMPTY_CLASS}>
            <p className={EMPTY_TEXT_CLASS}>{PLACEHOLDER_TEXT.NO_CHATS}</p>
          </div>
        ) : (
          chatItems
        )}
      </div>
    </aside>
  );
};

export default React.memo(ChatSidebar);

