export const selectActiveChat = (state) =>
  state.chat.chats.find((c) => c.id === state.chat.activeChatId);

export const selectActiveChatMessages = (state) =>
  state.chat.messages[state.chat.activeChatId] || [];

export const selectFilteredChats = (state) => {
  const { chats, searchQuery } = state.chat;
  if (!searchQuery) return chats;
  
  return chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const selectActiveTab = (state) => state.chat.activeTab;

