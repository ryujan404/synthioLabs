import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import ChatListItem from '../../molecules/ChatListItem';
import { selectChat } from '../../pages/Chat/actions';
import NotePencilIcon from "../../../assets/NotePencil.svg";

const ChatSidebar = ({ onClose }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  const handleChatClick = (chatId) => {
    dispatch(selectChat(chatId));
    // Close sidebar on mobile after selecting a chat
    if (onClose && window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <aside className="chat-sidebar w-full h-full flex flex-col bg-white md:bg-transparent">
      {/* Header */}
      <div className="chat-sidebar__header pr-1 px-6 py-5">
        <div className="flex items-center justify-between">
          <h2 className="chat-sidebar__title text-2xl font-bold ml-0 md:ml-[-22px] text-gray-900">
            Chats
          </h2>
          <div className="flex items-center gap-2">
            <button
              className="chat-sidebar__new-chat p-1.5 hover:bg-white/30 rounded-md transition-colors"
              aria-label="New chat"
            >
              <img src={NotePencilIcon} alt="New chat" />
            </button>
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="chat-sidebar__close md:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close sidebar"
            >
              <MdClose className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="chat-sidebar__list flex-1 overflow-y-auto">
        {chats.length === 0 ? (
          <div className="chat-sidebar__empty text-center py-8">
            <p className="text-gray-500">No chats found</p>
          </div>
        ) : (
          chats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isActive={chat.id === activeChatId}
              onClick={() => handleChatClick(chat.id)}
            />
          ))
        )}
      </div>
    </aside>
  );
};

export default ChatSidebar;

