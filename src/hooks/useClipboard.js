import { useState } from 'react';

const copy = require('clipboard-copy');

export default function useClipBoard(id, type) {
  const [showClipBoardMsg, setShowClipBoardMsg] = useState(false);

  const copyToClipBoard = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setShowClipBoardMsg(true);
  };

  return { showClipBoardMsg, copyToClipBoard };
}
