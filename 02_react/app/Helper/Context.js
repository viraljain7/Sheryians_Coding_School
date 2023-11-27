"use client";
import React, { createContext, useState } from "react";
export const MyContext = createContext();
const Context = ({ children }) => {
  const [name, setName] = useState("_ viral Jain");
  return (
    <>
      <MyContext.Provider value={name}>{children}</MyContext.Provider>
    </>
  );
};

export default Context;
