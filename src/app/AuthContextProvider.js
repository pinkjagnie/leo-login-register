"use client";

import { AuthProvider } from "@/context/AuthContext";

const AuthContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthContextProvider;
