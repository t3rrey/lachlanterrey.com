import React from "react";
import "../styles/taskbarIcon.css";

const TaskbarIcon = (props) => {
  return (
    <div className="main-taskbar-icon" {...props}>
      <img src={props.image} alt={props.title} title={props.title} />
    </div>
  );
};

export default TaskbarIcon;
