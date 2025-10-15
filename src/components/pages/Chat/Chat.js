import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../../organisms/NavigationBar';
import ChatSidebar from '../../organisms/ChatSidebar';
import ChatWindow from '../../organisms/ChatWindow';
import { selectActiveTab } from './selectors';
import { TABS } from './constants';
import { PAGE_TITLES, PAGE_DESCRIPTIONS } from '../../../constants/uiConstants';

const PAGE_CLASS = 'chat-page flex flex-col h-screen bg-gradient-to-tr from-white via-[#f5effe] to-[#e7f3ff]';
const CONTENT_CLASS = 'chat-page__content w-full lg:w-[90%] rounded-none lg:rounded-lg my-0 lg:my-4 mx-auto flex flex-1 overflow-hidden';
const CHAT_TAB_CLASS = 'chat-page__tab chat-page__tab--chat flex w-full relative';
const OVERLAY_CLASS = 'fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden';
const SIDEBAR_BASE_CLASS = 'fixed md:relative inset-y-0 left-0 z-50 md:z-0 w-80 md:w-80 lg:w-96 transform transition-transform duration-300 ease-in-out';
const SIDEBAR_OPEN_CLASS = 'translate-x-0';
const SIDEBAR_CLOSED_CLASS = '-translate-x-full md:translate-x-0';
const MAIN_AREA_CLASS = 'chat-page__main-area flex-1 w-full md:w-auto';
const TAB_CONTAINER_CLASS = 'chat-page__tab w-full p-8';
const TITLE_CLASS = 'chat-page__title text-3xl font-bold text-gray-900';
const DESCRIPTION_CLASS = 'chat-page__description mt-4 text-gray-600';

const Chat = () => {
  const activeTab = useSelector(selectActiveTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const sidebarClassName = `${SIDEBAR_BASE_CLASS} ${isSidebarOpen ? SIDEBAR_OPEN_CLASS : SIDEBAR_CLOSED_CLASS}`;

  return (
    <div className={PAGE_CLASS}>
      <NavigationBar />
      
      <main className={CONTENT_CLASS}>
        {activeTab === TABS.CHAT && (
          <div className={CHAT_TAB_CLASS}>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div 
                className={OVERLAY_CLASS}
                onClick={toggleSidebar}
              />
            )}

            {/* Sidebar */}
            <div className={sidebarClassName}>
              <ChatSidebar onClose={handleCloseSidebar} />
            </div>

            {/* Chat Window */}
            <div className={MAIN_AREA_CLASS}>
              <ChatWindow onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </div>
          </div>
        )}

        {activeTab === TABS.DASHBOARD && (
          <div className={`${TAB_CONTAINER_CLASS} chat-page__tab--dashboard`}>
            <h1 className={TITLE_CLASS}>
              {PAGE_TITLES.DASHBOARD}
            </h1>
            <p className={DESCRIPTION_CLASS}>
              {PAGE_DESCRIPTIONS.DASHBOARD}
            </p>
          </div>
        )}

        {activeTab === TABS.INSIGHTS && (
          <div className={`${TAB_CONTAINER_CLASS} chat-page__tab--insights`}>
            <h1 className={TITLE_CLASS}>
              {PAGE_TITLES.INSIGHTS}
            </h1>
            <p className={DESCRIPTION_CLASS}>
              {PAGE_DESCRIPTIONS.INSIGHTS}
            </p>
          </div>
        )}

        {activeTab === TABS.TRANSCRIPT && (
          <div className={`${TAB_CONTAINER_CLASS} chat-page__tab--transcript`}>
            <h1 className={TITLE_CLASS}>
              {PAGE_TITLES.TRANSCRIPT}
            </h1>
            <p className={DESCRIPTION_CLASS}>
              {PAGE_DESCRIPTIONS.TRANSCRIPT}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Chat;

