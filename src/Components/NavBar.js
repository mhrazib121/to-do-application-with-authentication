"use client";
import Link from "next/link";
import useProfile from "../Hooks/useProfile";

const NavBar = () => {
  const { profile } = useProfile();
  return (
    <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg flex justify-center">
      <div className="flex justify-between container items-center">
        <p>Simple Todo Application</p>
        {profile?.email ? (
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              location.reload();
            }}
            href=""
          >
            Logout
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
