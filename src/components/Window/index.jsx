import React from "react";
import TitleBar from "./TitleBar";
import { Rnd } from "react-rnd";
const Window = (props) => {
  return (
    <>
      <Rnd
        default={{
          x: 200,
          y: 150,
          width: props.width,
          height: props.height,
        }}
        bounds={"parent"}
      >
        <TitleBar width={props.width} />
        {props.component}
      </Rnd>
    </>
  );
};

export default Window;
