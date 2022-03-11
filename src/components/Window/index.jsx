import React from "react";
import TitleBar from "./TitleBar";
import { Rnd } from "react-rnd";
const Window = (props) => {
  return (
    <>
      <Rnd
        default={{
          x: 500,
          y: 300,
          width: props.width,
          height: props.height,
        }}
      >
        <TitleBar width={props.width} />
        {props.component}
      </Rnd>
    </>
  );
};

export default Window;
