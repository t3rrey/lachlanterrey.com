import React from "react";
import "../styles/taskbar.css";
import TaskbarIcon from "./TaskbarIcon";
import personIcon from "../assets/personIcon.svg";
const Taskbar = () => {
  return (
    <div id="dockContainer">
      <div id="dockWrapper">
        <div class="cap left"></div>
        <ul class="osx-dock">
          <TaskbarIcon image={personIcon} />
          <TaskbarIcon image={personIcon} />
          <TaskbarIcon image={personIcon} />
          <TaskbarIcon image={personIcon} />
        </ul>
      </div>
    </div>
  );
};

export default Taskbar;
