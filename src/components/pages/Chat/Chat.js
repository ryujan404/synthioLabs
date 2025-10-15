import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../../organisms/NavigationBar';
import ChatSidebar from '../../organisms/ChatSidebar';
import ChatWindow from '../../organisms/ChatWindow';
import { selectActiveTab } from './selectors';
import { TABS } from './constants';

const Chat = () => {
  const activeTab = useSelector(selectActiveTab);

  return (
    <div className="chat-page flex flex-col h-screen bg-gradient-to-tr from-white via-[#f5effe] to-[#e7f3ff]">
      <NavigationBar />
      
      <main className="chat-page__content lg:w-[90%] rounded-lg my-4 mx-auto flex flex-1 overflow-hidden">
        {activeTab === TABS.CHAT && (
          <div className="chat-page__tab chat-page__tab--chat flex w-full">
            {/* Sidebar */}
            <ChatSidebar />

            {/* Chat Window */}
            <div className="chat-page__main-area flex-1">
              <ChatWindow />
            </div>
          </div>
        )}

        {activeTab === TABS.DASHBOARD && (
          <div className="chat-page__tab chat-page__tab--dashboard w-full p-8">
            <h1 className="chat-page__title text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="chat-page__description mt-4 text-gray-600">
              Dashboard content will be displayed here...
            </p>
          </div>
        )}

        {activeTab === TABS.INSIGHTS && (
          <div className="chat-page__tab chat-page__tab--insights w-full p-8">
            <h1 className="chat-page__title text-3xl font-bold text-gray-900">
              Insights
            </h1>
            <p className="chat-page__description mt-4 text-gray-600">
              Insights content will be displayed here...
            </p>
          </div>
        )}

        {activeTab === TABS.TRANSCRIPT && (
          <div className="chat-page__tab chat-page__tab--transcript w-full p-8">
            <h1 className="chat-page__title text-3xl font-bold text-gray-900">
              Transcript
            </h1>
            <p className="chat-page__description mt-4 text-gray-600">
              Transcript content will be displayed here...
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Chat;

