import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TabButton from '../../atoms/TabButton';
import { setActiveTab } from '../../pages/Chat/actions';
import { selectActiveTab } from '../../pages/Chat/selectors';
import { TABS } from '../../pages/Chat/constants';
import Vector from "../../../assets/Vector.svg"
import { ReactComponent as SquaresFourIcon } from "../../../assets/SquaresFour.svg";
import { ReactComponent as MagicWandIcon } from "../../../assets/MagicWand.svg";
import { ReactComponent as NotebookIcon } from "../../../assets/Notebook.svg";
import { ReactComponent as ChatIcon } from "../../../assets/Chat.svg";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const tabs = [
    { id: TABS.DASHBOARD, label: 'Dashboard', icon: SquaresFourIcon, disabled: true },
    { id: TABS.INSIGHTS, label: 'Insights', icon: MagicWandIcon, disabled: true },
    { id: TABS.TRANSCRIPT, label: 'Transcript', icon: NotebookIcon, disabled: true },
    { id: TABS.CHAT, label: 'Chat', icon: ChatIcon, disabled: false },
  ];

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId));
  };

  return (
    <nav className="navigation-bar bg-transparent sticky top-0 z-50">
      <div className="navigation-bar__container max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="navigation-bar__content flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="navigation-bar__logo flex-shrink-0 flex items-center gap-2">
            {/* <Logo /> */}
            <img src={Vector} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-base md:text-xl font-semibold text-primary-650">
              Synthio Labs
            </span>
          </div>

          {/* Navigation Tabs - Centered */}
          <div className="navigation-bar__tabs-wrapper hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div
              className="navigation-bar__tabs-container flex items-center gap-1 bg-white"
              style={{ borderRadius: "999px", padding: "0.35rem" }}
            >
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  disabled={tab.disabled}
                />
              ))}
            </div>
          </div>

          {/* Right side placeholder for balance */}
          <div className="navigation-bar__spacer hidden md:block flex-shrink-0 w-32"></div>
        </div>

        {/* Mobile Tabs - Shown on smaller screens */}
        <div className="navigation-bar__mobile-tabs md:hidden pb-2">
          <div
            className="navigation-bar__tabs-container flex items-center justify-center gap-0.5 bg-white"
            style={{ borderRadius: "999px", padding: "0.25rem" }}
          >
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                icon={tab.icon}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
                disabled={tab.disabled}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

