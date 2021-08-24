import React from "react";
import "../styles/taskbar.css";
import TaskbarIcon from "./TaskbarIcon";
import personIcon from "../assets/icons/personIcon.svg";

const Taskbar = () => {
  return (
    <div className="main-taskbar-wrapper">
      <div className="taskbar">
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={personIcon} />
        <TaskbarIcon image={personIcon} />
      </div>
    </div>
  );
};

export default Taskbar;
