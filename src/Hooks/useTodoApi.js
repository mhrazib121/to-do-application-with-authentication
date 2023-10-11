const { useState } = require("react");
const { BASE_URL } = require("../Constants/common");

const useTodoApi = () => {
  const [todoCreateRes, setTodoCreateRes] = useState();
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
    console.log("create todo", result);
    setTodoCreateRes(result);
  };

  return {
    createTodo,
    todoCreateRes,
  };
};

export default useTodoApi;
