"use client";
import useTodoApi from "../Hooks/useTodoApi";

const { createContext } = require("react");

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const todoData = useTodoApi();
  return (
    <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
