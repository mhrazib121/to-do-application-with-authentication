import Header from "@/src/Components/Header";
import NavBar from "@/src/Components/NavBar";
import Todos from "@/src/Components/Todos";

export default function Home() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <NavBar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />

        <Todos />

        <hr className="mt-4" />
      </div>
    </div>
  );
}
