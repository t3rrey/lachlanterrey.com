import React from "react";
import "../../styles/taskbar.css";
import TaskbarIcon from "./TaskbarIcon";
import personIcon from "../../assets/icons/personIcon.svg";
import calculatorIcon from "../../assets/icons/calculatorIcon.svg";
import mapIcon from "../../assets/icons/mapIcon.svg";
import stickyNoteIcon from "../../assets/icons/stickyNoteIcon.svg";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import browserIcon from "../../assets/icons/browserIcon.svg";

const Taskbar = ({ addStickyNote, openedApps, setOpenedApps }) => {
  const handleClick = (app) => {
    setOpenedApps((apps) => {
      // Already opened => Now close
      if (apps.includes(app)) {
        return apps.filter((appName) => appName !== app);
      } else {
        return [...apps, app];
      }
    });
  };

  return (
    <div className="main-taskbar-wrapper">
      <div className="taskbar">
        <div className="taskbar-icon-wrapper">
          <TaskbarIcon image={personIcon} onClick={() => {}} />
          <TaskbarIcon
            image={calculatorIcon}
            name="calculator"
            onClick={handleClick}
          />
          <TaskbarIcon image={browserIcon} />
          <TaskbarIcon image={mapIcon} onClick={() => handleClick("weather")} />
          <TaskbarIcon image={stickyNoteIcon} onClick={addStickyNote} />
          <TaskbarIcon image={settingsIcon} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
