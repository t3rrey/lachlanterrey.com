import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

export function Provider(props) {
  

  return <Context.Provider />;
}

export default Context;
