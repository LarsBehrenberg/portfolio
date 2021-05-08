import React from "react";
import Layout from "../components/Layout";

const PageLayout = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>;
};

export const BrowserPageLayout = PageLayout;
export const SsrPageLayout = PageLayout;
