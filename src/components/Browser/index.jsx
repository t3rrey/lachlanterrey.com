import React from "react";
import { Rnd } from "react-rnd";
const Browser = (props) => {
  return (
    <Rnd>
      <div>
        <iframe
          src="https://www.google.com/webhp?igu=1"
          frameborder="0"
          width="800"
          height="800"
        ></iframe>
      </div>
    </Rnd>
  );
};

export default Browser;
