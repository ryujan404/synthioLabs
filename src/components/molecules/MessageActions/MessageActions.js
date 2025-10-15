import React from 'react';
import { MdContentCopy, MdVolumeUp, MdThumbUp, MdThumbDown, MdClose, MdRefresh } from 'react-icons/md';

const MessageActions = () => {
  return (
    <div className="message-actions flex items-center gap-2 mt-2">
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Copy">
        <MdContentCopy className="w-4 h-4 text-gray-600" />
      </button>
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Read aloud">
        <MdVolumeUp className="w-4 h-4 text-gray-600" />
      </button>
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Like">
        <MdThumbUp className="w-4 h-4 text-gray-600" />
      </button>
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Dislike">
        <MdThumbDown className="w-4 h-4 text-gray-600" />
      </button>
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Stop">
        <MdClose className="w-4 h-4 text-gray-600" />
      </button>
      <button className="message-actions__button p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label="Regenerate">
        <MdRefresh className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default MessageActions;

