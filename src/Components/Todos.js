"use client";
import { useMemo } from "react";
import useProfile from "../Hooks/useProfile";
import useTodo from "../Hooks/useTodo";
import Todo from "./Todo";
import { Error } from "./Common";

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
      {todoList?.length > 0 ? (
        todoList?.map((todo, i) => <Todo key={i} todo={todo} />)
      ) : (
        <Error message="You did not add any task yet" />
      )}
    </div>
  );
};

export default Todos;
