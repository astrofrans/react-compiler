import React from "react";
import { useState } from "react";

export const AddTodo = ({ setTodos, color }) => {
  const [value, set] = useState("");
  const addTodo = () =>
    setTodos((_todos) => [
      ..._todos,
      { id: _todos.length + 1, status: "TODO", label: value },
    ]);

  return (
    <input
      className="w-full h-12 mt-4 rounded-3xl p-3.5 brightness-90 bg-inherit placeholder:text-inherit placeholder:invert placeholder:grayscal"
      placeholder="Add todo.."
      type="text"
      value={value}
      onChange={(e) => set(e.target.value)}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          addTodo();
          set("");
        }
      }}
    />
  );
};
