import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatListItem from '../../molecules/ChatListItem';
import { selectChat } from '../../pages/Chat/actions';

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
      <div className="chat-sidebar__header px-6 py-5">
        <div className="flex items-center justify-between">
          <h2 className="chat-sidebar__title text-2xl font-bold text-gray-900">
            Chats
          </h2>
          <button
            className="chat-sidebar__new-chat p-1.5 hover:bg-white/30 rounded-md transition-colors"
            aria-label="New chat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
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

