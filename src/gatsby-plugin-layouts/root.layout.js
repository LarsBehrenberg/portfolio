import React from "react";
import { GlobalProvider } from "../context/GlobalContext";

const RootLayout = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export const BrowserRootLayout = RootLayout;
export const SsrRootLayout = RootLayout;
