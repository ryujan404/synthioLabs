import {
  SELECT_CHAT,
  SEND_MESSAGE,
  SET_SEARCH_QUERY,
  MARK_AS_READ,
  SET_ACTIVE_TAB,
  TABS,
} from './constants';
import { mockChats, mockMessages } from '../../../data/mockData';

const initialState = {
  chats: mockChats,
  messages: mockMessages,
  activeChatId: mockChats.length > 0 ? mockChats[0].id : null,
  searchQuery: '',
  activeTab: TABS.CHAT,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHAT:
      return {
        ...state,
        activeChatId: action.payload,
        chats: state.chats.map((chat) =>
          chat.id === action.payload ? { ...chat, unread: 0 } : chat
        ),
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.activeChatId]: [
            ...(state.messages[state.activeChatId] || []),
            action.payload,
          ],
        },
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case MARK_AS_READ:
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === action.payload
            ? { ...chat, unread: 0 }
            : chat
        ),
      };

    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    default:
      return state;
  }
};

export default chatReducer;

