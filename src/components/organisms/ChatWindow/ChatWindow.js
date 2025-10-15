import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatHeader from '../../molecules/ChatHeader';
import MessageBubble from '../../molecules/MessageBubble';
import MessageInput from '../../molecules/MessageInput';
import { selectActiveChat, selectActiveChatMessages } from '../../pages/Chat/selectors';
import { sendMessage } from '../../pages/Chat/actions';
import { MESSAGE_TYPE } from '../../pages/Chat/constants';
import { 
  TIMEOUTS, 
  SCROLL_BEHAVIOR, 
  PLACEHOLDER_TEXT, 
  PAGE_TITLES, 
  TIME_FORMAT,
  AUTO_REPLY_MESSAGE 
} from '../../../constants/uiConstants';

const WINDOW_CLASS = 'chat-window rounded-none md:rounded-xl overflow-hidden flex flex-col h-full bg-white relative';
const EMPTY_CONTAINER_CLASS = 'chat-window rounded-none md:rounded-xl overflow-hidden flex items-center justify-center h-full bg-white relative';
const EMPTY_CONTENT_CLASS = 'chat-window__empty text-center px-4';
const EMPTY_TITLE_CLASS = 'chat-window__empty-title text-2xl md:text-3xl font-bold text-gray-900 mb-2';
const EMPTY_TEXT_CLASS = 'chat-window__empty-text text-sm md:text-base text-gray-600';
const MESSAGES_CONTAINER_CLASS = 'chat-window__messages flex-1 overflow-y-auto px-3 md:px-6 py-4 md:py-6';
const MESSAGES_INNER_CLASS = 'chat-window__messages-container max-w-4xl mx-auto';
const NO_MESSAGES_CLASS = 'chat-window__no-messages text-center py-8';
const NO_MESSAGES_TEXT_CLASS = 'text-gray-500 text-sm md:text-base';
const INPUT_WRAPPER_CLASS = 'pb-4 md:pb-8 bg-gradient-to-b from-transparent to-white';
const MESSAGE_ID_PREFIX = 'm';
const MESSAGE_ID_AI_SUFFIX = '_ai';
const LOCALE = 'en-US';

const ChatWindow = ({ onToggleSidebar, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const activeChat = useSelector(selectActiveChat);
  const messages = useSelector(selectActiveChatMessages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: SCROLL_BEHAVIOR.SMOOTH });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = useCallback((content) => {
    const timestamp = new Date().toLocaleTimeString(LOCALE, TIME_FORMAT.SHORT);
    
    // Send user message
    const userMessage = {
      id: `${MESSAGE_ID_PREFIX}${Date.now()}`,
      type: MESSAGE_TYPE.USER,
      content,
      timestamp,
    };
    dispatch(sendMessage(userMessage));

    // Auto-reply from AI after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: `${MESSAGE_ID_PREFIX}${Date.now()}${MESSAGE_ID_AI_SUFFIX}`,
        type: MESSAGE_TYPE.AI,
        content: AUTO_REPLY_MESSAGE,
        timestamp: new Date().toLocaleTimeString(LOCALE, TIME_FORMAT.SHORT),
      };
      dispatch(sendMessage(aiResponse));
    }, TIMEOUTS.AUTO_REPLY_DELAY);
  }, [dispatch]);

  if (!activeChat) {
    return (
      <div className={EMPTY_CONTAINER_CLASS}>
        <div className={EMPTY_CONTENT_CLASS}>
          <h2 className={EMPTY_TITLE_CLASS}>
            {PAGE_TITLES.CHAT_INTERFACE}
          </h2>
          <p className={EMPTY_TEXT_CLASS}>
            {PLACEHOLDER_TEXT.SELECT_CHAT}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={WINDOW_CLASS}>
      {/* Header */}
      <ChatHeader user={activeChat} onToggleSidebar={onToggleSidebar} />

      {/* Messages */}
      <div className={MESSAGES_CONTAINER_CLASS}>
        <div className={MESSAGES_INNER_CLASS}>
          {messages.length === 0 ? (
            <div className={NO_MESSAGES_CLASS}>
              <p className={NO_MESSAGES_TEXT_CLASS}>{PLACEHOLDER_TEXT.NO_MESSAGES}</p>
            </div>
          ) : (
            messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className={INPUT_WRAPPER_CLASS}>
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default React.memo(ChatWindow);

