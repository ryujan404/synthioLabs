import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdDashboard,
  MdInsights,
  MdDescription,
  MdChat,
} from 'react-icons/md';
import Logo from '../../atoms/Logo';
import TabButton from '../../atoms/TabButton';
import { setActiveTab } from '../../pages/Chat/actions';
import { selectActiveTab } from '../../pages/Chat/selectors';
import { TABS } from '../../pages/Chat/constants';
import Vector from "../../../assets/Vector.svg"

const NavigationBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const tabs = [
    { id: TABS.DASHBOARD, label: 'Dashboard', icon: MdDashboard },
    { id: TABS.INSIGHTS, label: 'Insights', icon: MdInsights },
    { id: TABS.TRANSCRIPT, label: 'Transcript', icon: MdDescription },
    { id: TABS.CHAT, label: 'Chat', icon: MdChat },
  ];

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId));
  };

  return (
    <nav className="navigation-bar bg-transparent sticky top-0 z-50">
      <div className="navigation-bar__container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navigation-bar__content flex items-center justify-between h-16">
          {/* Logo */}
          <div className="navigation-bar__logo flex-shrink-0">
            {/* <Logo /> */}
            <img src={Vector} alt="Logo" className="w-10 h-10" />
          </div>

          {/* Navigation Tabs - Centered */}
          <div className="navigation-bar__tabs-wrapper hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div
              className="navigation-bar__tabs-container flex items-center gap-1 bg-gray-100"
              style={{ borderRadius: "999px", padding: "0.35rem" }}
            >
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                />
              ))}
            </div>
          </div>

          {/* Right side placeholder for balance */}
          <div className="navigation-bar__spacer flex-shrink-0 w-32"></div>
        </div>

        {/* Mobile Tabs - Shown on smaller screens */}
        <div className="navigation-bar__mobile-tabs md:hidden pb-3">
          <div
            className="navigation-bar__tabs-container flex items-center gap-1 bg-gray-100"
            style={{ borderRadius: "999px", padding: "0.35rem" }}
          >
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                icon={tab.icon}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

