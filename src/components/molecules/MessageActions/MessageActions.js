import React from 'react';
import CopyIcon from "../../../assets/Copy.svg";
import VolumeIcon from "../../../assets/Volume.svg";
import LikeIcon from "../../../assets/Like.svg";
import DislikeIcon from "../../../assets/Dislike.svg";
import MagicIcon from "../../../assets/Magic.svg";
import ReloadIcon from "../../../assets/Reload.svg";


const MessageActions = () => {
  return (
    <div className="message-actions flex items-center mt-2">
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Copy">
        <img src={CopyIcon} alt="Copy" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Read aloud">
        <img src={VolumeIcon} alt="Volume" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Like">
        <img src={LikeIcon} alt="Like" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Dislike">
        <img src={DislikeIcon} alt="Dislike" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Stop">
        <img src={MagicIcon} alt="Magic" />
      </button>
      <button className="message-actions__button p-1 hover:bg-gray-100 rounded transition-colors" aria-label="Regenerate">
        <img src={ReloadIcon} alt="Reload" />
      </button>
    </div>
  );
};

export default MessageActions;

