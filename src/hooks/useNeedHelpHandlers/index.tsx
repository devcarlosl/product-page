import React, { useRef, useState } from "react";

import { NeedHelpOption, TouchPosition } from "./types";

export const useNeedHelpHandlers = (needHelpOptions: NeedHelpOption[]) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const touchPosition = useRef<TouchPosition>({ startX: 0, endX: 0 });

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchPosition.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchPosition.current.endX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const { startX, endX } = touchPosition.current;
    if (startX - endX > 75) {
      const nextOptionIndex =
        currentOptionIndex + 1 < needHelpOptions.length
          ? currentOptionIndex + 1
          : 0;
      setCurrentOptionIndex(nextOptionIndex);
    } else if (endX - startX > 75) {
      const prevOptionIndex =
        currentOptionIndex - 1 >= 0
          ? currentOptionIndex - 1
          : needHelpOptions.length - 1;
      setCurrentOptionIndex(prevOptionIndex);
    }
  };

  return {
    currentOptionIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
