import React, { useState } from "react";
import "../styles/stickynote.css";
import crossIcon from "../assets/icons/crossIcon.svg";
import plusIcon from "../assets/icons/plusIcon.svg";
import Draggable from "react-draggable";
import { ResizeProvider, ResizeConsumer } from "react-resize-context";

const StickyNote = () => {
  const [size, setSize] = useState({});

  const getDatasetBySize = (size) => ({
    widthRange: size.width > 200 ? "large" : "small",
    heightRange: size.height > 200 ? "large" : "small",
  });

  const handleSizeChanged = (size) => {
    setSize({ size });
  };

  return (
    <ResizeProvider>
      <ResizeConsumer
        className="container"
        onSizeChanged={handleSizeChanged}
        updateDatasetBySize={getDatasetBySize}
      >
        <div className="main-sticky-wrapper">
          <div className="sticky-menu">
            <img className="menu-icon" src={crossIcon} alt="" />
            <img className="menu-icon" src={plusIcon} alt="" />
          </div>
          <div className="sticky-content"></div>
        </div>
      </ResizeConsumer>
    </ResizeProvider>
  );
};

export default StickyNote;
