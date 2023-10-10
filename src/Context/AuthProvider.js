"use client";
import React, { createContext } from "react";
import useLoginAndSignUp from "../Hooks/useLoginAndSignUp";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allData = useLoginAndSignUp();
  return (
    <AuthContext.Provider value={allData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
