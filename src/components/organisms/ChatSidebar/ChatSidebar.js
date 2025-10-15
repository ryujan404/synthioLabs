import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatListItem from '../../molecules/ChatListItem';
import { selectChat } from '../../pages/Chat/actions';
import NotePencilIcon from "../../../assets/NotePencil.svg";

const ChatSidebar = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  const handleChatClick = (chatId) => {
    dispatch(selectChat(chatId));
  };

  return (
    <aside className="chat-sidebar w-full md:w-80 lg:w-96 h-full flex flex-col bg-transparent">
      {/* Header */}
      <div className="chat-sidebar__header pr-1 px-6 py-5">
        <div className="flex items-center justify-between">
          <h2 className="chat-sidebar__title text-2xl font-bold ml-[-22px] text-gray-900">
            Chats
          </h2>
          <button
            className="chat-sidebar__new-chat p-1.5 hover:bg-white/30 rounded-md transition-colors"
            aria-label="New chat"
          >
            <img src={NotePencilIcon} alt="New chat" />
          </button>
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

