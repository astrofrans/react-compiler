import React from "react";

export const List = ({ children }) => (
  <ul className="overflow-y-scroll h-[500px] no-scrollbar bg-inherit">
    {children}
  </ul>
);
