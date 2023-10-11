"use client";
import { useMemo } from "react";
import useProfile from "../Hooks/useProfile";
import useTodo from "../Hooks/useTodo";
import Todo from "./Todo";

const Todos = () => {
  const { getTodoList, todoList } = useTodo();
  const { profile } = useProfile();

  useMemo(() => {
    if (profile?.email) {
      getTodoList(profile.email);
    }
  }, [profile?.email]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList?.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
