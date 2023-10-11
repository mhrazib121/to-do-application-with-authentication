const { useState } = require("react");
const { BASE_URL } = require("../Constants/common");

const useTodoApi = () => {
  const [todoCreateRes, setTodoCreateRes] = useState();
  const [todoList, setTodoList] = useState();
  const [todoUpdateRes, setTodoUpdateRes] = useState();
  const createTodo = async ({
    email,
    todos: { title, isCompleted, deadline },
  }) => {
    const response = await fetch(`${BASE_URL}/todos/create-todo`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email, todos: { title, isCompleted, deadline } }),
    });
    const result = await response.json();
    setTodoCreateRes(result);
  };

  const getTodoList = async (email) => {
    const response = await fetch(`${BASE_URL}/todos/?&email=${email}`, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const result = await response.json();
    setTodoList(result.data.todos);
  };
  const updateTodo = async (email, { id, isCompleted }) => {
    const response = await fetch(`${BASE_URL}/todos/?&email=${email}`, {
      method: "PATCH",
      body: JSON.stringify({ id, status: isCompleted }),
    });
    const result = await response.json();
    setTodoUpdateRes(result.data);
  };

  return {
    createTodo,
    todoCreateRes,
    getTodoList,
    todoList,
    updateTodo,
    todoUpdateRes,
  };
};

export default useTodoApi;
