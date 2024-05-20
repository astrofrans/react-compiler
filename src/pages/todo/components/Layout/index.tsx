import React from "react";

export const Layout = ({ children }) => (
  <div
    className="flex b-screen justify-center items-center"
    style={{ height: "100vh" }}
  >
    {children}
  </div>
);
