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
    if (result.statusCode === 200) {
      setTodoCreateRes(result);
      getTodoList(email);
    }
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
    const response = await fetch(
      `${BASE_URL}/todos/update-todo/?&email=${email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ id, isCompleted }),
      }
    );
    const result = await response.json();
    if (result.statusCode === 200) {
      setTodoUpdateRes(result.data);
      await getTodoList(email);
    }
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
