import React, { useCallback, useMemo } from 'react';
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
import { BORDER_RADIUS, PADDING } from '../../../constants/uiConstants';

const NAV_CLASS = 'navigation-bar bg-transparent sticky top-0 z-50';
const CONTAINER_CLASS = 'navigation-bar__container max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8';
const CONTENT_CLASS = 'navigation-bar__content flex items-center justify-between h-14 md:h-16';
const LOGO_CLASS = 'navigation-bar__logo flex-shrink-0 flex items-center gap-2';
const LOGO_IMAGE_CLASS = 'w-8 h-8 md:w-10 md:h-10';
const LOGO_TEXT_CLASS = 'text-base md:text-xl font-semibold text-primary-650';
const TABS_WRAPPER_CLASS = 'navigation-bar__tabs-wrapper hidden md:flex absolute left-1/2 transform -translate-x-1/2';
const TABS_CONTAINER_CLASS = 'navigation-bar__tabs-container flex items-center gap-1 bg-white';
const SPACER_CLASS = 'navigation-bar__spacer hidden md:block flex-shrink-0 w-32';
const MOBILE_TABS_CLASS = 'navigation-bar__mobile-tabs md:hidden pb-2';
const MOBILE_TABS_CONTAINER_CLASS = 'navigation-bar__tabs-container flex items-center justify-center gap-0.5 bg-white';
const LOGO_ALT = 'Logo';
const APP_NAME = 'Synthio Labs';
const DESKTOP_TABS_STYLE = { borderRadius: BORDER_RADIUS.PILL, padding: PADDING.TAB_DESKTOP };
const MOBILE_TABS_STYLE = { borderRadius: BORDER_RADIUS.PILL, padding: PADDING.TAB_MOBILE };

const TAB_CONFIG = [
  { id: TABS.DASHBOARD, label: 'Dashboard', icon: SquaresFourIcon, disabled: true },
  { id: TABS.INSIGHTS, label: 'Insights', icon: MagicWandIcon, disabled: true },
  { id: TABS.TRANSCRIPT, label: 'Transcript', icon: NotebookIcon, disabled: true },
  { id: TABS.CHAT, label: 'Chat', icon: ChatIcon, disabled: false },
];

const NavigationBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const handleTabClick = useCallback((tabId) => {
    dispatch(setActiveTab(tabId));
  }, [dispatch]);

  const tabButtons = useMemo(() => {
    return TAB_CONFIG.map((tab) => (
      <TabButton
        key={tab.id}
        icon={tab.icon}
        label={tab.label}
        isActive={activeTab === tab.id}
        onClick={() => handleTabClick(tab.id)}
        disabled={tab.disabled}
      />
    ));
  }, [activeTab, handleTabClick]);

  return (
    <nav className={NAV_CLASS}>
      <div className={CONTAINER_CLASS}>
        <div className={CONTENT_CLASS}>
          {/* Logo */}
          <div className={LOGO_CLASS}>
            <img src={Vector} alt={LOGO_ALT} className={LOGO_IMAGE_CLASS} />
            <span className={LOGO_TEXT_CLASS}>
              {APP_NAME}
            </span>
          </div>

          {/* Navigation Tabs - Centered */}
          <div className={TABS_WRAPPER_CLASS}>
            <div
              className={TABS_CONTAINER_CLASS}
              style={DESKTOP_TABS_STYLE}
            >
              {tabButtons}
            </div>
          </div>

          {/* Right side placeholder for balance */}
          <div className={SPACER_CLASS}></div>
        </div>

        {/* Mobile Tabs - Shown on smaller screens */}
        <div className={MOBILE_TABS_CLASS}>
          <div
            className={MOBILE_TABS_CONTAINER_CLASS}
            style={MOBILE_TABS_STYLE}
          >
            {tabButtons}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavigationBar);

