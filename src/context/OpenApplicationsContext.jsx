import { createContext, useState } from "react";
import applications from "../lib";
const Context = createContext();

export function Provider(props) {
  const [openApplications, setOpenApplications] = useState([
    applications["stickyNotes"],
  ]);

  const contextValue = {
    openApplications,
    setOpenApplications,
  };
  console.log("Cstate", openApplications);
  return <Context.Provider value={contextValue} {...props} />;
}

export default Context;
