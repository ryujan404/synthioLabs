import React, { useState, useCallback, useMemo } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import AttachFileIcon from "../../../assets/Attach.svg";
import { PLACEHOLDER_TEXT, ARIA_LABELS } from '../../../constants/uiConstants';

const CONTAINER_CLASS = 'w-[95%] md:w-[97%] mx-auto message-input rounded-xl shadow-[1px_10px_47px_-5px_rgba(0,0,0,0.3)] px-3 md:px-6 py-3 md:py-4 bg-white';
const FORM_CLASS = 'message-input__form flex items-center gap-2 md:gap-3';
const FIELD_CLASS = 'message-input__field flex-1 relative';
const ATTACHMENT_BUTTON_CLASS = 'message-input__attachment absolute w-11 -ml-[5px] top-1/2 -translate-y-1/2 hover:bg-gray-100 transition-colors z-10';
const TEXTAREA_CLASS = 'message-input__textarea w-full pl-11 md:pl-12 pr-2 md:pr-4 py-2 md:py-3 border-none outline-none focus:outline-none resize-none bg-transparent text-sm md:text-base';
const SEND_BUTTON_BASE_CLASS = 'message-input__send p-2 md:p-3 rounded-full transition-colors flex-shrink-0';
const SEND_BUTTON_ENABLED_CLASS = 'bg-[#3B82F6] hover:bg-[#2563EB]';
const SEND_BUTTON_DISABLED_CLASS = 'bg-gray-300 cursor-not-allowed';
const ICON_CLASS = 'w-5 h-5 md:w-6 md:h-6 text-white';
const TEXTAREA_STYLE = { minHeight: "40px", maxHeight: "120px" };
const ENTER_KEY = 'Enter';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const isMessageEmpty = useMemo(() => !message.trim(), [message]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!isMessageEmpty) {
      onSendMessage(message);
      setMessage('');
    }
  }, [message, isMessageEmpty, onSendMessage]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }, [handleSubmit]);

  const handleChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const sendButtonClassName = useMemo(
    () => `${SEND_BUTTON_BASE_CLASS} ${isMessageEmpty ? SEND_BUTTON_DISABLED_CLASS : SEND_BUTTON_ENABLED_CLASS}`,
    [isMessageEmpty]
  );

  return (
    <div className={CONTAINER_CLASS}>
      <form onSubmit={handleSubmit} className={FORM_CLASS}>
        <div className={FIELD_CLASS}>
          <button
            type="button"
            className={ATTACHMENT_BUTTON_CLASS}
            aria-label={ARIA_LABELS.ATTACH_FILE}
          >
            <img src={AttachFileIcon} alt={ARIA_LABELS.ATTACH_FILE} />
          </button>

          <textarea
            value={message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder={PLACEHOLDER_TEXT.MESSAGE_INPUT}
            rows="1"
            className={TEXTAREA_CLASS}
            style={TEXTAREA_STYLE}
          />
        </div>

        <button
          type="submit"
          disabled={isMessageEmpty}
          className={sendButtonClassName}
          aria-label={ARIA_LABELS.SEND_MESSAGE}
        >
          <MdArrowUpward className={ICON_CLASS} />
        </button>
      </form>
    </div>
  );
};

export default React.memo(MessageInput);

