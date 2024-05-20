import React, { Profiler, useState } from "react";
import { Container } from "./components/Container";
import { MOCK_DATA as INITIAL_DATA } from "./mock";
import { Item } from "./components/Item";
import { updateStatus } from "./utils/update-status";
import { AddTodo } from "./components/AddTodo";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";

const DEFAULT_COLOR = "#acacec";

export const Todo: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [color, setColor] = useState(DEFAULT_COLOR);

  return (
    <Profiler id="TodoList" onRender={() => null}>
      <Layout>
        <Container color={color}>
          <Header />
          <Filters
            color={color}
            filters={filters}
            setFilters={setFilters}
            setColor={setColor}
          />
          <TodoList filters={filters} color={color} />
        </Container>
      </Layout>
    </Profiler>
  );
};

const TodoList = ({ filters, color }) => {
  const [todos, setTodos] = useState(INITIAL_DATA);
  const handleChange = (todo) =>
    setTodos((_todos) => updateStatus(_todos, todo));

  const filtered = filters?.length
    ? todos.filter((todo) => filters.includes(todo.status))
    : todos;

  return (
    <>
      <List>
        {filtered.map((todo) => (
          <Item key={todo.id} {...todo} handleChange={handleChange} />
        ))}
      </List>
      <AddTodo color={color} setTodos={setTodos} />
    </>
  );
};
