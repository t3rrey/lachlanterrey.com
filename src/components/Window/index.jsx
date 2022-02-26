import React from "react";
import { Rnd } from "react-rnd";
const Window = ({ component }) => {
  return (
    <>
      <Rnd>{component}</Rnd>
    </>
  );
};

export default Window;
