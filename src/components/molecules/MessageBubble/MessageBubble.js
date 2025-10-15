import React, { useMemo } from 'react';
import MessageActions from '../MessageActions';
import { MESSAGE_TYPE } from '../../pages/Chat/constants';
import { LIMITS } from '../../../constants/uiConstants';

const USER_BUBBLE_CLASS = 'message-bubble--user flex justify-end';
const AI_BUBBLE_CLASS = 'message-bubble--ai';
const BASE_BUBBLE_CLASS = 'message-bubble mb-3 md:mb-4';
const CONTENT_BASE_CLASS = 'message-bubble__content md:max-w-3xl';
const USER_CONTENT_ADDITIONAL = 'ml-auto';
const TEXT_BASE_CLASS = 'message-bubble__text px-3 md:px-4 py-2 md:py-3';
const USER_TEXT_STYLE = 'bg-primary-850 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl';
const AI_TEXT_STYLE = 'bg-gray-100 text-gray-900 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl';
const PARAGRAPH_BASE = 'whitespace-pre-wrap text-sm md:text-base leading-normal tracking-normal';
const USER_PARAGRAPH_ADDITIONAL = 'font-medium text-right';
const AI_PARAGRAPH_ADDITIONAL = 'font-normal';

const MessageBubble = ({ message }) => {
  const isUser = message.type === MESSAGE_TYPE.USER;

  const bubbleClassName = useMemo(
    () => `${BASE_BUBBLE_CLASS} ${isUser ? USER_BUBBLE_CLASS : AI_BUBBLE_CLASS}`,
    [isUser]
  );

  const contentClassName = useMemo(
    () => `${CONTENT_BASE_CLASS} max-w-[${LIMITS.MESSAGE_MAX_WIDTH_PERCENTAGE}%] ${isUser ? USER_CONTENT_ADDITIONAL : ''}`,
    [isUser]
  );

  const textClassName = useMemo(
    () => `${TEXT_BASE_CLASS} ${isUser ? USER_TEXT_STYLE : AI_TEXT_STYLE}`,
    [isUser]
  );

  const paragraphClassName = useMemo(
    () => `${PARAGRAPH_BASE} ${isUser ? USER_PARAGRAPH_ADDITIONAL : AI_PARAGRAPH_ADDITIONAL}`,
    [isUser]
  );

  return (
    <div className={bubbleClassName}>
      <div className={contentClassName}>
        <div className={textClassName}>
          <p className={paragraphClassName}>
            {message.content}
          </p>
        </div>

        {/* Show actions only for AI messages */}
        {!isUser && <MessageActions />}
      </div>
    </div>
  );
};

export default React.memo(MessageBubble);

