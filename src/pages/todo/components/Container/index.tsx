import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export const Container: React.FC<Props> = ({ children, color }) => (
  <div className={`w-[400] h-auto px-4 py-6 rounded-3xl`} style={{ backgroundColor: color }}>
    {children} 
  </div>
)