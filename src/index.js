import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "./context/OpenApplicationsContext";
ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
