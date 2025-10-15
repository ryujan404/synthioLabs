import React from 'react';
import CopyIcon from "../../../assets/Copy.svg";
import VolumeIcon from "../../../assets/Volume.svg";
import LikeIcon from "../../../assets/Like.svg";
import DislikeIcon from "../../../assets/Dislike.svg";
import MagicIcon from "../../../assets/Magic.svg";
import ReloadIcon from "../../../assets/Reload.svg";
import { ARIA_LABELS } from '../../../constants/uiConstants';

const BUTTON_CLASS = 'message-actions__button p-1 hover:bg-gray-100 rounded transition-colors';
const CONTAINER_CLASS = 'message-actions flex items-center mt-2';

const MessageActions = () => {
  return (
    <div className={CONTAINER_CLASS}>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.COPY}>
        <img src={CopyIcon} alt={ARIA_LABELS.COPY} />
      </button>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.READ_ALOUD}>
        <img src={VolumeIcon} alt={ARIA_LABELS.READ_ALOUD} />
      </button>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.LIKE}>
        <img src={LikeIcon} alt={ARIA_LABELS.LIKE} />
      </button>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.DISLIKE}>
        <img src={DislikeIcon} alt={ARIA_LABELS.DISLIKE} />
      </button>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.STOP}>
        <img src={MagicIcon} alt={ARIA_LABELS.STOP} />
      </button>
      <button className={BUTTON_CLASS} aria-label={ARIA_LABELS.REGENERATE}>
        <img src={ReloadIcon} alt={ARIA_LABELS.REGENERATE} />
      </button>
    </div>
  );
};

export default React.memo(MessageActions);

