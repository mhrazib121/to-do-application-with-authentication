import { cancel } from "@/public/images";
import Image from "next/image";

const Todo = (props) => {
  console.log(props);
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 bg-green-500">
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div
        className={`${
          props.todo.completed && "select-none line-through"
        } flex-1`}
      >
        {props.todo.title}
      </div>

      <div
        onClick={() => handleColorChange(props.todo.id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          props.todo.color === "green" ? "bg-green-500" : null
        }`}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          props.todo.color === "yellow" ? "bg-yellow-500" : null
        }`}
        onClick={() => handleColorChange(props.todo.id, "yellow")}
      ></div>

      <div
        onClick={() => handleColorChange(props.todo.id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          props.todo.color === "red" ? "bg-red-500" : null
        }`}
      ></div>

      <Image
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
