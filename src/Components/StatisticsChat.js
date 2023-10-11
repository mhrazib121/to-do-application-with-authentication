"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useTodo from "../Hooks/useTodo";
ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsChat = () => {
  const { todoList } = useTodo();
  console.log(todoList);

  const thisMonth = new Date().getMonth();

  const getMonth = (data) => {
    const dateObject = new Date(data);
    return dateObject.getMonth();
  };

  const inCompletedTask = todoList?.filter(
    (p) => p.isCompleted === false && getMonth(p.deadline) === thisMonth
  );
  const completedTask = todoList?.filter(
    (p) => p.isCompleted === true && getMonth(p.deadline) === thisMonth
  );
  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Task",
        data: [completedTask?.length || 0, inCompletedTask?.length || 1],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          //   "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const monthName = (thisMonth) => {
    switch (thisMonth) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "Invalid month";
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-black text-center my-4">
        Monthly Statistics:{" "}
        <span className="text-violet-600 font-bold">
          {monthName(thisMonth)}
        </span>
      </h1>
      <div style={{ width: "400px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default StatisticsChat;
