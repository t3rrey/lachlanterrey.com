import React from "react";

const TaskbarIcon = (props) => {
  return (
    <li>
      <span>{props.title}</span>
      <a href="#">
        <img src={props.image} />
      </a>
    </li>
  );
};

export default TaskbarIcon;
