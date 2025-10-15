import React from 'react';
import { MdContentCopy, MdVolumeUp, MdThumbUp, MdThumbDown, MdClose, MdRefresh } from 'react-icons/md';
import CopyIcon from "../../../assets/Copy.svg";
import VolumeIcon from "../../../assets/Volume.svg";
import LikeIcon from "../../../assets/Like.svg";
import DislikeIcon from "../../../assets/Dislike.svg";
import MagicIcon from "../../../assets/Magic.svg";
import ReloadIcon from "../../../assets/Reload.svg";


const MessageActions = () => {
  return (
    <div className="message-actions flex items-center gap-0.5 md:gap-1 mt-2">
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Copy">
        <img src={CopyIcon} alt="Copy" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Read aloud">
        <img src={VolumeIcon} alt="Volume" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Like">
        <img src={LikeIcon} alt="Like" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Dislike">
        <img src={DislikeIcon} alt="Dislike" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Stop">
        <img src={MagicIcon} alt="Magic" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Regenerate">
        <img src={ReloadIcon} alt="Reload" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
};

export default MessageActions;

