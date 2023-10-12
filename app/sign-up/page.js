"use client";
import { Button, CommonInput } from "@/src/Components/Common";
import useAuth from "@/src/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const { signUpUser, signUpData } = useAuth();
  const router = useRouter();

  const resetFrom = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUpUser(email, password, { firstName, lastName });
    resetFrom();
    if (signUpData.successCode === 200) {
      router.push("/login");
    } else {
      toast.error("Something was wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        <div className="mb-6 flex flex-col items-center text-black">
          {/* <Logo /> */} Simple Todo Application
          <h2 className="mt-4 text-3xl text-center font-bold">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="First Name"
            placeholder="Enter your first name"
            type="text"
            key={1}
            value={firstName}
            handleOnChange={setFirstName}
          />
          <CommonInput
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            key={1}
            value={lastName}
            handleOnChange={setLastName}
          />
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
          <div className="w-full bg-blue-700 hover:bg-blue-700 rounded-md flex flex-col items-center mb-12">
            <Button label="Sign up" />
          </div>
        </form>
        <a
          href="/login"
          className="text-sm text-black flex gap-2 justify-center mb-6"
        >
          Already have an account?{" "}
          <span className="text-blue-500 hover:text-blue-800"> Login</span>
        </a>
        <div className="flex justify-between">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-800">
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
