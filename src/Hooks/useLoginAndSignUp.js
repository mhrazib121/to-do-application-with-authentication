import { useState } from "react";
import { BASE_URL } from "../Constants/common";
import { toast } from "react-toastify";

const useLoginAndSignUp = () => {
  const [accessToken, setAccessToken] = useState();
  const [signUpData, setSignUpData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [profile, setProfile] = useState();

  const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.data) {
      setAccessToken(result.data.accessToken);
    } else {
      setErrorMessage(result.message);
    }
  };

  const signUpUser = async (email, password, { firstName, lastName }) => {
    const response = await fetch(`${BASE_URL}/users/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password, name: { firstName, lastName } }),
    });
    const result = await response.json();
    if (result?.data?.email) {
      setSignUpData(result);
      toast.success("User registered successfully");
    } else {
      setErrorMessage("User did not created");
      toast.error(result.message);
    }
  };

  const getProfile = async (token) => {
    const response = await fetch(`${BASE_URL}/users/get-profile`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const result = await response.json();
    if (result.data) {
      setProfile(result.data);
    }
  };

  const signOut = () => {
    const romovedAcessToken = localStorage.removeItem("accessToken");
  };

  return {
    accessToken,
    errorMessage,
    loginUser,
    signUpUser,
    signUpData,
    getProfile,
    profile,
  };
};

export default useLoginAndSignUp;
