"use client";
import { Button, CommonInput, Error } from "@/src/Components/Common";
import useAuth from "@/src/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { loginUser, errorMessage, accessToken } = useAuth();

  const resetFrom = () => {
    setEmail("");
    setFirstName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password);
    resetFrom();
    location.reload();
  };

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      router.push("/");
      toast.success("User login successfully");
    }
  }, [accessToken, router]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        {errorMessage ? <Error message={errorMessage} /> : null}
        <div className="mb-6 flex flex-col items-center text-black">
          {/* <Logo /> */}
          Simple Todo Application
          <h2 className="mt-4 text-3xl text-center font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            key={1}
            value={email}
            handleOnChange={setEmail}
          />
          <CommonInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            key={2}
            value={password}
            handleOnChange={setPassword}
          />

          <div className="w-full bg-blue-700 hover:bg-blue-500 rounded-md flex flex-col items-center mb-12">
            <Button label="Sign In" />
          </div>
        </form>
        <Link
          href="/sign-up"
          className="text-sm text-black flex gap-2 justify-center mb-6"
        >
          Don&apos;t have an account?
          <span className="text-blue-500 hover:text-blue-800"> Register</span>
        </Link>
        <div className="flex justify-between">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-800">
            Back to home
          </a>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
