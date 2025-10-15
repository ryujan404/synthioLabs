import {
  SELECT_CHAT,
  SEND_MESSAGE,
  SET_SEARCH_QUERY,
  MARK_AS_READ,
  SET_ACTIVE_TAB,
} from './constants';

export const selectChat = (chatId) => ({
  type: SELECT_CHAT,
  payload: chatId,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const markAsRead = (chatId) => ({
  type: MARK_AS_READ,
  payload: chatId,
});

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  payload: tab,
});

