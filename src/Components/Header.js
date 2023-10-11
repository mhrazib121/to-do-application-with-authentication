"use client";
import { doubleTic, notes, plus } from "@/public/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useTodo from "../Hooks/useTodo";
import useProfile from "../Hooks/useProfile";

const Header = () => {
  const [taskTitle, setTaskTitle] = useState();
  const [deadline, setDeadline] = useState();
  const { profile } = useProfile();
  const { createTodo, todoCreateRes } = useTodo();

  console.log(todoCreateRes, "res");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({
      email: profile.email,
      todos: {
        title: taskTitle,
        deadline: deadline,
        isCompleted: false,
      },
    });
  };

  return (
    <div>
      <form className="flex gap-2 items-center " onSubmit={handleSubmit}>
        <Image src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full bg-gray-100 px-4 py-4 rounded-md text-lg  border-none outline-none  text-gray-500"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Type your todo"
          className="w-full bg-gray-100 px-4 py-4 rounded-md text-lg  border-none outline-none  text-gray-500"
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button className="appearance-none cursor-pointer" type="submit">
          <Image className="w-14 h-8  " src={plus} alt="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <Image className="w-4 h-4" src={doubleTic} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
