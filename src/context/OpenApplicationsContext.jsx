import { createContext, useState, useEffect } from "react";

const Context = createContext();

export function Provider(props) {
  const [openApplications, setOpenApplications] = useState([
    {
      name: "stickyNotes",
      width: 500,
      height: 500,
      sessions: 1,
      maximised: false,
      minimised: false,
      titleBarStyle: "#ffffff",
    },
  ]);
  return <Context.Provider value={openApplications} {...props} />;
}

export default Context;
