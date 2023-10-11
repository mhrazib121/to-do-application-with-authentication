import { cancel } from "@/public/images";
import Image from "next/image";
import useProfile from "../Hooks/useProfile";
import useTodo from "../Hooks/useTodo";

const Todo = (props) => {
  const { updateTodo, todoUpdateRes, getTodoList } = useTodo();
  const { profile } = useProfile();
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 ">
        <input
          type="checkbox"
          onChange={() => {
            updateTodo(profile.email, {
              id: props.todo._id,
              isCompleted: props.todo.isCompleted ? true === false : true,
            });
          }}
          className="opacity-0 absolute rounded-full"
        />
        <svg
          className={`${
            props.todo.isCompleted
              ? "fill-current w-3 h-3 text-green-500 pointer-events-none"
              : "hidden"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div
        className={`${
          props.todo.isCompleted && "select-none line-through"
        } flex-1`}
      >
        {props.todo.title}
      </div>
      <div
        className={`${
          props.todo.isCompleted && "select-none line-through"
        } flex-1`}
      >
        Deadline:{props.todo.deadline}
      </div>

      <Image
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
