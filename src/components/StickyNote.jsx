import React from "react";
import "../styles/stickynote.css";
import crossIcon from "../assets/icons/crossIcon.svg";
import plusIcon from "../assets/icons/plusIcon.svg";

//https://jsfiddle.net/Logan_Wayne/eovLdrao/

//https://codepen.io/ZeroX-DG/pen/vjdoYe

//https://htmldom.dev/make-a-resizable-element/

const StickyNote = () => {
  return (
    <div className="main-sticky-wrapper">
      <div className="sticky-menu">
        <img className="menu-icon" src={crossIcon} alt="" />
        <img className="menu-icon" src={plusIcon} alt="" />
      </div>
      <div className="sticky-content"></div>
    </div>
  );
};

export default StickyNote;
