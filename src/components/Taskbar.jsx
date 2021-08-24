import React from "react";
import "../styles/taskbar.css";
import TaskbarIcon from "./TaskbarIcon";
import personIcon from "../assets/icons/personIcon.svg";
import calculatorIcon from "../assets/icons/calculatorIcon.svg";
import mapIcon from "../assets/icons/mapIcon.svg";
import stickyNoteIcon from "../assets/icons/stickyNoteIcon.svg";
import settingsIcon from "../assets/icons/settingsIcon.svg";

const Taskbar = () => {
  return (
    <div className="main-taskbar-wrapper">
      <div className="taskbar">
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={calculatorIcon} />
        <TaskbarIcon image={mapIcon} />
        <TaskbarIcon image={stickyNoteIcon} />
        <TaskbarIcon image={settingsIcon} />
      </div>
    </div>
  );
};

export default Taskbar;
