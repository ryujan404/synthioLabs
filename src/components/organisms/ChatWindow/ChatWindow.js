import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatHeader from '../../molecules/ChatHeader';
import MessageBubble from '../../molecules/MessageBubble';
import MessageInput from '../../molecules/MessageInput';
import { selectActiveChat, selectActiveChatMessages } from '../../pages/Chat/selectors';
import { sendMessage } from '../../pages/Chat/actions';
import { MESSAGE_TYPE } from '../../pages/Chat/constants';

const ChatWindow = ({ onToggleSidebar, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const activeChat = useSelector(selectActiveChat);
  const messages = useSelector(selectActiveChatMessages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content) => {
    // Send user message
    const userMessage = {
      id: `m${Date.now()}`,
      type: MESSAGE_TYPE.USER,
      content,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
    dispatch(sendMessage(userMessage));

    // Auto-reply from AI after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: `m${Date.now()}_ai`,
        type: MESSAGE_TYPE.AI,
        content: 'The representative will be connecting with you in 30 minutes',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }),
      };
      dispatch(sendMessage(aiResponse));
    }, 500);
  };

  if (!activeChat) {
    return (
      <div className="chat-window rounded-none md:rounded-xl overflow-hidden flex items-center justify-center h-full bg-white relative">
        <div className="chat-window__empty text-center px-4">
          <h2 className="chat-window__empty-title text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Chat Interface
          </h2>
          <p className="chat-window__empty-text text-sm md:text-base text-gray-600">
            Select a chat to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window rounded-none md:rounded-xl overflow-hidden flex flex-col h-full bg-white relative">
      {/* Header */}
      <ChatHeader user={activeChat} onToggleSidebar={onToggleSidebar} />

      {/* Messages */}
      <div className="chat-window__messages flex-1 overflow-y-auto px-3 md:px-6 py-4 md:py-6">
        <div className="chat-window__messages-container max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className="chat-window__no-messages text-center py-8">
              <p className="text-gray-500 text-sm md:text-base">No messages yet. Start a conversation!</p>
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
      <div className="pb-4 md:pb-8 bg-gradient-to-b from-transparent to-white">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;

