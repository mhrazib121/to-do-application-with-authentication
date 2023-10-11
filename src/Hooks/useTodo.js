import { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const useTodo = () => {
  return useContext(TodoContext);
};

export default useTodo;
