import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../../organisms/NavigationBar';
import ChatSidebar from '../../organisms/ChatSidebar';
import ChatWindow from '../../organisms/ChatWindow';
import { selectActiveTab } from './selectors';
import { TABS } from './constants';

const Chat = () => {
  const activeTab = useSelector(selectActiveTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="chat-page flex flex-col h-screen bg-gradient-to-tr from-white via-[#f5effe] to-[#e7f3ff]">
      <NavigationBar />
      
      <main className="chat-page__content w-full lg:w-[90%] rounded-none lg:rounded-lg my-0 lg:my-4 mx-auto flex flex-1 overflow-hidden">
        {activeTab === TABS.CHAT && (
          <div className="chat-page__tab chat-page__tab--chat flex w-full relative">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleSidebar}
              />
            )}

            {/* Sidebar */}
            <div className={`
              fixed md:relative inset-y-0 left-0 z-50 md:z-0
              w-80 md:w-80 lg:w-96
              transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
              <ChatSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Chat Window */}
            <div className="chat-page__main-area flex-1 w-full md:w-auto">
              <ChatWindow onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
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

