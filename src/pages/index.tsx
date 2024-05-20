import React from "react";
import { Route, Routes } from "react-router";
import { Todo } from "./todo";

export const Root: React.FC = () => (
  <Routes>
    <Route index element={<Todo />} />
  </Routes>
);
