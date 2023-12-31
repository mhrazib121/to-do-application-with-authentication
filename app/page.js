"use client";
import Header from "@/src/Components/Header";
import NavBar from "@/src/Components/NavBar";
import StatisticsChat from "@/src/Components/StatisticsChat";
import Todos from "@/src/Components/Todos";
import useProfile from "@/src/Hooks/useProfile";
import Login from "./login/page";

export default function Home() {
  const { profile } = useProfile();
  return (
    <div>
      {profile?.email ? (
        <div className="bg-blue-100 h-screen">
          <NavBar />
          <div className="grid place-items-center py-10 mt-12  px-6 font-sans">
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
              <Header />
              <hr className="mt-4" />

              <Todos />

              <hr className="mt-4" />
            </div>
          </div>
          <div className="flex justify-center ">
            <StatisticsChat />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
